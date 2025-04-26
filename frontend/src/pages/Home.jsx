import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Truck, Award, Clock } from "lucide-react";
import Footer from "../component/Footer";

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Fresh Organic Apples",
      image: "/api/placeholder/300/300",
      price: 3.99,
      category: "Fruits",
      unit: "lb",
    },
    {
      id: 2,
      name: "Organic Whole Milk",
      image: "/api/placeholder/300/300",
      price: 4.49,
      category: "Dairy",
      unit: "gallon",
    },
    {
      id: 3,
      name: "Whole Grain Bread",
      image: "/api/placeholder/300/300",
      price: 3.29,
      category: "Bakery",
      unit: "loaf",
    },
    {
      id: 4,
      name: "Fresh Salmon Fillet",
      image: "/api/placeholder/300/300",
      price: 12.99,
      category: "Seafood",
      unit: "lb",
    },
  ];

  const categories = [
    { id: 1, name: "Fruits & Vegetables", image: "/api/placeholder/300/200" },
    { id: 2, name: "Dairy & Eggs", image: "/api/placeholder/300/200" },
    { id: 3, name: "Meat & Seafood", image: "/api/placeholder/300/200" },
    { id: 4, name: "Bakery", image: "/api/placeholder/300/200" },
    { id: 5, name: "Pantry Staples", image: "/api/placeholder/300/200" },
    { id: 6, name: "Beverages", image: "/api/placeholder/300/200" },
  ];

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-green-200 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 bg-white rounded-2xl shadow-xl overflow-hidden w-full">
          {/* Text Content */}
          <div className="w-full md:w-1/2 p-6 md:p-12 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
              Don’t miss amazing grocery deals
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-8">
              Sign up for the daily newsletter and never miss a deal.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 w-full sm:w-auto rounded-full border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
              />
              <button className="px-6 py-3 w-full sm:w-auto rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 h-96 p-6 md:p-12 flex justify-center">
            <img
              src="/image/herosection.jpeg" // Replace with your hero image
              alt="Groceries"
              className="w-full max-w-md  h-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            This Week's Favorites
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Hand-picked products you’ll love
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-md h-40 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-green-600 font-bold">
                    ${product.price.toFixed(2)}/{product.unit}
                  </span>
                  <Link
                    to={`/product/${product.id}`}
                    className="text-green-700 hover:underline text-sm"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Find exactly what you need
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transform transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose FreshBazar?
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Experience the best grocery delivery service
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-green-50 rounded-xl p-6 hover:bg-green-100 transition">
              <ShoppingBag className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600 text-sm">
                Only the best, handpicked groceries make it to your kitchen.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 hover:bg-green-100 transition">
              <Truck className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Lightning Fast
              </h3>
              <p className="text-gray-600 text-sm">
                Same-day delivery right to your doorstep, fresh and on time.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 hover:bg-green-100 transition">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600 text-sm">
                If you’re not happy, neither are we. Full refunds guaranteed.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 hover:bg-green-100 transition">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Shop Anytime
              </h3>
              <p className="text-gray-600 text-sm">
                Easy, convenient, and fast shopping from the comfort of your
                home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
