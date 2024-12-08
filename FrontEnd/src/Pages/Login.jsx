import React, { useState } from "react";
import { X, User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import axios from "axios";
import Cookies from "js-cookie";

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState(null);

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Login API call
        const response = await axios.post(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/auth/users/login`,
          {
            email: formData?.email,
            password: formData?.password,
          }
        );
        setMessage({
          text: response?.data?.message,
          status: response?.data?.success ? "success" : "error",
        });
        if (response?.data?.success) {
          const tokenID = response?.data?.tokenId;
          localStorage.setItem("accessToken", tokenID);

          // Set token in cookie with 1-day expiration
          Cookies.set("token", tokenID, { expires: 1 });
          onClose();
        }
      } else {
        // Signup API call
        const response = await axios.post(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/auth/users/signup`,
          {
            email: formData?.email,
            firstName: formData?.firstName,
            lastName: formData?.lastName,
            password: formData?.password,
            confirmPassword: formData?.confirmPassword,
          }
        );
        setMessage({
          text: response?.data?.message,
          status: response?.data?.success ? "success" : "error",
        });
        if (response?.data?.success === true) {
          setFormData({
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: "",
          });
          setIsLogin(true);
        }
      }

      // Clear message after 3 seconds if it's an error
      if (message?.status === "error") {
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      }
    } catch (error) {
      setMessage(error?.response?.data?.message || "An error occurred");

      // Clear error message after 3 seconds
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  };

  return (
    <>
      <div className="fixed z-30 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white w-full px-3 max-w-lg md:max-w-md lg:max-w-xl mx-4 h-auto md:h-[98%] shadow-lg rounded-lg">
          {/* Close Button */}
          <div className="flex justify-end p-2">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          {/* Toggle Login/Signup */}
          <div className="flex mx-auto w-full md:w-[80%] lg:w-[450px] mb-6">
            <button
              className={`flex-1 py-2 md:py-3 font-semibold font-montserrat text-sm md:text-base lg:text-lg ${
                isLogin ? "bg-black text-white" : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 md:py-3 font-semibold font-montserrat text-sm md:text-base lg:text-lg ${
                !isLogin ? "bg-black text-white" : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          {/* Form Content */}
          <form
            onSubmit={handleSubmit}
            className="px-4 md:px-8 pb-8 space-y-4 md:space-y-6 max-h-[500px]"
          >
            {message && (
              <p
                className={`rounded-lg py-1 px-4 text-sm w-max ${
                  message.status === "success"
                    ? "bg-green-200 text-green-700"
                    : "bg-red-200 text-red-500"
                }`}
              >
                {message.text}
              </p>
            )}
            {isLogin ? (
              <>
                <div className="mb-4">
                  <div className="flex items-center border rounded-md">
                    <span className="px-3 py-2 bg-gray-100 border-r">
                      <User size={20} className="text-gray-500" />
                    </span>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="flex-1 px-3 py-2 outline-none text-sm md:text-base"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center border rounded-md">
                    <span className="px-3 py-2 bg-gray-100 border-r">
                      <Lock size={20} className="text-gray-500" />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      className="flex-1 px-3 py-2 outline-none text-sm md:text-base"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="px-3 py-2"
                    >
                      {showPassword ? (
                        <EyeOff size={20} className="text-gray-500" />
                      ) : (
                        <Eye size={20} className="text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6 text-xs md:text-sm text-gray-900">
                  <label className="flex items-center font-bold text-[14px] font-montserrat">
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </label>
                </div>
                <button className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 text-sm md:text-base">
                  SIGN IN
                </button>
              </>
            ) : (
              <>
                <div className="mb-4">
                  <div className="flex items-center border rounded-md">
                    <span className="px-3 py-2 bg-gray-100 border-r">
                      <Mail size={20} className="text-gray-500" />
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="flex-1 px-3 py-2 outline-none text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="mb-4 space-y-2 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center border rounded-md">
                      <span className="px-3 py-2 bg-gray-100 border-r">
                        <User size={20} className="text-gray-500" />
                      </span>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="flex-1 px-3 py-2 outline-none text-sm md:text-base"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center border rounded-md">
                      <span className="px-3 py-2 bg-gray-100 border-r">
                        <User size={20} className="text-gray-500" />
                      </span>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="flex-1 px-3 py-2 outline-none text-sm md:text-base"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center border rounded-md">
                    <span className="px-3 py-2 bg-gray-100 border-r">
                      <Lock size={20} className="text-gray-500" />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      className="flex-1 px-3 py-2 outline-none text-sm md:text-base"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="px-3 py-2"
                    >
                      {showPassword ? (
                        <EyeOff size={20} className="text-gray-500" />
                      ) : (
                        <Eye size={20} className="text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex items-center border rounded-md">
                    <span className="px-3 py-2 bg-gray-100 border-r">
                      <Lock size={20} className="text-gray-500" />
                    </span>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="flex-1 px-3 py-2 outline-none text-sm md:text-base"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="px-3 py-2"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} className="text-gray-500" />
                      ) : (
                        <Eye size={20} className="text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
                <button className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 text-sm md:text-base">
                  SIGN UP
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
