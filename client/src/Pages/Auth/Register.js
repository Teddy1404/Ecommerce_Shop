import React, { useState } from "react";
import register from "../../images/register.jpg";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        { name, email, password, phone, answer, address }
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title="Register - Ecommerce App">
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
              <h2 className="text-3xl mb-4">Register</h2>
              <p className="mb-4">
                Create your account. It’s free and only take a minute
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mt-5">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Name"
                    className="border border-gray-400 py-1 px-2 w-full text-purple-800 font-semibold"
                    required
                  />
                </div>
                <div className="mt-5">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
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
                <div className="mt-5">
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    type="text"
                    placeholder="Phone"
                    className="border border-gray-400 py-1 px-2 w-full text-purple-800 font-semibold"
                    required
                  />
                </div>
                <div className="mt-5">
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    type="text"
                    placeholder="Address"
                    className="border border-gray-400 py-1 px-2 w-full text-purple-800 font-semibold"
                    required
                  />
                </div>
                <div className="mt-5">
                  <input
                    onChange={(e) => setAnswer(e.target.value)}
                    value={answer}
                    type="text"
                    placeholder="What is your favourite sport"
                    className="border border-gray-400 py-1 px-2 w-full text-purple-800 font-semibold"
                    required
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="checkbox"
                    className="border border-gray-400"
                    required
                  />
                  <span>
                    I accept the{" "}
                    <a href="/policy" className="text-purple-800 font-semibold">
                      Terms of Use
                    </a>{" "}
                    &{" "}
                    <a href="/policy" className="text-purple-500 font-semibold">
                      Privacy Policy
                    </a>
                  </span>
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    className="w-full bg-purple-500 py-3 text-center text-white"
                  >
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
