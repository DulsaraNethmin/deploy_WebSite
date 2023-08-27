import React, { useRef, useEffect } from "react";
import NavBar from "../components/NavBar";
import NavBarNew from "../components/NavBarNew";
import bgImage from "../assets/stock-photo-aerial-view-of-a-logistics-park-with-warehouse-loading-hub-and-many-semi-trucks-with-cargo-1844279029.jpg";
import WhyWeDoSenConsolidatedHub from "../components/WhyWeDoSenConsolidatedHub";
import Footer from "../components/Footer/Footer";
import CalculatorHome from "../components/CalculatorHome";
import { Helmet } from "react-helmet-async";

function SenConsolidatedHubPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Helmet>
        <title>Sen Consolidated Hub</title>
        <meta
          name="description"
          content="Sen coordinates & manages all your deliveries by safely assembling your packages at our warehouse in Sydney until they proceed for transportation."
        />
        <link rel="canonical" href="/consolidatedhub" />
      </Helmet>
      <div className="w-full h-screen">
        <div className="w-full h-screen">
          <img src={bgImage} className="absolute w-full h-full object-cover" />
          <div className="absolute h-full w-full bg-black opacity-40"></div>
          <div className="w-full h-screen absolute flex flex-col justify-between">
            <div className="flex items-start flex-col mt-36 lg:ml-24 ml-20">
              <text className=" text-white my-2 lg:text-5xl text-4xl font-FamiljenGbi">
                Sen Consolidated
              </text>
              <text className=" text-white my-2 lg:text-5xl text-4xl font-FamiljenGbi ml-6 lg:ml-0">
                Hub
              </text>
              <div className="lg:w-12 w-8 h-2 bg-lotus-red"></div>
            </div>
            <div className="w-full py-4 bg-secondary-blue justify-center flex">
              <text className="text-white lg:text-2xl font-semibold">
                SAVE UP TO 40% ON YOUR BUSINESS
              </text>
            </div>
          </div>
          <div className="abolute">
            <NavBarNew onClickGetQuote={handleClick}/>
          </div>
        </div>
        <WhyWeDoSenConsolidatedHub />
        <div ref={ref}>
          <CalculatorHome />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SenConsolidatedHubPage;
