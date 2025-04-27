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
import UserLayout from "./layouts/UserLayout";
import { Toaster } from "react-hot-toast";
import VerifyOTP from "./pages/VerifyOtp";

const App = () => {
  return (
    // <div>
    //   {/* <Navbar /> */}
    //   <Navbar />
    //   {/* other pages */}
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/shop" element={<Shop />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/cart" element={<Cart />} />
    //     <Route path="/checkout" element={<Checkout />} />
    //     <Route path="/orders" element={<Orders />} />
    //   </Routes>
    //   {/* footer */}
    //   <Footer />
    // </div>

    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify/:email" element={<VerifyOTP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};

export default App;
