import React, { useState } from "react";

export default function RequestSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    product: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" }); // Clear errors on input change
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    // Mobile number validation
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^\+\d{1,4}\d{7,15}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number contain only numbers.";
    }
    if (!formData.product) newErrors.product = "Product interest is required.";

    // If there are validation errors, set them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, show success message
    setSuccessMessage("Thank you! Our team will contact you shortly.");
    setFormData({ name: "", mobile: "", product: "" }); // Clear form fields
    setErrors({});
  };

  return (
    <div className="container  mt-6 px-4 py-8">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Form Section */}
        <div className="w-full  md:w-1/2">
          <h1 className="text-4xl font-montserrat font-light text-gray-800 mb-6">
            Request a Quote
          </h1>
          {/* Custom Card */}
          <div className="bg-[#F3F3F3] shadow-custom rounded-3xl min-w-min">
            {/* Card Content */}
            <div className="p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-normal font-montserrat text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-1 bg-[#E7E7E7] border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#B0A18F] focus:border-transparent"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Mobile Input */}
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-normal font-montserrat text-gray-700 mb-1"
                  >
                    Mobile
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    placeholder="+971"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-1 bg-[#E7E7E7] border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#B0A18F] focus:border-transparent"
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                  )}
                </div>

                {/* Product Interest Input */}
                <div>
                  <label
                    htmlFor="product"
                    className="block text-sm font-normal font-montserrat text-gray-700 mb-1"
                  >
                    Which Product you are interested in?
                  </label>
                  <input
                    type="text"
                    id="product"
                    placeholder="Eg: Workstation Desk"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-1 bg-[#E7E7E7] border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#B0A18F] focus:border-transparent"
                  />
                  {errors.product && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.product}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-20 py-1 bg-[#B0A18F] text-white font-semibold rounded-2xl hover:bg-[#9A8C7E] transition-all duration-300"
                >
                  Send
                </button>

                {/* Success Message */}
                {successMessage && (
                  <p className="text-orange-500 mt-4 font-montserrat text-md text-center font-bold">
                    {successMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-6 mr-8">
          <h2 className="text-2xl text-center font-thin font-montserrat text-gray-800 mb-4">
            CHOOSE WISELY
          </h2>
          <p className="text-gray-950 mt-10 leading-relaxed tracking-wide font-montserrat">
            A person is said to spend 90,000 hours at work over a lifetime. That
            means one-third of your life is spent at your office. One of the
            fundamental aspects of any office setup is its furniture. Right
            office furniture is not only about aesthetics but also plays a major
            role in efficiency and comfort. Moreover, choosing the right
            products can reduce MSDs caused by cheap and low-quality furniture.
            At Design Craft, we help you choose the right furniture for your
            office.
          </p>
        </div>
      </div>
    </div>
  );
}
