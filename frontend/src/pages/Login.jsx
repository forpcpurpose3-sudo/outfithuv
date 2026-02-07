import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import Logo from "../assets/logo.png";
import Loading from "../component/Loading";
import { authDataContext } from "../context/AuthContext";
import { userDataContext } from "../context/UserContext";

function Login() {
  const navigate = useNavigate();

  const { serverUrl } = useContext(authDataContext);
  const { getCurrentUser } = useContext(userDataContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${serverUrl}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      toast.success("Login successful");
      getCurrentUser();
      navigate("/");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white px-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div
          className="text-center mb-8 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="logo" className="w-14 mx-auto mb-3" />
          <h1 className="text-3xl font-black text-gray-900">
            TheOutfitHuv
          </h1>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black text-gray-900">
            Welcome Back
          </h2>
          <p className="text-gray-600 mt-2">
            Sign in to your account
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-xl">
          <form onSubmit={handleLogin} className="space-y-6">

            {/* Email */}
            <input
              type="email"
              placeholder="Email address"
              className="w-full h-12 border-2 border-gray-300 rounded-lg px-4 focus:outline-none focus:border-black transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full h-12 border-2 border-gray-300 rounded-lg px-4 focus:outline-none focus:border-black transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-12 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition flex items-center justify-center"
            >
              {loading ? <Loading /> : "Sign In"}
            </button>

            {/* Signup */}
            <p className="text-center text-gray-700">
              Don’t have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-blue-600 font-semibold cursor-pointer hover:underline"
              >
                Create one
              </span>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
