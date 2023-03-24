import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Category, Cart } from "../pages/index";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import store from "../store/store";
import { Provider } from "react-redux";

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category:id" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default AppRouter;
