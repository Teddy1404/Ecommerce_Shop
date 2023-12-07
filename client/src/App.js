// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "./App.css";
import Homepage from "./Pages/HomePage";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact.js";
import Policy from "./Pages/Policy.js";
import Register from "./Pages/Auth/Register.js";
import PagenotFound from "./Pages/PagenotFound.js";
import { Routes, Route } from "react-router-dom";
import toast from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Pages/Auth/Login.js";
import Dashboard from "./user/Dashboard.js";
import PrivateRoute from "./components/Routes/Private.js";
import Loader from "./components/Routes/Loader.js";
import ForgotPasssword from "./Pages/Auth/ForgotPassword.js";
import AdminRoute from "./components/Routes/AdminRoute.js";
import AdminDashboard from "./Pages/admin/AdminDashboard.js";
import CreateCategory from "./Pages/admin/CreateCategory.js";
import CreateProduct from "./Pages/admin/CreateProduct.js";
import UpdateProduct from "./Pages/admin/UpdateProducts.js";
import Product from "./Pages/admin/Products.js";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Product />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </>
  );
}

export default App;
