export default function Hero() {
  return (
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
  );
}
