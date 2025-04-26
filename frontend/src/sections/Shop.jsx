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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Product Categories
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="text-green-600" />
                <span className="text-gray-700">Baking material</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="text-green-600" />
                <span className="text-gray-700">Bread and Juice</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="text-green-600" />
                <span className="text-gray-700">Clothing & beauty</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="text-green-600" />
                <span className="text-gray-700">Fresh Fruit</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="text-green-600" />
                <span className="text-gray-700">Fresh Seafood</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="text-green-600" />
                <span className="text-gray-700">Milks and Dairies</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="text-green-600" />
                <span className="text-gray-700">Vegetables</span>
              </li>
            </ul>
          </div>
        </aside>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card */}
            {products.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  image={product.image}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  discount={product.discount}
                  rating={product.rating}
                  unit={product.unit}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
