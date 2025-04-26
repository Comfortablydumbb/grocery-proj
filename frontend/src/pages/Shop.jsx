import { motion } from "framer-motion";
import ProductCard from "../component/ProductCard";

const products = [
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

export default function Shop() {
  return (
    <section className="bg-gray-50 py-20 lg:pt-40">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-700">
          Shop Fresh With Us!
        </h1>
        <p className="text-gray-600 mt-2">
          Explore our best selections curated just for you.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/4"
        >
          <div className="bg-white rounded-xl shadow p-6 sticky top-36">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Product Categories
            </h2>
            <ul className="space-y-4">
              {[
                "Baking material",
                "Bread and Juice",
                "Clothing & beauty",
                "Fresh Fruit",
                "Fresh Seafood",
                "Milks and Dairies",
                "Vegetables",
              ].map((category, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input type="checkbox" className="accent-green-600" />
                  <span className="text-gray-700 group-hover:text-green-600 transition">
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>

        {/* Main Products Section */}
        <div className="w-full lg:w-3/4">
          {/* Top bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <p className="text-gray-700 text-sm">Showing 1–12 of 16 results</p>
            <div className="flex items-center gap-2">
              <label htmlFor="show" className="text-gray-700 text-sm">
                Show:
              </label>
              <select
                id="show"
                className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="36">36</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="relative"
              >
                {/* Discount badge */}
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discount} OFF
                  </span>
                )}
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

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <nav className="flex items-center gap-2 p-3 bg-white shadow-md rounded-lg">
              <button className="px-4 py-2 rounded-md bg-gray-100 hover:bg-green-500 hover:text-white text-sm text-gray-700 transition">
                Previous
              </button>

              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className="px-4 py-2 rounded-md bg-gray-100 hover:bg-green-500 hover:text-white text-sm text-gray-700 transition"
                >
                  {page}
                </button>
              ))}

              <button className="px-4 py-2 rounded-md bg-gray-100 hover:bg-green-500 hover:text-white text-sm text-gray-700 transition">
                Next
              </button>
            </nav>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
