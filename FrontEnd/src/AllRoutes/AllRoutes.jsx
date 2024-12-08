import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Gallery from "../Pages/Gallery";
import Blog from "../Pages/Blog";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";

// desk import files
import ExecutiveDesk from "../Pages/Product-Category/Desk/Executive/ExecutiveDesk";
import EconomicDesk from "../Pages/Product-Category/Desk/Economic/EconomicDesk";
import ReceptionDesk from "../Pages/Product-Category/Desk/Reception/ReceptionDesk";
import OfficeDesk from "../Pages/Product-Category/Desk/Office/OfficeDesk";
import ConferenceDesk from "../Pages/Product-Category/Desk/Conference/ConferenceDesk";
import CoffeeDesk from "../Pages/Product-Category/Desk/CoffeeTable/CoffeeDesk";

// chairs import files
import ExecutiveChair from "../Pages/Product-Category/Chair/Executive/ExecutiveChair";
import ManagerChair from "../Pages/Product-Category/Chair/Manager/ManagerChair";
import MeetingChair from "../Pages/Product-Category/Chair/Meeting/MeetingChair";
import OperatorChair from "../Pages/Product-Category/Chair/Operator/OperatorChair";

// storage import files
import FilingStorage from "../Pages/Product-Category/Storage/Filing Cabinet/FilingStorage";
import PedestalStorage from "../Pages/Product-Category/Storage/Pedestal/PedestalStorage";
import DisplayStorage from "../Pages/Product-Category/Storage/Display Cabinet/DisplayStorage";

// seating import files
import OfficeSofaSeating from "../Pages/Product-Category/Seating/Office Sofa/OfficeSofaSeating";
import LoungeSeating from "../Pages/Product-Category/Seating/Lounge/LoungeSeating";

// flooring import files
import CarpetFlooring from "../Pages/Product-Category/Flooring/Carpet/CarpetFlooring";
import LaminateFlooring from "../Pages/Product-Category/Flooring/Laminate/LaminateFlooring";
import ExecutiveDeskGallery from "../Pages/Gallery-SubPages/ExecutiveDeskGallery";
import WorkstationGallery from "../Pages/Gallery-SubPages/WorkstationGallery";
import ConferenceGallery from "../Pages/Gallery-SubPages/ConferenceGallery";
import ReceptionGallery from "../Pages/Gallery-SubPages/ReceptionGallery";
import StorageGallery from "../Pages/Gallery-SubPages/StorageGallery";
import ProductDetailPage1 from "../Pages/ProductDetailPages/ProductDetail1";
import ProductDetailPage2 from "../Pages/ProductDetailPages/ProductDetail2";
import ProductDetailPage3 from "../Pages/ProductDetailPages/ProductDetail3";
import ProductDetailPage4 from "../Pages/ProductDetailPages/ProductDetail4";
import ProductDetailPage5 from "../Pages/ProductDetailPages/ProductDetail5";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* This is for ALL Desks */}
        <Route
          path="/product/desk/:category/:productId"
          element={<ProductDetailPage1 />}
        />
        {/* This is for ALL Chairs */}
        <Route
          path="/product/chair/:category/:productId"
          element={<ProductDetailPage2 />}
        />
        {/* This is for ALL Storages */}
        <Route
          path="/product/storage/:category/:productId"
          element={<ProductDetailPage3 />}
        />
        {/* This is for ALL Seating */}
        <Route
          path="/product/seating/:category/:productId"
          element={<ProductDetailPage4 />}
        />
        {/* This is for ALL Flooring */}
        <Route
          path="/product/flooring/:category/:productId"
          element={<ProductDetailPage5 />}
        />

        {/* NavbarContent Pages ProductPages ALL */}
        {/************************************** DESK PAGES ALL *******************************************/}
        <Route
          path="/product-category/desks/executive-desk"
          element={<ExecutiveDesk />}
        />
        <Route
          path="/product-category/desks/economic-desk"
          element={<EconomicDesk />}
        />
        <Route
          path="/product-category/desks/reception-desk"
          element={<ReceptionDesk />}
        />
        <Route
          path="/product-category/desks/office-desk"
          element={<OfficeDesk />}
        />
        <Route
          path="/product-category/desks/conference-desk"
          element={<ConferenceDesk />}
        />
        <Route
          path="/product-category/desks/coffeetable-desk"
          element={<CoffeeDesk />}
        />

        {/********************************* CHAIR PAGES ALL *****************************************/}
        <Route
          path="/product-category/chairs/executive-chair"
          element={<ExecutiveChair />}
        />
        <Route
          path="/product-category/chairs/manager-chair"
          element={<ManagerChair />}
        />
        <Route
          path="/product-category/chairs/meeting-chair"
          element={<MeetingChair />}
        />
        <Route
          path="/product-category/chairs/operator-chair"
          element={<OperatorChair />}
        />

        {/******************************************* STORAGE PAGES ALL ****************************************/}
        <Route
          path="/product-category/storage/filing-cabinet"
          element={<FilingStorage />}
        />
        <Route
          path="/product-category/storage/pedestal"
          element={<PedestalStorage />}
        />
        <Route
          path="/product-category/storage/display-cabinet"
          element={<DisplayStorage />}
        />

        {/********************************************* SEATING PAGES ALL ********************************************/}
        <Route
          path="/product-category/seating/sofa"
          element={<OfficeSofaSeating />}
        />
        <Route
          path="/product-category/seating/lounge"
          element={<LoungeSeating />}
        />

        {/********************************************** FLOORING PAGES ALL ***************************************/}
        <Route
          path="/product-category/flooring/carpet"
          element={<CarpetFlooring />}
        />
        <Route
          path="/product-category/flooring/laminate"
          element={<LaminateFlooring />}
        />

        {/* GALLERY SUB PAGES  */}

        <Route
          path="/gallery/executive-desk-gallery"
          element={<ExecutiveDeskGallery />}
        />
        <Route
          path="/gallery/workstation-gallery"
          element={<WorkstationGallery />}
        />
        <Route
          path="/gallery/conference-gallery"
          element={<ConferenceGallery />}
        />
        <Route
          path="/gallery/reception-desk-gallery"
          element={<ReceptionGallery />}
        />
        <Route path="/gallery/storage-gallery" element={<StorageGallery />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
