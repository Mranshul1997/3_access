import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#6e7fb9] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://backiee.com/static/wallpapers/560x315/338598.jpg")',
          filter: "blur(5px)",
        }}
      >
        {/* Left Section */}
        <div className="w-1/3 bg-[#010048] flex flex-col items-center justify-center">
          <div
            className="  text-white flex  justify-start items-center p-10"
            style={{
              width: "250px",
              height: "100px",
              border: "2px solid white",
              padding: "15px",
            }}
          >
            <img
              src="https://aspire.3access.co.uk/themes/default/views/assets/img/logo.png"
              alt=""
              srcset=""
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/3 p-8">
          <form>
            {/* Company Name */}
            <div className="mb-4">
              <label className="block text-gray-700">Company Name *</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Company Name"
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2 mb-4">
                <label className="block text-gray-700">First Name </label>
                <input
                  type="email"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Email"
                />
              </div>
              <div className="w-1/2 mb-4">
                <label className="block text-gray-700">Last Name </label>
                <input
                  type="password"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Password"
                />
              </div>
            </div>

            {/* Email & Password */}
            <div className="flex space-x-4">
              <div className="w-1/2 mb-4">
                <label className="block text-gray-700">Email *</label>
                <input
                  type="email"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Email"
                />
              </div>
              <div className="w-1/2 mb-4">
                <label className="block text-gray-700">Password *</label>
                <input
                  type="password"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Password"
                />
              </div>
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-gray-700">Address Line 1 *</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Address Line 1"
              />
            </div>

            {/* Area, City */}
            <div className="flex space-x-4">
              <div className="w-1/2 mb-4">
                <label className="block text-gray-700">Area</label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Area"
                />
              </div>
              <div className="w-1/2 mb-4">
                <label className="block text-gray-700">City *</label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="City"
                />
              </div>
            </div>

            {/* Post Code, Website */}
            <div className="flex space-x-4">
              <div className="w-1/2 mb-4">
                <label className="block text-gray-700">Post Code</label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Post Code"
                />
              </div>
              <div className="w-1/2 mb-4">
                <label className="block text-gray-700">Website</label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Website"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number *</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Phone Number"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded mt-2 hover:bg-blue-700"
              onClick={handleLogin}
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
