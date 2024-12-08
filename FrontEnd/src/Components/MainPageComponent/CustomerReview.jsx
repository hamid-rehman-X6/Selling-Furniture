import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Salma Adam",
    review:
      "Best supportive team, great prices and quality, 2 projects together and Still going, lucky to work with you, and Savi is the best,  never let me down. Way to go design craft👏👏👏",
  },
  {
    id: 2,
    name: "Syed Jaffar Javed",
    review:
      "Dear Savi, I really appreciate all of your help n efforts in getting our DAFZA office ready, You’ve right there, helping out wherever n whenever needed for these past few months. Everything has finally come together. I appreciate your assistance very much and look forward to continuing our collaboration.Best regards, Syed Jaffar Javed.",
  },
  {
    id: 3,
    name: "Ridwan Hurzuk",
    review:
      "Excellent service We received our order exactly as we got promised from Ms.Savi mam ..Good Quality as we expected Thanks & Regards Ridwan Hurzuk From Harrington Petroleum DMCC",
  },
  {
    id: 4,
    name: "Priya Dinesh",
    review:
      "I recently used the services of Design craft office Furniture LLC for the installation of our office furniture, and I cannot express how impressed I am with their exceptional level of services.",
  },
  {
    id: 5,
    name: "K M",
    review:
      "We approached Saviona and her team with a task to make a floor-to-ceiling office bookshelf and we are very pleased with the end result. They advised on the design, the material, the turnaround was pretty quick and the installation went smooth. They came to us as a recommendation and I will continue to recommend them further.",
  },
  {
    id: 6,
    name: "Shazia Nizar",
    review:
      "Amazing Quality and delivery was on time! The Customer Service was great, Savi was diligent and patient with us throughout the entire process right from enquiry to delivery of the final product.",
  },
  {
    id: 7,
    name: "HR Eagle Stone Technologies",
    review:
      "Was in search of office furniture when I came across their details on Google. We got the conference table and wardrobe with a perfect finishing and on time. Ms. Savi and Mr. Stanley were very helpful and always on point during the entire process. Even the assembling was done perfectly and hastlefree. Looking forward to do business with designcraft again in the future.",
  },
  {
    id: 8,
    name: "Joyce Anne",
    review:
      "The majority of our office furniture is custom-made by Design Craft because we were so satisfied with their work. They consistently meet our expectation when it comes to quality. Also, the team offers exceptional customer service; Savi, Stanley, and Guru were all outstanding. We will definitely be getting more items in the future. Highly recommended!",
  },
];

const CustomerReview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === reviews.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-light text-gray-400 mb-8">
          CUSTOMER SATISFACTION
        </h2>
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 md:p-10 min-h-[18rem] overflow-hidden">
          {/* Current Slide Content */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4 sm:gap-0">
            <div className="text-left">
              <span className="font-bold text-gray-800 mr-2 font-montserrat block sm:inline">
                {reviews[currentSlide].name}
              </span>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-3 sm:h-3"
                    style={{
                      color: "transparent",
                      fill: "#FCD34D",
                      stroke: "#FBBF24",
                    }}
                  />
                ))}
              </div>
            </div>
            <FontAwesomeIcon
              icon={faGoogle}
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
          </div>

          <hr />
          <br />
          <p className="text-gray-600 text-left font-montserrat break-words">
            {reviews[currentSlide].review}
          </p>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? "bg-gray-900" : "bg-gray-400"
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
