import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Shop from "./pages/Shop";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar />
      {/* other pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default App;
