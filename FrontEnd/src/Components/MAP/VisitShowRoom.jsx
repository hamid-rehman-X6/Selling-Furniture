import React from "react";

const VisitShowRoom = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4 lg:px-0">
      <h1 className="font-montserrat text-2xl sm:text-3xl lg:text-4xl text-gray-600 font-thin text-center">
        VISIT OUR SHOWROOM
      </h1>
      <div className="mt-8 w-full max-w-[1200px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62823.52120898486!2d55.17083535336362!3d25.138971493852196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d42772bc79d%3A0x205976ceee17c31!2sDESIGNCRAFT%20OFFICE%20FURNITURE!5e1!3m2!1sen!2s!4v1729933267103!5m2!1sen!2s"
          className="w-full h-[200px] sm:h-[300px] lg:h-[400px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default VisitShowRoom;
