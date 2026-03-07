'use client';

import { useEffect, useState } from 'react';

export function SideImage() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`
        absolute
        left-0
        top-0
        transition-all
        duration-700
        ease-out
        ${visible
                    ? 'translate-x-0 opacity-100 -rotate-3'
                    : '-translate-x-full opacity-0 rotate-[-8deg]'
                }
      `}
        >
            <img
                src="images/Pasha_Abramov_HERE.png"
                alt="Decorative"
                className="w-75 h-132.5 rounded-2xl shadow-2xl"
            />
        </div>
    );
}
