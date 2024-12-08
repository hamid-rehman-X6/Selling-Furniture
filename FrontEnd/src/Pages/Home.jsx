import React, { useEffect } from "react";
import Navbar from "../Components/MainPageComponent/Navbar";
import NavbarContent from "../Components/MainPageComponent/NavbarContent";
import MainTitle from "../Components/MainPageComponent/MainTitle";
import SixFlexImages from "../Components/MainPageComponent/SixFlexImages";
import OfficeFurnitureCard from "../Components/MainPageComponent/OfficeFurnitureCard";
import RequestSection from "../Components/MainPageComponent/RequestSection";
import MakesUsDiff from "../Components/MainPageComponent/MakeUsDiff";
import BestSeller from "../Components/MainPageComponent/BestSeller";
import OfficeSlider from "../Components/Slider/OfficeSlider";
import ExecutiveSlider from "../Components/Slider/ExecutiveSlider";
import ConferenceSlider from "../Components/Slider/ConferenceSlider";
import ReceptionSlider from "../Components/Slider/ReceptionSlider";
import MainCards from "../Components/MainPageComponent/MainCards";
import Banner from "../Components/MainPageComponent/Banner";
import AccordianList from "../Components/MainPageComponent/AccordianList";
import Map from "../Components/MAP/Map";
import CustomerReview from "../Components/MainPageComponent/CustomerReview";
import VisitShowRoom from "../Components/MAP/VisitShowRoom";
import Footer from "../Components/MainPageComponent/Footer";
import ScrollToTop from "../Components/OtherComponent/ScrollToTop";
import AuthModal from "./Login";
import { useModal } from "../Context/ModalProvider";

const Home = () => {
  const { isModalOpen, handleCloseModal } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollToTop />
      {/* Pass handleLoginClick to Navbar */}
      <Navbar />
      <div className="bg-[#F9F9F9]">
        <NavbarContent />
        <MainTitle />
        <SixFlexImages />
        <OfficeFurnitureCard />
        <RequestSection />
        <MakesUsDiff />
        <div className="bg-[#F3F3F3]">
          <BestSeller />
          {/* All Sliders */}
          <OfficeSlider />
          <ExecutiveSlider />
          <ConferenceSlider />
          <ReceptionSlider />
          {/* Map */}
          <Map />
          <MainCards />
          <Banner />
          <CustomerReview />
          <VisitShowRoom />
          <AccordianList />
        </div>
        <Footer />
      </div>
      {/* Render the modal when isModalOpen is true */}
      {isModalOpen && <AuthModal onClose={handleCloseModal} />}
    </>
  );
};

export default Home;
