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
        <nav className="bg-[#7dd3fc] p-5">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div style={{ width: '200px' }} className="text-white text-lg font-bold">
                    My Next.js App
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex lg:space-x-4">
                    <Link href="/">
                        <div className="text-white hover:text-orange-500">Blog</div>
                    </Link>
                    <Link href="/user">
                        <div className="text-white hover:text-orange-500">User</div>
                    </Link>
                    <Link href="/products">
                        <div className="text-white hover:text-orange-500">Products</div>
                    </Link>
                    <Link href="/counter">
                        <div className="text-white hover:text-orange-500">Counter</div>
                    </Link>
                    <Link href="/todo">
                        <div className="text-white hover:text-orange-500">Todo</div>
                    </Link>
                </div>

                {/* Theme Toggle (Desktop) */}
                <div className="hidden lg:flex items-center space-x-2">
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
                        <span className="block w-full h-full bg-gray-300 dark:bg-gray-800 rounded-full cursor-pointer transition-all"></span>
                        <span
                            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transform transition-all ${
                                theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
                            }`}
                        ></span>
                    </label>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button onClick={toggleMenu} className="block lg:hidden text-white">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className=" inset-0 z-50 bg-[#7dd3fc] lg:hidden mt-16">
                    <div className="flex flex-col items-center space-y-4 py-4">
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

                        {/* Theme Toggle (Mobile) */}
                        <div className="flex items-center space-x-2 mt-4">
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
                                <span className="block w-full h-full bg-gray-300 dark:bg-gray-800 rounded-full cursor-pointer transition-all"></span>
                                <span
                                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transform transition-all ${
                                        theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
                                    }`}
                                ></span>
                            </label>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;