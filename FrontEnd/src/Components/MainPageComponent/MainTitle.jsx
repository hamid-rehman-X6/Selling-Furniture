import React from "react";

const MainTitle = () => {
  return (
    <>
      <div className="min-w-max mt-10 font-montserrat">
        <h1 className="flex items-center justify-center text-sm sm:text-xl  md:text-2xl font-bold tracking-wide">
          COMPLETE OFFICE FURNITURE SOLUTION IN{" "}
          <span className="text-[#DE6422] ml-2">DUBAI</span>{" "}
        </h1>

        <p className="text-[12px] flex justify-center mt-6 ">
          OFFICE DESK | CHAIRS | CABINET
        </p>
      </div>

      <div className="mt-14 min-w-full md:min-w-full">
        <div className="mx-8">
          <img src="/images/MainPageImg.jpeg" alt="MainPageImage" />
        </div>
      </div>
    </>
  );
};

export default MainTitle;
