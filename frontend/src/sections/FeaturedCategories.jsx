import React from "react";
import bannerimage from "../assets/grocery.jpg";

const categories = [
  {
    id: 1,
    title: "Cake & Milk",
    items: 11,
    image: "/images/categories/cake.png",
    bg: "bg-green-50",
  },
  {
    id: 2,
    title: "Organic Kiwi",
    items: 6,
    image: "/images/categories/kiwi.png",
    bg: "bg-yellow-50",
  },
  {
    id: 3,
    title: "Peach",
    items: 6,
    image: "/images/categories/peach.png",
    bg: "bg-orange-50",
  },
  {
    id: 4,
    title: "Red Apple",
    items: 10,
    image: "/images/categories/apple.png",
    bg: "bg-pink-50",
  },
  {
    id: 5,
    title: "Snacks",
    items: 11,
    image: "/images/categories/snacks.png",
    bg: "bg-rose-50",
  },
  {
    id: 6,
    title: "Vegetables",
    items: 6,
    image: "/images/categories/lettuce.png",
    bg: "bg-purple-50",
  },
  {
    id: 7,
    title: "Strawberry",
    items: 10,
    image: "/images/categories/strawberry.png",
    bg: "bg-red-50",
  },
  {
    id: 8,
    title: "Black Plum",
    items: 10,
    image: "/images/categories/plum.png",
    bg: "bg-indigo-50",
  },
  {
    id: 9,
    title: "Custard Apple",
    items: 10,
    image: "/images/categories/custard.png",
    bg: "bg-lime-50",
  },
  {
    id: 10,
    title: "Coffee & Tea",
    items: 11,
    image: "/images/categories/coffee.png",
    bg: "bg-amber-50",
  },
];

const banners = [
  {
    id: 1,
    title: "Everyday Fresh & Clean with Our Products",
    image: bannerimage,
    bg: "bg-green-50",
  },
  {
    id: 2,
    title: "Make your Breakfast Healthy and Easy",
    image: bannerimage,
    bg: "bg-red-50",
  },
  {
    id: 3,
    title: "The best Organic Products Online",
    image: bannerimage,
    bg: "bg-blue-50",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Featured Categories
      </h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`rounded-xl hover:shadow-lg transition text-center p-4 border ${cat.bg}`}
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="h-16 w-16 mx-auto object-contain mb-3"
            />
            <h4 className="font-semibold text-gray-800">{cat.title}</h4>
            <p className="text-gray-500 text-sm">{cat.items} items</p>
          </div>
        ))}
      </div>

      {/* Promo Banners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className={`rounded-xl p-6 flex flex-col md:flex-row items-center justify-between ${banner.bg}`}
          >
            {/* Text */}
            <div className="mb-4 md:mb-0 md:w-1/2">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {banner.title}
              </h3>
              <button className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-full transition">
                Shop Now →
              </button>
            </div>
            {/* Image */}
            <img
              src={banner.image}
              alt={banner.title}
              className="h-28 object-contain md:h-36 md:w-auto rounded-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
