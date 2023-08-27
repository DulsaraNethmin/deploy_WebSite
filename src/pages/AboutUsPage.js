import React, { useRef, useEffect } from "react";
import NavBarNew from "../components/NavBarNew";
import bgImage from "../assets/pexels-elevate-1267338 1.png";
import AboutUsOurServices from "../components/AboutUsOurServices";
import MissionOurServices from "../components/MissionOurServices";
import Footer from "../components/Footer/Footer";
import AchivementAboutUs from "../components/AchivementAboutUs";
import HistoryAboutUs from "../components/HistoryAboutUs";
import CalculatorHome from "../components/CalculatorHome";
import { Helmet } from "react-helmet-async";

function AboutUs() {
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
        <title>About Us - Sen Transport</title>
        <meta
          name="description"
          content="Launched in 2017 , Sen Transport has come a long way so far eliminating inefficiencies, embracing success. The foundation for the company was laid upon an idea Neranjan Senanayake came up with, in order to fulfil the gaps that were identified in the transportation industry."
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div className="w-full h-screen">
        <div className="w-full h-screen">
          <img src={bgImage} className="absolute w-full h-full object-cover" />
          <div className="absolute h-full w-full bg-black opacity-40"></div>
          <div className="absolute">
            <div className="flex items-start flex-col mt-36 lg:ml-24 ml-20">
              <text className=" text-white my-2 lg:text-5xl text-4xl font-FamiljenGbi">
                About Sen
              </text>
              <text className=" text-white my-2 lg:text-5xl text-4xl font-FamiljenGbi ml-6 lg:ml-20">
                Transport
              </text>
              <div className="lg:w-12 w-8 h-2 bg-lotus-red lg:ml-20"></div>
            </div>
          </div>
          <div className="abolute">
            <NavBarNew onClickGetQuote={handleClick}/>
          </div>
        </div>
        <AboutUsOurServices />
        <MissionOurServices />
        <AchivementAboutUs />
        <HistoryAboutUs />
        <div ref={ref}>
          <CalculatorHome />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
