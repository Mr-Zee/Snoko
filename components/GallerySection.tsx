
'use client';

import { useState } from 'react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('Natural');

  const categories = ['Natural', 'Dipped', 'Waterly'];

  const galleryItems = {
    Natural: [
      {
        id: 1,
        title: 'Strawberry Delight',
        image: 'https://readdy.ai/api/search-image?query=Natural%20strawberry%20ice%20candy%20popsicle%20with%20real%20strawberry%20pieces%2C%20bright%20red%20color%2C%20clean%20white%20background%2C%20professional%20food%20photography%2C%20fresh%20summer%20treat%2C%20natural%20ingredients%20visible&width=400&height=400&seq=natural-1&orientation=squarish'
      },
      {
        id: 2,
        title: 'Mango Paradise',
        image: 'https://readdy.ai/api/search-image?query=Natural%20mango%20ice%20candy%20popsicle%20with%20golden%20yellow%20color%2C%20tropical%20fruit%20pieces%2C%20clean%20white%20background%2C%20professional%20food%20photography%2C%20refreshing%20summer%20dessert%2C%20natural%20texture&width=400&height=400&seq=natural-2&orientation=squarish'
      },
      {
        id: 3,
        title: 'Coconut Bliss',
        image: 'https://readdy.ai/api/search-image?query=Natural%20coconut%20ice%20candy%20popsicle%20with%20white%20creamy%20texture%2C%20coconut%20flakes%20visible%2C%20clean%20white%20background%2C%20professional%20food%20photography%2C%20tropical%20frozen%20treat%2C%20natural%20ingredients&width=400&height=400&seq=natural-3&orientation=squarish'
      },
      {
        id: 4,
        title: 'Orange Burst',
        image: 'https://readdy.ai/api/search-image?query=Natural%20orange%20ice%20candy%20popsicle%20with%20bright%20orange%20color%2C%20citrus%20segments%20visible%2C%20clean%20white%20background%2C%20professional%20food%20photography%2C%20refreshing%20summer%20treat%2C%20natural%20fruit%20texture&width=400&height=400&seq=natural-4&orientation=squarish'
      },
      {
        id: 5,
        title: 'Kiwi Fresh',
        image: 'https://readdy.ai/api/search-image?query=Natural%20kiwi%20ice%20candy%20popsicle%20with%20green%20color%2C%20kiwi%20seeds%20visible%2C%20clean%20white%20background%2C%20professional%20food%20photography%2C%20exotic%20frozen%20treat%2C%20natural%20fruit%20pieces&width=400&height=400&seq=natural-5&orientation=squarish'
      },
      {
        id: 6,
        title: 'Grape Cooler',
        image: 'https://readdy.ai/api/search-image?query=Natural%20grape%20ice%20candy%20popsicle%20with%20purple%20color%2C%20grape%20texture%20visible%2C%20clean%20white%20background%2C%20professional%20food%20photography%2C%20refreshing%20summer%20dessert%2C%20natural%20fruit%20flavor&width=400&height=400&seq=natural-6&orientation=squarish'
      }
    ],
    Dipped: [
      {
        id: 7,
        title: 'Chocolate Dipped Vanilla',
        image: 'https://readdy.ai/api/search-image?query=Vanilla%20ice%20candy%20popsicle%20dipped%20in%20rich%20chocolate%20coating%2C%20dark%20chocolate%20shell%2C%20clean%20white%20background%2C%20professional%20food%20photography%2C%20premium%20frozen%20dessert%2C%20glossy%20chocolate%20finish&width=400&height=400&seq=dipped-1&orientation=squarish'
      },
      {
        id: 8,
        title: 'Caramel Dipped Banana',
        image: 'https://readdy.ai/api/search-image?query=Banana%20ice%20candy%20popsicle%20dipped%20in%20golden%20caramel%20coating%2C%20smooth%20caramel%20shell%2C%20clean%20white%20background%2C%20professional%20food%20photography%2C%20luxury%20frozen%20treat%2C%20glossy%20caramel%20finish&width=400&height=400&seq=dipped-2&orientation=squarish'
      },
      {
        id: 9,
        title: 'Nuts Dipped Strawberry',
        image: 'https://readdy.ai/api/search-image?query=Strawberry%20ice%20candy%20popsicle%20dipped%20in%20chocolate%20and%20crushed%20nuts%2C%20textured%20coating%2C%20clean%20white%20background%2C%20professional%20food%20photography%2C%20gourmet%20frozen%20dessert%2C%20crunchy%20nut%20pieces&width=400&height=400&seq=dipped-3&orientation=squarish'
      },
      {
        id: 10,
        title: 'White Chocolate Dipped',
        image: 'https://readdy.ai/api/search-image?query=Fruit%20ice%20candy%20popsicle%20dipped%20in%20white%20chocolate%20coating%2C%20smooth%20white%20shell%2C%20clean%20white%20background%2C%20professional%20food%20photography%2C%20elegant%20frozen%20treat%2C%20glossy%20white%20chocolate%20finish&width=400&height=400&seq=dipped-4&orientation=squarish'
      },
      {
        id: 11,
        title: 'Coconut Flakes Dipped',
        image: 'https://readdy.ai/api/search-image?query=Ice%20candy%20popsicle%20dipped%20in%20chocolate%20and%20coconut%20flakes%2C%20textured%20white%20coating%2C%20clean%20white%20background%2C%20professional%20food%20photography%2C%20tropical%20frozen%20dessert%2C%20coconut%20texture%20visible&width=400&height=400&seq=dipped-5&orientation=squarish'
      },
      {
        id: 12,
        title: 'Berry Dipped Delight',
        image: 'https://readdy.ai/api/search-image?query=Mixed%20berry%20ice%20candy%20popsicle%20dipped%20in%20dark%20chocolate%20and%20freeze-dried%20berries%2C%20textured%20coating%2C%20clean%20white%20background%2C%20professional%20food%20photography%2C%20gourmet%20frozen%20treat%2C%20berry%20pieces%20visible&width=400&height=400&seq=dipped-6&orientation=squarish'
      }
    ],
    Waterly: [
      {
        id: 13,
        title: 'Lemon Lime Splash',
        image: 'https://readdy.ai/api/search-image?query=Clear%20lemon%20lime%20ice%20candy%20popsicle%20with%20transparent%20appearance%2C%20citrus%20slices%20visible%20inside%2C%20clean%20white%20background%2C%20professional%20food%20photography%2C%20refreshing%20summer%20treat%2C%20crystal%20clear%20texture&width=400&height=400&seq=waterly-1&orientation=squarish'
      },
      {
        id: 14,
        title: 'Cucumber Mint',
        image: 'https://readdy.ai/api/search-image?query=Clear%20cucumber%20mint%20ice%20candy%20popsicle%20with%20green%20tint%2C%20cucumber%20slices%20and%20mint%20leaves%20visible%2C%20clean%20white%20background%2C%20professional%20food%20photography%2C%20refreshing%20spa-like%20treat%2C%20translucent%20appearance&width=400&height=400&seq=waterly-2&orientation=squarish'
      },
      {
        id: 15,
        title: 'Watermelon Water',
        image: 'https://readdy.ai/api/search-image?query=Clear%20watermelon%20water%20ice%20candy%20popsicle%20with%20pink%20tint%2C%20watermelon%20seeds%20visible%2C%20clean%20white%20background%2C%20professional%20food%20photography%2C%20hydrating%20summer%20treat%2C%20translucent%20texture&width=400&height=400&seq=waterly-3&orientation=squarish'
      },
      {
        id: 16,
        title: 'Pineapple Splash',
        image: 'https://readdy.ai/api/search-image?query=Clear%20pineapple%20water%20ice%20candy%20popsicle%20with%20yellow%20tint%2C%20pineapple%20pieces%20visible%2C%20clean%20white%20background%2C%20professional%20food%20photography%2C%20tropical%20refreshing%20treat%2C%20crystal%20clear%20appearance&width=400&height=400&seq=waterly-4&orientation=squarish'
      },
      {
        id: 17,
        title: 'Berry Infusion',
        image: 'https://readdy.ai/api/search-image?query=Clear%20berry%20infused%20ice%20candy%20popsicle%20with%20purple%20tint%2C%20mixed%20berries%20visible%20inside%2C%20clean%20white%20background%2C%20professional%20food%20photography%2C%20antioxidant-rich%20treat%2C%20translucent%20texture&width=400&height=400&seq=waterly-5&orientation=squarish'
      },
      {
        id: 18,
        title: 'Citrus Burst',
        image: 'https://readdy.ai/api/search-image?query=Clear%20citrus%20water%20ice%20candy%20popsicle%20with%20orange%20tint%2C%20citrus%20segments%20visible%2C%20clean%20white%20background%2C%20professional%20food%20photography%2C%20vitamin-rich%20summer%20treat%2C%20crystal%20clear%20appearance&width=400&height=400&seq=waterly-6&orientation=squarish'
      }
    ]
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Ice Candy Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our amazing collection of handcrafted ice candies in three delicious categories
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-100 rounded-full p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems[activeCategory].map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
