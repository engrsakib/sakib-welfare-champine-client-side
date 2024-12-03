import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [formData, setFormData] = useState({
    mail: "",
    password: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="relative bg-white p-8 rounded-lg shadow-md w-[100%] md:w-[60%]">
          {/* Lock Icon */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2"></div>
          <h2 className="text-center text-lg font-bold text-gray-800 mb-6">
            USER LOGIN
          </h2>
          <form onSubmit={handleSubmit}>
            {/* mail Field */}
            <div className="mb-4">
              <input
                type="text"
                name="mail"
                placeholder="mail"
                className="input input-bordered w-full"
                value={formData.mail}
                required
                onChange={handleChange}
              />
            </div>
            {/* Password Field */}
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <AiFillEyeInvisible size={20} />
                ) : (
                  <AiFillEye size={20} />
                )}
              </div>
            </div>
            {/* Remember Me and Forgot Password */}
            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  name="remember"
                  className="checkbox checkbox-primary"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                <span>Remember Me</span>
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-full">
              LOGIN
            </button>
          </form>
          {/* Register Section */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to={`/auth/regester`}
                className="text-blue-500 hover:underline font-semibold"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
