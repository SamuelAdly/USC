'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search, X, Menu } from "lucide-react";

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleSearch = () => {
        if (isMenuOpen) setIsMenuOpen(false);
        setIsSearchOpen(!isSearchOpen);
    };

    const toggleMenu = () => {
        if (isSearchOpen) setIsSearchOpen(false);
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white border-b border-gray-300">
            <div className="max-w-screen-2xl mx-auto px-2 sm:px-2 lg:px-4 bg-white pt-1">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Top Left */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                className="max-h-12 sm:max-h-14 object-contain"
                                src="/logoNoFooter.png"
                                alt="University Spine Center"
                                width={120}
                                height={42}
                                layout="intrinsic"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center justify-center flex-grow space-x-4">
                        <Link href="/contact" className="text-black hover:underline">
                            Contact Us
                        </Link>
                        <Link href="/visit" className="text-black hover:underline">
                            Visit
                        </Link>
                        <Link href="/about" className="text-black hover:underline">
                            About
                        </Link>
                    </div>

                    {/* Desktop Search */}
                    <div className="hidden md:flex items-center space-x-4">
                        <form action="/search/" method="get" className="relative">
                            <button
                                type="submit"
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-600"
                                aria-label="Search"
                            >
                                <Search size={24} />
                            </button>
                            <input
                                type="text"
                                name="query"
                                placeholder="Search USC..."
                                className="w-44 rounded-full border border-gray-300 pl-12 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </form>
                    </div>

                    {/* Mobile Search and Menu (Right-Aligned) */}
                    <div className="flex md:hidden items-center space-x-4 ml-auto">
                        <button
                            onClick={toggleSearch}
                            className={`p-2 rounded-full ${isSearchOpen ? 'bg-black text-white' : 'text-gray-700 hover:text-blue-600'}`}
                            aria-label="Search"
                        >
                            {isSearchOpen ? <X size={24} /> : <Search size={24} />}
                        </button>

                        <button
                            onClick={toggleMenu}
                            className={`p-2 rounded-full ${isMenuOpen ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
                            aria-label="Menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                {isSearchOpen && (
                    <form
                        action="/search/"
                        method="get"
                        className={`absolute flex items-center space-x-6 left-0 right-0 bg-black border border-gray-300 rounded-lg shadow-lg p-4 transition-all ease-in-out duration-300 ${
                            isSearchOpen ? 'top-16' : 'top-[-200px]'
                        }`}
                    >
                        <input
                            type="text"
                            name="query"
                            placeholder="Search University Spine Center"
                            className="w-5/6 rounded-md border-b bg-black border-gray-300 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-white text-black px-6 py-4 text-sm rounded-3xl hover:bg-gray-200"
                        >
                            Search
                        </button>
                    </form>
                )}

                {/* Mobile Hamburger Menu */}
                <div
                    className={`md:hidden fixed left-0 right-0 bg-black text-white border border-gray-300 shadow-lg p-4 space-y-4 transition-all ease-in-out duration-300 ${
                        isMenuOpen ? 'top-16' : 'top-[-100%]'
                    }`}
                >
                    <Link href="/contact" className="block hover:underline">
                        Contact Us
                    </Link>
                    <Link href="/visit" className="block hover:underline">
                        Visit
                    </Link>
                    <Link href="/about" className="block hover:underline">
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}
