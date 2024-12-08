import React from "react";

const imagesData = [
  { src: "/images/executivedesk.jpeg", title: "EXECUTIVE DESK" },
  { src: "/images/workstation.jpg", title: "WORKSTAION" },
  { src: "/images/conference.jpeg", title: "CONFERENCE TABLE" },
  { src: "/images/reception.webp", title: "RECEPTION DESK" },
  { src: "/images/roundmeeting.webp", title: "ROUND MEETING TABLE" },
  { src: "/images/heightadjustabledesk.webp", title: "HEIGHT ADJUSTABLE DESK" },
];

const SixFlexImages = () => {
  return (
    <div className="container mx-auto px-4 mt-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-3">
        {imagesData.map((image, index) => (
          <div key={index} className="flex flex-col ">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-auto shadow-md"
            />
            <h3 className="mt-4 text-lg font-thin text-slate-500 font-montserrat">
              {image.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SixFlexImages;
