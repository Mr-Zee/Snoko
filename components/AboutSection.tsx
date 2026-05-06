"use client";
import Image from "next/image";
import art from "../assets/art.gif";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white to-cyan-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="">
              <Image
                src={art}
                alt="Family enjoying ice candy"
                width={580}
                height={580}
                className=" object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About US
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              “Let’s SNOKO melt your stress away. We serve happiness on a stick.”
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
             At SNOKO Ice Candy, we believe happiness can come on a stick & joy can be simple—like the first bite of your favorite childhood treat. That’s why we’ve reimagined the classic ice candy with a refreshing, healthy twist.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Made with real milk, fresh fruits, and zero preservatives, SNOKO is a guilt-free indulgence that delivers nostalgia in every lick. We don’t just sell frozen treats—we serve moments of happiness that melt your stress away, one stick at a time.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              That’s how SNOKO was born.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Born in Kochi, Kerala in 2025, SNOKO is more than a product—it’s an experience. Through vibrant carts, cozy shops, and lively pop-ups, we’re spreading smiles across the city and beyond.
            </p>
           
          </div>

        </div>
      </div>
    </section>
  );
}
