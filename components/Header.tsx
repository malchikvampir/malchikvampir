'use client';

import { ThemeToggle } from './ThemeToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
    const pathname = usePathname();

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
                        className={ pathname === "/bio" 
                            ? "flex text-red-500 cursor-default text-lg font-semibold tracking-tight px-4" 
                            : "flex text-lg font-semibold tracking-tight px-4 hover:text-red-500"}
                    >
                        Биография
                    </Link>
                </div>
                <ThemeToggle />
            </div>
        </header>
    );
}
