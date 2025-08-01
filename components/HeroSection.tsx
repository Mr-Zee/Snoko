
'use client';

import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Vibrant%20colorful%20ice%20candy%20popsicles%20melting%20in%20summer%20sunshine%20with%20refreshing%20blue%20and%20white%20gradient%20background%2C%20cool%20refreshing%20atmosphere%2C%20professional%20food%20photography%2C%20bright%20cheerful%20colors%2C%20clean%20modern%20aesthetic%2C%20frozen%20treats%20display&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-cyan-500/60"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Cool & Refreshing
            <br />
            <span className="text-cyan-300">Ice Candy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Beat the heat with our premium handcrafted ice candies. Made with natural ingredients and bursting with flavor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap text-lg">
              <i className="ri-shopping-cart-line mr-2"></i>
              Buy Now
            </button> */}
              <Link href="#contact" className="mr-2">
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap text-lg">
              Contact Us
            </button>
              </Link>
              <Link href="#about" className="mr-2">
            <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-colors cursor-pointer whitespace-nowrap text-lg">
              Invest Now
            </button>
              </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="ri-arrow-down-line text-2xl"></i>
      </div>
    </section>
  );
}
