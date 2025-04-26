import { Link } from "react-router-dom";
import ProductCard from "../component/ProductCard";

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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          This Week's Favorites
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-12">
          Hand-picked products you’ll love
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
              oldPrice={product.oldPrice}
              discount={product.discount}
              rating={product.rating}
              unit={product.unit}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
