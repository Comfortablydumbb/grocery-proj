"use client";

import { Link } from "react-router-dom";
import ProductCard from "../component/ProductCard";
import { motion } from "framer-motion";

const featuredProducts = [
  {
    id: 1,
    name: "Fresh Organic Apples",
    image: "/api/placeholder/300/300",
    price: 3.99,
    category: "Fruits",
    unit: "lb",
    discount: "10%",
    rating: 5,
  },
  {
    id: 2,
    name: "Organic Whole Milk",
    image: "/api/placeholder/300/300",
    price: 4.49,
    oldPrice: 6.7,
    category: "Dairy",
    unit: "gallon",
    discount: "10%",
    rating: 4,
  },
  {
    id: 3,
    name: "Whole Grain Bread",
    image: "/api/placeholder/300/300",
    price: 3.29,
    oldPrice: 6.7,
    category: "Bakery",
    unit: "loaf",
    rating: 4,
    discount: "10%",
  },
  {
    id: 4,
    name: "Fresh Salmon Fillet",
    image: "/api/placeholder/300/300",
    price: 12.99,
    oldPrice: 6.7,
    category: "Seafood",
    unit: "lb",
    discount: "10%",
    rating: 5,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          This Week's Favorites
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-base md:text-lg mb-12"
        >
          Hand-picked products you’ll love
        </motion.p>

        {/* Product Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ duration: 0, ease: "easeOut" }} // <-- Faster and smoother!
              className="rounded-2xl p-4 transition"
            >
              <ProductCard
                image={product.image}
                name={product.name}
                category={product.category}
                price={product.price}
                oldPrice={product.oldPrice}
                discount={product.discount}
                rating={product.rating}
                unit={product.unit}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
