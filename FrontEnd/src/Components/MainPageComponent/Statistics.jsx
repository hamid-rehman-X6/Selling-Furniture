import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { openWhatsApp } from "../OtherComponent/Whatsapp";

const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [start, end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // Stop observing once it's visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Cleanup observer on unmount
      }
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="text-center mt-10 font-montserrat tracking-wide leading-10"
      >
        {isVisible && (
          <>
            <div className="text-[40px] font-bold text-[#EF9225]">
              <Counter start={0} end={1000} duration={3000} />+
            </div>
            <p className="text-[20px] text-[#3A3F45]">DESIGNS</p>

            <div className="text-[40px] font-bold text-[#EF9225] mt-6">
              <Counter start={0} end={200} duration={3000} />+
            </div>
            <p className="text-[20px] text-[#3A3F45]">CLIENTS</p>

            <div className="text-[40px] font-bold text-[#EF9225] mt-6">
              <Counter start={0} end={500} duration={3000} />+
            </div>
            <p className="text-[20px] text-[#3A3F45]">HAPPY CUSTOMERS</p>
          </>
        )}
      </div>

      <div className="font-montserrat ">
        <h1 className="text-2xl text-slate-700 mt-8 tracking-wider">
          CHAT US FOR MORE
        </h1>
        <Link className="flex items-center justify-center mt-6">
          <button
            onClick={openWhatsApp}
            className="text-sm gap-2 border bg-[#13990C] tracking-wide text-white py-2 px-5 rounded-full"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" /> Whatsapp
          </button>
        </Link>
      </div>
    </>
  );
};

export default Statistics;
