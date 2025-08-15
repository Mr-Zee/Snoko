'use client';

import Link from 'next/link';
import Image from "next/image";
import BgFooter from "../assets/snoko_billboard-02.jpg";

export default function Footer() {
  return (
    <footer
      className="relative bg-gray-900 text-white"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={BgFooter}
          alt="Snoko billboard"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/90"></div>
      </div>

      {/* Footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-white">SNOKO</span>
            </div>
            <p className="text-gray-200 mb-6 max-w-md">
              Let’s SNOKO melt your stress away. We serve happiness on a stick.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/18YXogsSyN/?mibextid=wwXIfr" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="https://www.instagram.com/snokoicecandy" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <i className="ri-instagram-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="#home" className="text-gray-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-gray-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#gallery" className="text-gray-200 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="#investor" className="text-gray-200 hover:text-white transition-colors">Become Investor</Link></li>
              <li><Link href="#contact" className="text-gray-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-4">
              <li><a href="#gallery" className="text-gray-200 hover:text-white transition-colors">Natural Flavors</a></li>
              <li><a href="#gallery" className="text-gray-200 hover:text-white transition-colors">Dipped Specials</a></li>
              <li><a href="#gallery" className="text-gray-200 hover:text-white transition-colors">Waterly Fresh</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 py-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">© 2025 Snoko. All rights reserved. dev by Zee.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
