import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ProductListing from "../pages/ProductListing";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Welcome from "../pages/Welcome";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<ProductListing />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
};

export default Routers;
