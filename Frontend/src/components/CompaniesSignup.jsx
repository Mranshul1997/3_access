import React from "react";
import { useNavigate } from "react-router-dom";

function CompaniesSignup() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{
          backgroundImage:
            'url("https://backiee.com/static/wallpapers/560x315/338598.jpg")',
        }}
      ></div>

      <div className="relative flex w-[85vw] h-[85vh] max-w-6xl shadow-lg rounded-lg bg-white bg-opacity-90 backdrop-filter backdrop-blur-md overflow-hidden">
        {/* Left Section */}
        <div className="w-1/3 bg-[#010048] flex flex-col justify-center items-center p-10">
          <div className="border-2 border-white p-6 rounded-md">
            <img
              src="https://aspire.3access.co.uk/themes/default/views/assets/img/logo.png"
              alt="Company Logo"
              className="h-20"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/3 p-10 space-y-6">
          <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
            Company Signup
          </h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            {/* Company Name */}
            <div>
              <label className="block text-gray-700">Company Name *</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Company Name"
                required
              />
            </div>

            {/* First Name, Last Name */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="First Name"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Email, Password */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700">Email *</label>
                <input
                  type="email"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">Password *</label>
                <input
                  type="password"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700">Address Line 1 *</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Address Line 1"
                required
              />
            </div>

            {/* Area, City */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700">Area</label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Area"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">City *</label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="City"
                  required
                />
              </div>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompaniesSignup;
