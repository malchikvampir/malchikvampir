import type { ReactNode } from 'react';
import './globals.css';
import { Header } from '../components/Header';

export const metadata = {
    title: 'Сайт Мальчика-Вампира',
    description: 'Портфолио юмориста',
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
            </body>
        </html>
    );
}
