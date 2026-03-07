'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from './use-theme';

export function ThemeToggle() {
    const { theme, toggleTheme, mounted } = useTheme();

    if (!mounted) return null;

    const isDark = theme === 'dark';

    return (
        <button
            onClick={toggleTheme}
            className="relative flex h-9 w-16 items-center rounded-full bg-neutral-200 p-1 transition-colors duration-300 dark:bg-neutral-800"
        >
            {/* Sliding Circle */}
            <span
                className={`absolute left-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 dark:bg-neutral-900 ${isDark ? 'translate-x-7' : 'translate-x-0'
                    }`}
            >
                {isDark ? (
                    <Moon size={16} className="text-yellow-400" />
                ) : (
                    <Sun size={16} className="text-orange-500" />
                )}
            </span>
        </button>
    );
}
