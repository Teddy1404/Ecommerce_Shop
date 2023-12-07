/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import register from "../../images/register.jpg";
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success("Successfully login");
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err.res.data);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title="Login - Ecommerce App">
      <div
        className="min-h-screen py-40 "
        style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-black text-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div
              className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center "
              style={{ backgroundImage: `url(${register})` }}
            ></div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4">Login</h2>
              <p className="mb-4">Login to buy what you want</p>
              <form onSubmit={handleSubmit}>
                <div className="mt-5">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                    className="border border-gray-400 py-1 px-2 w-full text-purple-800 font-semibold"
                    required
                  />
                </div>
                <div className="mt-5">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                    className="border border-gray-400 py-1 px-2 w-full text-purple-800 font-semibold"
                    required
                  />
                </div>
                <div
                  className="flex flex-col sm:flex-row
                "
                >
                  <div className="mt-5 sm:w-1/2 sm:p-2">
                    <button
                      onClick={() => {
                        navigate("/forgot-password");
                      }}
                      type="submit"
                      className="w-full bg-purple-500 py-3 text-center text-white "
                    >
                      Forgot Password
                    </button>
                  </div>
                  <div className="mt-5 sm:w-1/2  sm:p-2">
                    <button
                      type="submit"
                      className="w-full bg-purple-500 py-3 text-center text-white"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
