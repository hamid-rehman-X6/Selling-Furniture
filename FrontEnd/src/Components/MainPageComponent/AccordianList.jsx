import React, { useState } from "react";

const Accordion = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full flex items-center py-2 px-6 focus:outline-none"
        onClick={onToggle}
      >
        <span className="text-2xl text-gray-800 mr-4">
          {isOpen ? "−" : "+"}
        </span>
        <span className="text-md font-bold text-gray-950 font-sans">
          {title}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-black font-sans text-[14px] leading-6">
          {content}
        </div>
      )}
    </div>
  );
};

const AccordianList = () => {
  const accordionData = [
    {
      title: "OFFICE FURNITURE IN DUBAI",
      content: (
        <>
          Office furniture serves as the foundation of an ergonomic and
          efficient workstation. When selecting furniture, it is vital to
          consider <strong>comfort</strong> both and design.{" "}
          <strong>Design Craft</strong> being a reputable supplier in Dubai who
          specialize in office furniture and offer a wide range of options to
          suit your needs — the ergonomic chairs and adjustable desks are
          essential for promoting good posture and reducing strain on the body
          during long hours of work. Additionally, top-notch materials and
          <strong> finishes</strong> exude professionalism and durability.
        </>
      ),
    },
    {
      title: "DIFFERENT OFFICE DESKS",
      content:
        "Some of the most common office desks are Workstation Desks, Executive Desk, Reception Desk, and Conference Desk. ",
    },
    {
      title: "OFFICE WORKSTATIONS",
      content: (
        <>
          Design Craft understands the needs of office workstations. That’s why
          we offer unique benefits and functionalities through a variety of
          shapes and configurations to reflect your organizational culture well.
          Our cubicle workstations combine privacy and noise reduction features,
          creating individualized spaces for focused work. Open-plan
          workstations, infused with our <strong>design</strong> expertise,
          foster collaboration and communication, fueling creativity and
          idea-sharing. With our touch, L-shaped workstations maximize corner
          spaces while providing ample surface area for multitasking,
          harmonizing efficiency with aesthetics. U-shaped workstations,
          designed with careful consideration, offer extensive workspace and
          storage options, catering to those who require a larger area to excel.
          Moreover, our modular
          <strong> workstations</strong> epitomize adaptability and flexibility,
          enabling effortless reconfiguration to suit evolving needs.
        </>
      ),
    },
    {
      title: "DESIGN CRAFT OFFICE FURNITURE",
      content: (
        <>
          <i>
            Are you looking for <strong> office furniture in Dubai</strong>?
            Discover the top considerations when choosing an office furniture
            supplier. Find the right partner for your office furniture needs,
            from quality and price to delivery and space optimization.
          </i>{" "}
          <br /> <br />
          In a rapidly changing world, Dubai is at the forefront of
          transformation. When it comes to ultra-modern office furniture,{" "}
          <strong>Design Craft</strong> is renowned for its established
          reputation in the furniture market. They are widely recognized for
          their expertise in providing cutting-edge and contemporary{" "}
          <strong> office furniture</strong> solutions. They have been assisting
          start-ups and businesses by creating top-notch office furniture that
          stands out and showcases their meticulous selection of materials,
          ranging from high-quality Egg German Board to a diverse range of
          options. Their exceptional services, including consultation and
          customized solutions, set them apart as a leading{" "}
          <strong>office furniture supplier in Dubai.</strong>
          <br /> <br />
          When investing in office furniture, quality is paramount. A reliable
          supplier like <strong>Design Craft</strong>, offers durable and
          well-crafted furniture designed to withstand the demands of daily use.
          Consider factors such as material, construction, and{" "}
          <strong>finish</strong> to ensure the longevity of your furniture
          investments. Opting for <strong>high-quality furniture</strong> will
          enhance the overall aesthetics and functionality of your office space
          and your organization’s professional persona.
          <br /> <br />
          Every office has different requirements based on its nature of work
          and the number of employees. <strong>Design Craft </strong>supplies an
          extensive range of office furniture from manager level to executive
          level and conference tables to coffee tables. Top-notch ergonomic
          storage, seating, and flooring not only incorporate a huge shift in
          your business but also become the reason to hook your client
          aesthetically. Their supportive team proposes a comprehensive guide
          that ensures you can find furniture that aligns with your office
          layout and style preferences.
          <br /> <br />
          When choosing an office furniture supplier, it’s crucial to consider
          your budget. It’s important to compare prices among different
          suppliers in Dubai to find the best value for your money. However,
          keep in mind that the lowest price may not always indicate the best
          quality. <strong>Design Craft</strong> understands the balance between
          affordability and quality, ensuring long-term satisfaction with your
          office furniture investment. As a furniture manufacturer and interior
          design company, they offer the <strong>best office furniture</strong>{" "}
          price that fulfills both conceptual and stylistic demands.
          <br /> <br />
          Efficient delivery and installation services are essential for a
          hassle-free experience when purchasing office furniture. The quality
          of a superior supplier is to provide reliable delivery timelines and
          professional installation support. That’s why{" "}
          <strong>Design Craft </strong> makes prompt delivery and proper
          installation save time and effort, allowing your employees to focus on
          their work rather than dealing with{" "}
          <strong>furniture logistics.</strong>
          <br /> <br />
          Maximizing the available <strong> office space </strong> is crucial
          for productivity and efficiency. A reputable supplier offers space
          planning and design services to help you optimize your office layout —
          <strong>Design Craft</strong>, being the pioneer of office furniture,
          provides expert advice on furniture placement and configuration,
          ensuring efficient utilization of your workspace. Furthermore, they
          collaborate with a prudent supplier who understands your spatial
          requirements and can customize solutions accordingly.
          <br /> <br />
          The benefit of a transaction with <strong>Design Craft</strong> is
          after-sales support and warranty coverage. With a warranty period of 5
          years, you can have peace of mind and protection for your investment.
          Additionally, they provide <strong>free delivery</strong> and
          installation services in Dubai, Abu Dhabi, Sharjah, and Ajman. The
          delivery lead time for your order would be 7-10 working days upon
          payment. The supplier ensures prompt resolution of any issues or
          concerns you may have with the furniture, making it a reliable choice
          for your office furniture needs.
          <br /> <br />
          Finding the <strong>best office furniture mover in Dubai</strong> no
          longer has to be a nightmare. <strong>Design Craft</strong> stands out
          as a household name, offering a comprehensive solution for all your
          office furniture needs. With a focus on quality, an extensive range of
          options, competitive pricing, reliable delivery, installation
          services, and innovative space optimization solutions, they have
          earned its reputation.
        </>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-10 bg-gray-100 border-2 mb-10">
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index} // Check if this index is open
          onToggle={() => handleToggle(index)} // Pass toggle function
        />
      ))}
    </div>
  );
};

export default AccordianList;
