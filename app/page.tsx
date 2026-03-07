'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import EventCard from '../components/EventCard';

export default function HomePage() {
    const [animate, setAnimate] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 3000);

        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains('dark'));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        setIsDark(document.documentElement.classList.contains('dark'));

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);

    const spring = {
        type: 'spring',
        stiffness: 120,
        damping: 18,
        mass: 0.8,
    };

    return (
        <main className="relative mx-auto max-w-6xl overflow-hidden px-6 pt-10 space-y-32">

            <div className="relative">
                {/* Мобилка Картинка */}
                <motion.div
                    initial={{ y: 250, opacity: 0, rotate: 8 }}
                    animate={animate ? { y: 0, opacity: 1, rotate: 3 } : {}}
                    transition={spring}
                    className="
                        absolute
                        left-0
                        top-1/2
                        w-75
                        h-132.5
                        md:hidden
                        -translate-y-1/2
                    "
                >
                    <img
                        src="images/Pasha_Abramov_HERE.png"
                        alt="Decorative"
                        className="w-full h-full rounded-2xl shadow-2xl"
                    />
                </motion.div>

                {/* Мобилка контейнер */}
                <div className="mb-8 md:hidden">
                    <h1 className="text-4xl font-bold md:text-6xl mb-12">
                        Привет, я Паша
                    </h1>
                    <p className="text-lg text-neutral-400 dark:text-neutral-400">
                        Я создаю современную небольшую комедию!
                    </p>
                </div>
                <motion.div
                    animate={{
                        paddingTop: animate ? 350 : 0,
                    }}
                    transition={spring}
                    className="lg:pl-0 md:hidden"
                >
                    {/* SECTION 1 */}
                    <section className="mb-8">
                        <div className="space-y-10 max-w-2xl">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative p-[1.5px] rounded-2xl"
                                style={{
                                    background: isDark
                                        ? 'linear-gradient(120deg, #e6c65c, #b8860b)'
                                        : 'linear-gradient(120deg, #f6e27a, #d4af37)',
                                }}
                            >
                                <motion.div
                                    animate={{
                                        backgroundColor: isDark
                                            ? 'rgb(23,23,23)'
                                            : 'rgb(255,255,255)',
                                        boxShadow: isDark
                                            ? '0 0 18px rgba(212,175,55,0.25)'
                                            : '0 0 14px rgba(212,175,55,0.18)',
                                    }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="rounded-2xl p-6"
                                >
                                    <motion.h3
                                        animate={{
                                            color: isDark
                                                ? 'rgb(229,229,229)'
                                                : 'rgb(38,38,38)',
                                        }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        className="text-md font-semibold mb-4"
                                    >
                                        Юмористические навыки
                                    </motion.h3>

                                    <ul className="grid grid-cols-2 gap-3 text-xl cursor-default list-disc list-inside marker:text-red-500">
                                        {[
                                            'Стендап',
                                            'Клоунада',
                                            'Анекдоты',
                                        ].map((tech) => (
                                            <motion.li
                                                key={tech}
                                                animate={{
                                                    color: isDark
                                                        ? 'rgb(212,212,212)'
                                                        : 'rgb(64,64,64)',
                                                }}
                                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                            >
                                                {tech}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>

                        </div>

                    </section>

                    {/* SECTION 2 */}
                    <section className="max-w-2xl">
                        <h2 className="text-2xl font-semibold mb-4">
                            Обо мне
                        </h2>

                        <p className="text-neutral-400 dark:text-neutral-400 leading-relaxed">
                            68 лет, вампир, юмором занимаюсь второй год. <br />
                            Всё время до этого изучал живопись в Соронто.
                        </p>
                    </section>

                </motion.div>


                {/* КАРТИНКА */}
                <motion.div
                    initial={{ x: -350, opacity: 0, rotate: 8 }}
                    animate={animate ? { x: 0, opacity: 1, rotate: 3 } : {}}
                    transition={spring}
                    className="
                        absolute
                        left-0
                        top-1/2
                        w-75
                        h-132.5
                        -translate-y-1/2
                        hidden
                        md:block
                    "
                >
                    <img
                        src="images/Pasha_Abramov_HERE.png"
                        alt="Decorative"
                        className="w-full h-full rounded-2xl shadow-2xl"
                    />
                </motion.div>

                {/* АНИМИРУЕМЫЙ КОНТЕЙНЕР */}
                <motion.div
                    animate={{
                        paddingLeft: animate ? 340 : 0,
                    }}
                    transition={spring}
                    className="lg:pl-0 hidden md:block"
                >
                    {/* SECTION 1 */}
                    <section className="mb-8">

                        <h1 className="text-4xl font-bold md:text-6xl mb-12">
                            Привет, я Паша
                        </h1>

                        <div className="space-y-10 max-w-2xl">
                            <p className="text-lg text-neutral-400 dark:text-neutral-400">
                                Я создаю современную небольшую комедию!
                            </p>{/* GOLD STACK CARD */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative p-[1.5px] rounded-2xl"
                                style={{
                                    background: isDark
                                        ? 'linear-gradient(120deg, #e6c65c, #b8860b)'
                                        : 'linear-gradient(120deg, #f6e27a, #d4af37)',
                                }}
                            >
                                <motion.div
                                    animate={{
                                        backgroundColor: isDark
                                            ? 'rgb(23,23,23)'
                                            : 'rgb(255,255,255)',
                                        boxShadow: isDark
                                            ? '0 0 18px rgba(212,175,55,0.25)'
                                            : '0 0 14px rgba(212,175,55,0.18)',
                                    }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="rounded-2xl p-6"
                                >
                                    <motion.h3
                                        animate={{
                                            color: isDark
                                                ? 'rgb(229,229,229)'
                                                : 'rgb(38,38,38)',
                                        }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        className="text-md font-semibold mb-4"
                                    >
                                        Юмористические навыки
                                    </motion.h3>

                                    <ul className="grid grid-cols-2 gap-3 text-xl cursor-default list-disc list-inside marker:text-red-500">
                                        {[
                                            'Стендап',
                                            'Импровизация',
                                            'Клоунада',
                                            'Жонглирование',
                                            'Анекдоты',
                                            'оооооо Конферанс',
                                        ].map((tech) => (
                                            <motion.li
                                                key={tech}
                                                animate={{
                                                    color: isDark
                                                        ? 'rgb(212,212,212)'
                                                        : 'rgb(64,64,64)',
                                                }}
                                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                            >
                                                {tech}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>

                        </div>

                    </section>

                    {/* SECTION 2 */}
                    <section className="max-w-2xl">
                        <h2 className="text-2xl font-semibold mb-4">
                            Обо мне
                        </h2>

                        <p className="text-neutral-400 dark:text-neutral-400 leading-relaxed">
                            68 лет, вампир, юмором занимаюсь второй год. <br />
                            Всё время до этого изучал живопись в Соронто.
                        </p>
                    </section>

                </motion.div>
            </div>

            {/* SECTION 4 */}
            <section className="-mt-16">
                <h2 className="text-2xl font-semibold mb-6">
                    Афиша мероприятий
                </h2>

                <div className="w-full py-6">
                    <EventCard
                        title="Небольшая комедия"
                        imageSrc="images/alt-afisha-8-mart.png"
                        dateInfo="8 марта с 19:00 по 20:30"
                        placeInfo="Театр имени Которого Нельзя Называть"
                        eventDate="2026-03-08"
                        link="https://afisha.nethouse.ru/event/nebolsaia-vosmimartovskaia-komediia"
                    />
                </div>

            </section>

            {/* SECTION 3 */}
            <section className="w-full px-6 flex justify-center items-center bg-neutral-950 mb-32">
                <h2 className="max-w-5xl text-center text-white font-black tracking-wide leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    Все баловались, а я сказал —
                    <span className="inline-block pt-4 text-red-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic -rotate-12">
                        хватит!
                    </span>
                </h2>
            </section>

        </main>
    );
}
