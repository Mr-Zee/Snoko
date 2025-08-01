
'use client';

import Link from "next/link";

export default function InvestorSection() {
  return (
    <section id="investor" className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Become an Investor
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join our growing network of successful ice candy outlets! We're looking for passionate entrepreneurs who want to bring our delicious frozen treats to their communities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                  <i className="ri-store-line text-orange-500 text-xl"></i>
                </div>
                <h3 className="font-semibold text-white mb-2">Premium Location</h3>
                <p className="text-white/80 text-sm">Get prime spots in high-traffic areas</p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                  <i className="ri-money-rupee-circle-line text-orange-500 text-xl"></i>
                </div>
                <h3 className="font-semibold text-white mb-2">High Returns</h3>
                <p className="text-white/80 text-sm">Proven profitable business model</p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                  <i className="ri-customer-service-line text-orange-500 text-xl"></i>
                </div>
                <h3 className="font-semibold text-white mb-2">Full Support</h3>
                <p className="text-white/80 text-sm">Complete training and ongoing support</p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                  <i className="ri-award-line text-orange-500 text-xl"></i>
                </div>
                <h3 className="font-semibold text-white mb-2">Proven Brand</h3>
                <p className="text-white/80 text-sm">Established reputation and loyal customers</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-information-line mr-2"></i>
                Learn More
              </button> */}
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition-colors cursor-pointer whitespace-nowrap">
                <Link href="#contact" className="ri-phone-line">
                Call Now  
                </Link>
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Modern%20ice%20candy%20outlet%20store%20with%20bright%20colorful%20signage%2C%20customers%20enjoying%20frozen%20treats%2C%20professional%20business%20photography%2C%20successful%20retail%20environment%2C%20vibrant%20storefront%2C%20people%20smiling%20and%20happy&width=600&height=400&seq=investor-1&orientation=landscape"
              alt="Ice candy outlet"
              className="rounded-2xl shadow-2xl object-cover w-full h-96"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <i className="ri-money-dollar-circle-line text-white text-2xl"></i>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">50K+</p>
                  <p className="text-sm text-gray-600">Revenue</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <i className="ri-group-line text-white text-2xl"></i>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">1500+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
