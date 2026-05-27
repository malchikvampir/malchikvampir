"use client";

import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { RocketScene } from "../../components/three/Rocket";
import BiographyCards from "../../components/AestheticCard";

export default function AboutPage() {
    const [running, setRunning] = useState(false);
    const [paused, setPaused] = useState(false);
    
    return (
        <div className="max-w-6xl mx-auto px-6 py-10 leading-relaxed">
            <section className="mb-10 w-full flex">
                <div className="space-y-4 md:w-4/6">
                    <BiographyCards />
                </div>
                
                <div className="hidden md:block md:w-2/6 h-full ">
                    <Canvas className="md:w-1/6 mt-240" >
                        <RocketScene running={running} paused={paused} />
                    </Canvas>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Контакты</h2>

                <div className="shadow-md rounded-2xl p-5 border space-y-2">
                    <p>Email: malchikvampir@gmail.com</p>
                    <p><span className="text-red-500">По всем вопросам</span>: <a href="https://t.me/JohnyPC" className="text-blue-300 underline hover:text-blue-800 hover:no-underline">
                        Менеджер Мальчика-Вампира
                    </a></p>
                    <p>Крёстный отец в стендапе: Руслан Исмаилов</p>
                </div>
            </section>
        </div>
    );
}