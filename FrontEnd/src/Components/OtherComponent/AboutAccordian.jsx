import React, { useState } from "react";

// Accordion Item Component
const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="">
    <button
      className="flex items-center w-full py-2 px-4 text-left text-black"
      onClick={onClick}
    >
      <span className="mr-3 font-bold">{isOpen ? "-" : "+"}</span>
      <span className="font-semibold text-lg font-montserrat">{title}</span>
    </button>
    {isOpen && (
      <div className="px-6 py-2 font-montserrat text-black">{content}</div>
    )}
  </div>
);

// Main Accordion Component
const AboutAccordian = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const accordionItems = [
    {
      title: "What is the role of furniture in the office?",
      content:
        "Employees can work better on office furniture; they will feel well-situated and happier in their work environment when the piece of furniture turns out to be comfortable and attractive. After adding appropriate furniture, your employee will perform like a well-oiled machine capable enough to generate quality output and regularly commit to their work. It will certainly help in reducing the absent rate of employees in the office.",
    },
    {
      title:
        "Why is it important to choose office furniture from a reputed furniture manufacturer?",
      content:
        "Furniture is an important addition to the office. Besides, it is expensive too; therefore, it is essential to purchase it from a reputed furniture manufacturer with years of experience in manufacturing and can build furniture that can stand out from the client’s expectations and beat the time. Designcraft is one of the best service providers that can easily fulfill your requirement.",
    },
    {
      title: "Does our office supply an asset?",
      content:
        "It would not be wrong to call office supplies a long-term asset. As it is something that would not be replaced with time every year, it is essential to purchase from the best Office Furniture Supplier in Sharjah, that is Designcraft.",
    },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="relative bg-contain bg-center bg-no-repeat min-h-[400px] flex items-center"
      style={{
        backgroundImage: 'url("/images/worldmap.webp")',
      }}
    >
      {/* Content container on top of overlay */}
      <div className="relative p-8 w-full max-w-3xl">
        <div className="space-y-4">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutAccordian;
