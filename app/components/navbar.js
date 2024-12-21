'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search, X, Menu, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [expandedItem, setExpandedItem] = useState(null);

    const toggleSearch = () => {
        if (isMenuOpen) setIsMenuOpen(false);
        setIsSearchOpen(!isSearchOpen);
    };

    const toggleMenu = () => {
        if (isSearchOpen) setIsSearchOpen(false);
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSubmenu = (item) => {
        setExpandedItem(expandedItem === item ? null : item);
    };

    return (
        <>
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
                        <form
                            action="/search/"
                            method="get"
                            className={`md:hidden absolute flex items-center space-x-6 left-0 right-0 bg-black border border-gray-300 rounded-lg shadow-lg p-4 transition-all ease-in-out duration-300 ${
                                isSearchOpen ? 'top-16 opacity-100' : 'top-[-200px] opacity-0'
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

                    {/* Mobile Hamburger Menu */}
                    <div
                        className={`md:hidden fixed left-0 right-0 bg-black text-white border border-gray-300 shadow-lg p-4 space-y-4 transition-all ease-in-out duration-300 ${
                            isMenuOpen ? 'top-16' : 'top-[-100%]'
                        }`}
                    >
                        <Link href="/contact" className="block hover:underline px-4 py-8">
                            Contact Us
                        </Link>
                        <Link href="/visit" className="block hover:underline">
                            Visit
                        </Link>
                        <Link href="/about" className="block hover:underline">
                            About
                        </Link>
                        <div>
                            <button
                                onClick={() => toggleSubmenu('services')}
                                className="block w-full text-left hover:underline"
                            >
                                Services <ChevronDown className="inline-block" />
                            </button>
                            {expandedItem === 'services' && (
                                <div className="ml-4 space-y-2">
                                    <Link href="/services/spine" className="block hover:underline">
                                        Spine Care
                                    </Link>
                                    <Link href="/services/rehab" className="block hover:underline">
                                        Rehabilitation
                                    </Link>
                                    <Link href="/services/pain" className="block hover:underline">
                                        Pain Management
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Second Navbar */}
            <div className="bg-gray-100 border-b border-gray-300">
                <div className="max-w-screen-2xl mx-auto px-2 sm:px-2 lg:px-4">
                    <div className="hidden md:flex space-x-6 py-2">
                        <div className="relative group">
                            <button className="text-black hover:underline">Services</button>
                            <div className="absolute hidden group-hover:block bg-white shadow-lg border mt-2 rounded-lg">
                                <Link href="/services/spine" className="block px-4 py-2 hover:bg-gray-100">
                                    Spine Care
                                </Link>
                                <Link href="/services/rehab" className="block px-4 py-2 hover:bg-gray-100">
                                    Rehabilitation
                                </Link>
                                <Link href="/services/pain" className="block px-4 py-2 hover:bg-gray-100">
                                    Pain Management
                                </Link>
                            </div>
                        </div>
                        <Link href="/research" className="text-black hover:underline">
                            Research
                        </Link>
                        <Link href="/education" className="text-black hover:underline">
                            Education
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
