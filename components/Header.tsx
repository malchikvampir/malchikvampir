'use client';

import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-neutral-800 backdrop-blur transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-950/80 ">
            <div className="mx-auto flex items-center justify-between max-w-6xl px-6 py-4">
                <div className="flex items-center">
                    <Link
                        href="/"
                    >
                        <img
                            src="images/vampir-logo.png"
                            alt="Сайтик Мистера Мальчика Вампира"
                            className="w-24 h-24"
                        />
                    </Link>
                    <Link
                        href="/bio"
                        className="text-lg font-semibold tracking-tight px-4 hover:text-red-500"
                    >
                        Обо мне
                    </Link>
                </div>
                <ThemeToggle />
            </div>
        </header>
    );
}
