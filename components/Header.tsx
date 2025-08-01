
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                <i className="ri-snow-line text-white text-xl"></i>
              </div> */}
              <span className="text-2xl font-bold text-blue-600">
                SNOKO
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              About
            </Link>
            <Link href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Gallery
            </Link>
            <Link href="#investor" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Investor
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
              Buy Now
            </button> */}
          </div>

          <button
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100">
            <nav className="flex flex-col space-y-4">
              <Link href="#home" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                About
              </Link>
              <Link href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Gallery
              </Link>
              <Link href="#investor" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Investor
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Contact
              </Link>
              {/* <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap w-fit">
                Buy Now
              </button> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
