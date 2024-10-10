import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
    const {theme , toggleTheme } = useTheme();
    return (
        <nav className="bg-[#7dd3fc] p-2">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    My Next.js App
                </div>
                <div className="flex space-x-4">
                    <Link href="/">
                        <div className="text-[#FF6A3D] hover:text-orange-500">Blog</div>
                    </Link>
                    <Link href="/user">
                        <div className="text-[#FF6A3D] hover:text-orange-500">User</div>
                    </Link>
                    <Link href="/products">
                        <div className="text-[#FF6A3D] hover:text-orange-500">Products</div>
                    </Link>
                    <Link href="/counter">
                        <div className="text-[#FF6A3D] hover:text-orange-500">Counter</div>
                    </Link>
                    <Link href="/todo">
                        <div className="text-[#FF6A3D] hover:text-orange-500">Todo</div>
                    </Link>                    
                </div>
                <button
                        onClick={toggleTheme}
                        className="bg-gray-200 text-black dark:bg-gray-800 dark:text-white p-2 rounded-md"
                        style={{
                            backgroundColor:theme === 'light'?'#ffffff':'#00000'
                        }}
                    >
                        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
