"use client";

import { useFrame } from "@react-three/fiber";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import * as THREE from "three";

// === PIXEL ===
const PIXEL = 2;

interface PixelProps {
    x: number;
    y: number;
    color: string;
}

function Pixel({ x, y, color }: PixelProps) {
    return (
        <mesh position={[x * PIXEL, y * PIXEL, 0]}>
            <planeGeometry args={[PIXEL, PIXEL]} />
            <meshBasicMaterial color={color} />
        </mesh>
    );
}

// === РАКЕТА ===
interface RocketProps {
    direction: THREE.Vector2;
    setDirection: React.Dispatch<React.SetStateAction<THREE.Vector2>>;
    running: boolean;
    paused: boolean;
}

const Rocket = forwardRef<THREE.Group, RocketProps>(
    function Rocket({ direction, setDirection, running, paused }, ref) {
        const rocketRef = useRef<THREE.Group>(null);

        useImperativeHandle(ref, () => rocketRef.current as THREE.Group, []);

        const rocketMap = [
            [0, 0, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 2, 2, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 0],
            [0, 1, 3, 3, 1, 0]
        ];

        const colors: Record<number, string> = {
            1: "#FFD700",
            2: "#87CEEB",
            3: "#FF0000"
        };

        useFrame(() => {
            if (!running || paused || !rocketRef.current) return;

            rocketRef.current.position.x += direction.x * 0.6;
            rocketRef.current.position.y += direction.y * 0.6;
        });

        return (
            <group ref={rocketRef} scale={0.33}>
                {rocketMap.map((row, y) =>
                    row.map((cell, x) =>
                        cell !== 0 ? (
                            <Pixel
                                key={`${x}-${y}`}
                                x={x - 3}
                                y={-y + 4}
                                color={colors[cell]}
                            />
                        ) : null
                    )
                )}
            </group>
        );
    }
);

// === PARTICLES ===
interface ParticlesProps {
    rocketRef: React.RefObject<THREE.Group>;
    direction: THREE.Vector2;
    running: boolean;
    paused: boolean;
}

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    type: "fire" | "smoke";
}

function Particles({ rocketRef, direction, running, paused }: ParticlesProps) {
    const pointsRef = useRef<THREE.Points>(null);

    const MAX = 800;
    const [particles, setParticles] = useState<Particle[]>([]);

    const positions = useRef(new Float32Array(MAX * 3));
    const colors = useRef(new Float32Array(MAX * 3));

    const spawnParticle = (): Particle | undefined => {
        if (!running || paused) return;

        const rocket = rocketRef.current;
        if (!rocket) return;

        const tailWidth = 2 * PIXEL;
        const offsetX = (Math.random() - 0.5) * tailWidth;

        const local = new THREE.Vector2(
            offsetX,
            -(9 / 2) * PIXEL
        );

        const angle = rocket.rotation.z;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);

        const worldX =
            rocket.position.x + local.x * cos - local.y * sin;
        const worldY =
            rocket.position.y + local.x * sin + local.y * cos;

        const vel = direction.clone().multiplyScalar(-1);

        return {
            x: worldX,
            y: worldY,
            vx: vel.x + (Math.random() - 0.5) * 0.5,
            vy: vel.y + (Math.random() - 0.5) * 0.5,
            life: 50,
            type: Math.random() > 0.5 ? "fire" : "smoke"
        };
    };

    useFrame(() => {
        if (!pointsRef.current) return;

        let newParticles = [...particles];

        if (running && !paused) {
            for (let i = 0; i < 6; i++) {
                const p = spawnParticle();
                if (p) newParticles.push(p);
            }
        }

        let i3 = 0;

        newParticles = newParticles.filter((p) => {
            p.x += p.vx;
            p.y += p.vy;
            p.life--;

            let r, g, b;

            if (p.type === "fire") {
                r = 1;
                g = Math.random() * 0.6;
                b = 0;
            } else {
                r = g = b = 0.5;
                p.vx *= 0.98;
                p.vy *= 0.98;
            }

            positions.current[i3] = p.x;
            positions.current[i3 + 1] = p.y;
            positions.current[i3 + 2] = 0;

            colors.current[i3] = r;
            colors.current[i3 + 1] = g;
            colors.current[i3 + 2] = b;

            i3 += 3;

            return p.life > 0;
        });

        setParticles(newParticles);

        pointsRef.current.geometry.setDrawRange(0, newParticles.length);
        pointsRef.current.geometry.attributes.position.needsUpdate = true;
        pointsRef.current.geometry.attributes.color.needsUpdate = true;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions.current, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    args={[colors.current, 3]}
                />
            </bufferGeometry>
            <pointsMaterial size={4} vertexColors />
        </points>
    );
}

// === ОСНОВНАЯ СЦЕНА ===
interface RocketSceneProps {
    running: boolean;
    paused: boolean;
}

export function RocketScene({ running, paused }: RocketSceneProps) {
    const rocketRef = useRef<THREE.Group>(null);
    const [direction, setDirection] = useState(new THREE.Vector2(0, 1));

    return (
        <>
            <orthographicCamera
                position={[0, 0, 100]}
                args={[-120, 120, 120, -120, 1, 1000]}
            />

            <Rocket
                ref={rocketRef}
                direction={direction}
                setDirection={setDirection}
                running={running}
                paused={paused}
            />

            <Particles
                rocketRef={rocketRef}
                direction={direction}
                running={running}
                paused={paused}
            />
        </>
    );
}
