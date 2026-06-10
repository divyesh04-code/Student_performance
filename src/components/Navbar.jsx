import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logo.png';
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    // Menu ka state ab Navbar handle karega
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="sticky top-0 z-[100] w-full flex flex-col shadow-md">
            <header className="relative bg-white">
                <nav className="container mx-auto px-6 md:px-10 py-0 flex justify-between items-center">

                    {/* Logo Section */}
                    <div className="flex items-center ml-2 md:ml-16">
                        <Link to="/">
                            <img src={logoImage} alt="LPS Logo" className="h-12 md:h-24 w-auto object-contain py-1" />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-10">
                        {/* Desktop Navigation Links */}
                        <div className="flex space-x-8 items-center text-sm font-semibold text-gray-700">
                            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                            <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
                            <a href="#gallery" className="hover:text-blue-600 transition-colors">Gallery</a>
                            <a href="#theschool" className="hover:text-blue-600 transition-colors">The School</a>
                            <a href="#academics" className="hover:text-blue-600 transition-colors">Academics</a>

                            <div className="relative group cursor-pointer flex items-center hover:text-blue-600 transition-colors">
                                Our School
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* Desktop Contact Button */}
                        <Link
                            to="/contact"
                            className="inline-block bg-gradient-to-r from-blue-400 to-blue-700 text-white px-6 py-2.5 rounded hover:shadow-lg transition-all text-sm font-medium cursor-pointer"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#2d3250] focus:outline-none">
                            {isMenuOpen ? <FaTimes className="w-7 h-7" /> : <FaBars className="w-7 h-7" />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Dropdown Panel */}
                <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-96 border-t" : "max-h-0"}`}>
                    <div className="flex flex-col px-6 py-4 space-y-4 text-base font-semibold text-gray-700">
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 transition-colors">Home</Link>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 transition-colors">About</Link>
                        <a href="#gallery" className="hover:text-blue-600 transition-colors">Gallery</a>
                        <a href="#theschool" className="hover:text-blue-600 transition-colors">The School</a>
                        <a href="#academics" className="hover:text-blue-600 transition-colors">Academics</a>

                        <Link
                            to="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-4 block bg-gradient-to-r from-blue-400 to-blue-700 text-white px-6 py-3 rounded-md hover:shadow-lg transition-all text-center w-full cursor-pointer"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </header>

            {/* Marquee Banner */}
            <div className="bg-[#4a3b9a] text-white py-1 overflow-hidden">
                <div className="animate-marquee-rtl flex gap-12 text-lg font-bold tracking-wider uppercase">
                    <div className="flex gap-12 whitespace-nowrap">
                        <span>• LPS GROUP OF EDUCATION</span>
                        <span>• LPS GROUP OF EDUCATION</span>
                        <span>• LPS GROUP OF EDUCATION</span>
                        <span>• LPS GROUP OF EDUCATION</span>
                    </div>
                    <div className="flex gap-12 whitespace-nowrap">
                        <span>• LPS GROUP OF EDUCATION</span>
                        <span>• LPS GROUP OF EDUCATION</span>
                        <span>• LPS GROUP OF EDUCATION</span>
                        <span>• LPS GROUP OF EDUCATION</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;