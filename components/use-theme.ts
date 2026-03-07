'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
    const [theme, setTheme] = useState<Theme>('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('theme') as Theme | null;

        if (saved) {
            applyTheme(saved, false);
        } else {
            applyTheme('dark');
        }

        setMounted(true);
    }, []);

    const applyTheme = (next: Theme, animate = true) => {
        const overlay = document.getElementById('theme-overlay');

        if (animate && overlay) {
            overlay.style.opacity = '1';

            setTimeout(() => {
                document.documentElement.classList.toggle('dark', next === 'dark');
                overlay.style.opacity = '0';
            }, 60);
        } else {
            document.documentElement.classList.toggle('dark', next === 'dark');
        }

        setTheme(next);
        localStorage.setItem('theme', next);
    };

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        applyTheme(next, true);
    };

    return { theme, toggleTheme, mounted };
}
