
'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Sweet Story
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded in 2025, our ice candy journey began with a simple mission: to create the most delicious and refreshing frozen treats using only the finest natural ingredients. What started as a small family business has grown into a beloved brand that brings joy to thousands of customers.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We believe that every ice candy should be a moment of pure happiness. That's why we carefully craft each flavor with love, using traditional recipes passed down through generations while embracing modern techniques to ensure perfect quality every time.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-leaf-line text-blue-600 text-2xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Natural Ingredients</h3>
                <p className="text-sm text-gray-600">100% natural flavors and colors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-heart-line text-cyan-600 text-2xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Made with Love</h3>
                <p className="text-sm text-gray-600">Handcrafted with care</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-award-line text-yellow-600 text-2xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-sm text-gray-600">Award-winning recipes</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://readdy.ai/api/search-image?query=Happy%20family%20enjoying%20colorful%20ice%20candy%20popsicles%20together%20in%20bright%20summer%20setting%2C%20natural%20lighting%2C%20joyful%20expressions%2C%20diverse%20group%20of%20people%2C%20warm%20family%20atmosphere%2C%20professional%20lifestyle%20photography&width=400&height=300&seq=about-1&orientation=landscape"
                alt="Family enjoying ice candy"
                className="rounded-lg shadow-lg object-cover h-48"
              />
              <img
                src="https://readdy.ai/api/search-image?query=Artisan%20hands%20carefully%20crafting%20colorful%20ice%20candy%20popsicles%20in%20clean%20modern%20kitchen%2C%20food%20preparation%20process%2C%20natural%20ingredients%20visible%2C%20professional%20food%20photography%2C%20clean%20bright%20lighting&width=400&height=300&seq=about-2&orientation=landscape"
                alt="Making ice candy"
                className="rounded-lg shadow-lg object-cover h-48 mt-8"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-xl">
              <i className="ri-snow-line text-white text-3xl"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
