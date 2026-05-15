import type { ReactNode } from 'react';
import './globals.css';
import { Header } from '../components/Header';

export const metadata = {
    title: 'Сайт Мальчика-Вампира',
    description: 'Портфолио стендап-комика',
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="ru">
            <body className="bg-neutral-950 text-neutral-100 antialiased">
                <Header />
                {/* Overlay для мягкой анимации */}
                <div
                    id="theme-overlay"
                    className="pointer-events-none fixed inset-0 z-999 opacity-0 transition-opacity duration-300 bg-white dark:bg-neutral-950"
                />
                {children}

                <section className="w-full px-6 flex justify-center items-center bg-neutral-950 mt-20 mb-32">
                    <h2 className="max-w-5xl text-center text-white font-black tracking-wide leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        Все баловались, а я сказал —
                        <span className="inline-block pt-4 text-red-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic -rotate-12">
                            хватит!
                        </span>
                    </h2>
                </section>
            </body>
        </html>
    );
}
