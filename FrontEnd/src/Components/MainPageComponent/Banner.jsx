import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      {/* BANNER 1 */}
      <Link to={"/product-category/desks/executive-desk"}>
        <div className="w-full mx-auto max-w-[1200px] bg-white font-montserrat mt-16">
          <div className="p-6 ml-4">
            <h1 className="text-[24px] text-[#3A3F45]">EXECUTIVE DESK</h1>
            <p className="text-[16px] mt-4 text-[#3A3F45]">
              Crafted with precision and designed for utmost comfort, our
              executive desks are more than just a place to work. They are a
              statement of success and sophistication. Choose from a variety of
              materials, finishes, and configurations to find the perfect desk
              that complements your unique style.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-custom-gradient my-3 py-2 px-4 font-montserrat text-white text-sm font-thin">
            EXECUTIVE DESK
          </button>
        </div>
      </Link>

      {/* BANNER 2 */}
      <Link to={"/product-category/desks/office-desk"}>
        <div className="w-full mx-auto max-w-[1200px] bg-white font-montserrat">
          <div className="p-6 ml-4">
            <h1 className="text-[24px] text-[#3A3F45]">WORKSTATION DESK</h1>
            <p className="text-[16px] mt-4 text-[#3A3F45]">
              In a world where flexibility and collaboration are key, our
              workstation desks are designed to foster creativity and teamwork.
              These versatile desks are the heart of any dynamic office,
              providing space for individual tasks or team projects. With
              ergonomic designs and customizable layouts, our workstation desks
              are the perfect choice for today's fast-paced, modern workplace.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-custom-gradient my-3 py-2 px-4 font-montserrat text-white text-sm font-thin">
            WORKSTATION DESK
          </button>
        </div>
      </Link>

      {/* BANNER 3 */}
      <Link to={"/product-category/desks/reception-desk"}>
        <div className="w-full mx-auto max-w-[1200px] bg-white font-montserrat">
          <div className="p-6 ml-4">
            <h1 className="text-[24px] text-[#3A3F45]">RECEPTION DESK</h1>
            <p className="text-[16px] mt-4 text-[#3A3F45]">
              First impressions matter, and our reception desks make sure it's a
              lasting one. Crafted with an eye for detail and an emphasis on
              functionality, our reception desks are the embodiment of elegance
              and professionalism. Choose from a wide selection of styles and
              finishes to create a reception area that reflects your brand's
              personality while ensuring an efficient and welcoming environment.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-custom-gradient my-3 py-2 px-4 font-montserrat text-white text-sm font-thin">
            RECEPTION DESK
          </button>
        </div>
      </Link>

      {/* BANNER 4 */}
      <Link to={"/product-category/desks/conference-desk"}>
        <div className="w-full mx-auto max-w-[1200px] bg-white font-montserrat">
          <div className="p-6 ml-4">
            <h1 className="text-[24px] text-[#3A3F45]">CONFERENCE DESK</h1>
            <p className="text-[16px] mt-4 text-[#3A3F45]">
              The conference room is where ideas come to life, and our
              conference desks set the stage for innovation. Whether you're
              hosting important meetings, brainstorming sessions, or
              presentations, our conference desks offer the ideal blend of form
              and function. With various sizes, materials, and features
              available, you'll find the perfect conference desk that matches
              your company's vision and facilitates productive discussions
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-custom-gradient mt-2 py-2 px-4 font-montserrat text-white text-sm font-thin">
            CONFERENCE DESK
          </button>
        </div>
      </Link>
    </>
  );
};

export default Banner;
