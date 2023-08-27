import React, { useRef, useEffect } from "react";
import NavBar from "../components/NavBar";
import NavBarNew from "../components/NavBarNew";
import bgImage from "../assets/Group 1000001832.jpg";
import Footer from "../components/Footer/Footer";
import CurriorSenCurrior from "../components/CurriorSenCurrior";
import CalculatorHome from "../components/CalculatorHome";
import { Helmet } from "react-helmet-async";

function OurServives() {
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
        <title>Sen Courier</title>
        <meta
          name="description"
          content="Delivering urgent items on demand with zero hassle."
        />
        <link rel="canonical" href="/ourservices" />
      </Helmet>
      <div className="w-full h-screen">
        <div className="w-full h-screen">
          <img src={bgImage} className="absolute w-full h-full object-cover" />
          <div className="w-full h-screen absolute flex flex-col justify-between">
            <div className="flex items-start flex-col mt-36 lg:ml-24 ml-20">
              <text className=" text-white my-2 lg:text-5xl text-4xl font-FamiljenGbi">
                On Demand Delivery
              </text>
              <div className="lg:w-12 w-8 h-2 bg-lotus-red"></div>
            </div>
            <div className="w-full py-4 bg-lotus-red justify-center flex">
              <text className="text-white lg:text-2xl font-semibold">
                SAVE UP TO 40% ON YOUR BUSINESS
              </text>
            </div>
          </div>
          <div className="abolute">
            <NavBarNew onClickGetQuote={handleClick}/>
          </div>
        </div>
        <CurriorSenCurrior />
        <div ref={ref}>
          <CalculatorHome />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default OurServives;
