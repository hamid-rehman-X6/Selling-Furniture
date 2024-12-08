import React from "react";
import Statistics from "../MainPageComponent/Statistics";

const Map = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 items-center mt-16 px-4 lg:px-0">
      {/* Map and Address Section */}
      <div className="w-full lg:w-auto lg:ml-6 max-w-full lg:max-w-[620px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62823.52120898486!2d55.17083535336362!3d25.138971493852196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d42772bc79d%3A0x205976ceee17c31!2sDESIGNCRAFT%20OFFICE%20FURNITURE!5e1!3m2!1sen!2s!4v1729933267103!5m2!1sen!2s"
          className="w-full h-[200px] sm:h-[320px] lg:w-[600px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <h1 className="text-2xl sm:text-3xl lg:text-[36px] mt-8 font-montserrat text-[#2B2B2B] font-thin">
          VISIT US
        </h1>

        <div className="font-montserrat mt-6 sm:mt-8 lg:mt-12 lg:ml-12">
          <h1 className="text-sm font-semibold">ADDRESS:</h1>
          <p className="text-[#757575] mt-2 sm:mt-4">
            Abdul Razzaq Mohiddin Abdulla Warehouse, Shed No-1, Opp. Pedal Art,
            Al Quoz Industrial Area – 1 Dubai, UAE
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="w-full lg:max-w-[400px] mt-8 lg:mt-0 lg:p-8 mx-auto">
        <Statistics />
      </div>
    </div>
  );
};

export default Map;
