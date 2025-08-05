"use client";

export default function OurStorySection() {
  return (
    <section
      id="ourstory"
      className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Sweet Story
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              SNOKO started with a simple idea: to bring back the joy of
              old-school ice candies. It all started with a memory—hot summer
              days, laughter in the air, and the sweet chill of an ice candy in
              hand. We wanted to bring back that feeling. We grew up loving
              those icy sticks on hot afternoons, but over time, we realized the
              market lacked a version that was both nostalgic and good for you.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              So in 2025, from the heart of Kochi, we launched SNOKO Ice Candy.
              We combined pure ingredients, thoughtful sourcing, and a passion
              for feel-good snacking to craft a product that makes people
              smile—and keeps them coming back for more.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Today, SNOKO is more than a brand. It’s a movement to rediscover
              the simple pleasures of life, one icy bite at a time. And now,
              we’re sharing this journey with franchise partners across Kerala
              and South India.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              That’s how SNOKO was born.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We partner with trusted suppliers to craft our ice candies with
              pure ingredients and zero shortcuts. Our focus isn’t
              manufacturing—it’s on curation, branding, and delivering
              exceptional experiences through thoughtful design and consistent
              quality.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              SNOKO is a reminder to slow down, take a break, and savor
              something sweet—because sometimes, happiness really does come on a
              stick. Because joy is better when shared. 💙
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-leaf-line text-blue-600 text-2xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Natural Ingredients
                </h3>
                <p className="text-sm text-gray-600">
                  100% natural flavors and colors
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-heart-line text-cyan-600 text-2xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Made with Love
                </h3>
                <p className="text-sm text-gray-600">Handcrafted with care</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-award-line text-yellow-600 text-2xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Premium Quality
                </h3>
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
              <i className="ri-snowflake-line text-white text-3xl"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
