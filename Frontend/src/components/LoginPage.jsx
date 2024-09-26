import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

function LoginPage() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignup = () => {
    navigate("/dashboard");
  };

  const handleGoToSignup = () => {
    navigate("/companiesSignup");
  };

  const handleGoToTenantSignup = () => {
    navigate("/tenantSignup");
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{
          backgroundImage:
            'url("https://backiee.com/static/wallpapers/560x315/338598.jpg")',
        }}
      ></div>

      {/* Container */}
      <div className="relative flex w-[85vw] h-[85vh] max-w-6xl shadow-lg rounded-lg bg-white bg-opacity-90 backdrop-filter backdrop-blur-md overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 bg-[#010048] text-white flex flex-col justify-center items-center p-10">
          <div className="text-white p-10 border-2 border-white rounded-md">
            <img
              src="https://aspire.3access.co.uk/themes/default/views/assets/img/logo.png"
              alt="Logo"
              className="h-20"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 p-10">
          <div className="flex flex-col items-center mb-10">
            <img
              src="https://aspire.3access.co.uk/themes/default/admin/assets/images/default/logo-blue.png"
              alt="App Logo"
              className="h-16"
            />
          </div>

          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="user@3access.com"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="block text-gray-600 mb-1">
                Password
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {passwordVisible ? (
                  <FaRegEyeSlash className="h-5 w-5 text-gray-500" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>

            {/* Login Button */}
            <button
              type="button"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
              onClick={handleSignup}
            >
              Login
            </button>

            {/* Forgot Password */}
            <div className="text-center mt-3">
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
          </form>

          {/* Additional Links */}
          <div className="mt-8 flex justify-between text-sm">
            <span
              onClick={handleGoToSignup}
              className="text-blue-600 underline cursor-pointer"
            >
              Login with Company Account?
            </span>
            <span
              onClick={handleGoToTenantSignup}
              className="text-blue-600 underline cursor-pointer"
            >
              Login with Tenant Account?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
