// pages/404.tsx

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

const Custom404: React.FC = () => {
    const {theme} = useTheme()
    return (
        <div style={{
            height:'90vh',
            backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
            color: theme === 'light' ? '#000000' : '#ffffff',
        }}>
        <main className="h-screen w-full flex flex-col justify-center items-center">
            <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
            <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5">
                <Link href="/">
                    <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
                        <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>
                        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                            Go Home
                        </span>
                    </div>
                </Link>
            </button>
        </main>
        </div>
    );
};

export default Custom404;
