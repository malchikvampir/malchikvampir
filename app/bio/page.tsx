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
            <h1 className="font-[--font-cormorant-garamond] text-4xl font-semibold  mb-12">Исповедь Мальчика-Вампира</h1>

            <section className="mb-10 w-full flex">
                <div className="space-y-4 w-5/6">
                    <div className="shadow-md rounded-2xl p-5 border hover:bg-neutral-400/7">
                        <h3 className="font-[--font-cormorant-garamond] text-3xl italic text-red-500 mb-4">Первое несмелое ха-ха</h3>
                        <p>
                            Я никогда — ну, или типа того — не знал ничего о Комедии, пока я впервые не увидел номера Ширвиндта и Державина. <br />
                            Я влюбился в Комедию и пошёл выступать в ближайший бар.
                        </p>
                    </div>

                    <div className="shadow-md rounded-2xl p-5 border hover:bg-neutral-400/7">
                        <h3 className="font-[--font-cormorant-garamond] text-3xl italic text-red-500 mb-4">Стендап-лунатик</h3>
                        <p>
                            Комедия забрала у меня <span className="text-red-500">всё</span>. <br />
                            Любую мысль я стремился превратить в юмор. Это было заточение.<br />
                            <span className="italic">Я повторял одни и те же шутки пьяным мотоциклистам в баре каждый день</span>
                        </p>
                    </div>

                    <div className="shadow-md rounded-2xl p-5 border hover:bg-neutral-400/7">
                        <h3 className="font-[--font-cormorant-garamond] text-3xl italic text-red-500 mb-4">Клоунская Академия Которого</h3>
                        <p>
                            Cжимая в руке последние приколы, я поступил в <a href="https://kotorogo.ru/show/" className="text-blue-300 underline hover:text-blue-800 hover:no-underline">театр</a>.<br />
                            Меня стали приводить в порядок: я стал отличать смешное от серьёзного и жонглировать. <br />
                            Но вдруг выяснилось страшное. Оказалось, что я вампир.
                        </p>
                    </div>

                    <div className="shadow-md rounded-2xl p-5 border hover:bg-neutral-400/7">
                        <h3 className="font-[--font-cormorant-garamond] text-3xl italic text-red-500 mb-4">Меня уже не остановить</h3>
                        <p>
                            Теперь я живу в Ржевском лесопарке и нападаю на спортсменов и грибников. В моей душе нет сострадания, 
                            я безжалостный монстр, одержимый жаждой <span className="text-red-500">крови</span>💔
                            <br /><br />
                            Приходите на мои выступления!
                        </p>
                    </div>
                </div>
                
                <div className="w-1/6 h-full">
                    <Canvas className="w-1/6 min-h-175" >
                        <RocketScene running={running} paused={paused} />
                    </Canvas>
                    <div className="left-3 space-y-2">
                        <button onClick={() => { setRunning(true); setPaused(false); }} className="bg-white px-3 py-1 rounded">
                            Start
                        </button>

                        <button onClick={() => setPaused(p => !p)} className="bg-white px-3 py-1 rounded">
                            Pause
                        </button>
                    </div>
                </div>
            </section>
            
            <section>
                <BiographyCards />
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