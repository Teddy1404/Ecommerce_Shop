import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import register from "../../images/register.jpg";
const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/forgot-password",
        {
          email,
          newPassword,
          answer,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Forgot-Password - Ecommerce App">
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
              <form onSubmit={handleSubmit}>
                <h4 className="">RESET PASSWORD</h4>
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
                    onChange={(e) => setAnswer(e.target.value)}
                    value={answer}
                    type="text"
                    placeholder="Enter Your Favorite Sport"
                    className="border border-gray-400 py-1 px-2 w-full text-purple-800 font-semibold"
                    required
                  />
                </div>
                <div className="mt-5">
                  <input
                    onChange={(e) => setNewPassword(e.target.value)}
                    value={newPassword}
                    type="password"
                    placeholder="New Password"
                    className="border border-gray-400 py-1 px-2 w-full text-purple-800 font-semibold"
                    required
                  />
                </div>
                <div
                  className="flex flex-col sm:flex-row
                "
                >
                  <div className="mt-5 w-full">
                    <button
                      type="submit"
                      className="w-full bg-purple-500 py-3 text-center text-white"
                    >
                      Reset
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

export default ForgotPasssword;
