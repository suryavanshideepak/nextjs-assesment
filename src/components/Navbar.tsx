import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#7dd3fc] p-2">
            <div className="container mx-auto flex justify-between items-center">
                <div style={{width:'200px'}} className="text-white text-lg font-bold">
                    My Next.js App
                </div>

                <div
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } absolute top-16 left-0 w-full bg-[#7dd3fc] lg:bg-transparent lg:static lg:flex lg:justify-center lg:items-center`}
                >
                    <div className="flex flex-col lg:flex-row lg:space-x-4 text-center">
                        <Link href="/">
                            <div className="text-[#FF6A3D] hover:text-orange-500 p-2 lg:p-0">Blog</div>
                        </Link>
                        <Link href="/user">
                            <div className="text-[#FF6A3D] hover:text-orange-500 p-2 lg:p-0">User</div>
                        </Link>
                        <Link href="/products">
                            <div className="text-[#FF6A3D] hover:text-orange-500 p-2 lg:p-0">Products</div>
                        </Link>
                        <Link href="/counter">
                            <div className="text-[#FF6A3D] hover:text-orange-500 p-2 lg:p-0">Counter</div>
                        </Link>
                        <Link href="/todo">
                            <div className="text-[#FF6A3D] hover:text-orange-500 p-2 lg:p-0">Todo</div>
                        </Link>
                    </div>
                </div>

                <div className="hidden lg:flex items-center space-x-2 py-2">
                    <span className="text-sm text-white">
                        {theme === 'light' ? 'Light' : 'Dark'}
                    </span>
                    <label className="relative inline-block w-12 h-6">
                        <input
                            type="checkbox"
                            className="hidden"
                            onChange={toggleTheme}
                            checked={theme === 'dark'}
                        />
                        <span
                            className="block w-full h-full bg-gray-300 dark:bg-gray-800 rounded-full cursor-pointer transition-all"
                        ></span>
                        <span
                            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transform transition-all ${
                                theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
                            }`}
                        ></span>
                    </label>
                </div>

                <button
                    onClick={toggleMenu}
                    className="block lg:hidden text-white"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="block lg:hidden mt-4 text-center my-2">
                    <div className="flex justify-center items-center space-x-2">
                        <span className="text-sm text-white">
                            {theme === 'light' ? 'Light' : 'Dark'}
                        </span>
                        <label className="relative inline-block w-12 h-6">
                            <input
                                type="checkbox"
                                className="hidden"
                                onChange={toggleTheme}
                                checked={theme === 'dark'}
                            />
                            <span
                                className="block w-full h-full bg-gray-300 dark:bg-gray-800 rounded-full cursor-pointer transition-all"
                            ></span>
                            <span
                                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transform transition-all ${
                                    theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
                                }`}
                            ></span>
                        </label>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
