import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TenantSignupPage() {
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission
    // Add form validation logic if needed
    navigate("/dashboard");
  };

  const validateWebsite = () => {
    // Add website validation logic here if needed
  };

  const validatePhone = () => {
    // Add phone number validation logic here if needed
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#6e7fb9] to-[#4a5a8d] flex items-center justify-center">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-[90%] max-w-4xl">
        {/* Left Section */}
        <div className="w-1/3 bg-[#f3f4f6] p-8 hidden md:block">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome!</h2>
          <p className="mt-2 text-gray-600">
            Please fill in the details to create your tenant account.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Tenant Signup
          </h1>
          <form onSubmit={handleLogin}>
            {/* Tenant Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Tenant Name *
              </label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 ease-in-out"
                placeholder="Tenant Name"
                required
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2 mb-4">
                <label className="block text-gray-700 font-medium">
                  First Name *
                </label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 ease-in-out"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="w-1/2 mb-4">
                <label className="block text-gray-700 font-medium">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 ease-in-out"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            {/* Email & Password */}
            <div className="flex space-x-4">
              <div className="w-1/2 mb-4">
                <label className="block text-gray-700 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 ease-in-out"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="w-1/2 mb-4">
                <label className="block text-gray-700 font-medium">
                  Password *
                </label>
                <input
                  type="password"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 ease-in-out"
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Address Line 1 *
              </label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 ease-in-out"
                placeholder="Address Line 1"
                required
              />
            </div>

            {/* Area, City */}
            <div className="flex space-x-4">
              <div className="w-1/2 mb-4">
                <label className="block text-gray-700 font-medium">Area</label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 ease-in-out"
                  placeholder="Area"
                />
              </div>
              <div className="w-1/2 mb-4">
                <label className="block text-gray-700 font-medium">
                  City *
                </label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 ease-in-out"
                  placeholder="City"
                  required
                />
              </div>
            </div>

            {/* Post Code, Website */}
            <div className="flex space-x-4">
              <div className="w-full md:w-[48%] mb-4">
                <label className="block text-gray-700 font-medium">
                  Post Code
                </label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 ease-in-out"
                  placeholder="Post Code"
                />
              </div>
              <div className="w-full md:w-[48%] mb-4">
                <label
                  htmlFor="website"
                  className="block text-gray-700 font-medium"
                >
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  placeholder="Website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  onBlur={validateWebsite}
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={validatePhone}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center  flex-col">
              <button
                type="submit"
                className="bg-blue-600  text-white px-4 py-2 rounded-md hover:bg-blue-700 active:bg-blue-800 transition duration-200"
              >
                SUBMIT
              </button>

              {/* Already have an account */}
              <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <a href="/" className="text-blue-600 underline">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TenantSignupPage;
