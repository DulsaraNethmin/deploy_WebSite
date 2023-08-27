import React, { useRef, useEffect } from "react";
import NavBar from "../components/NavBar";
import NavBarNew from "../components/NavBarNew";
import bgImage from "../assets/colleagues-working-together-call-center-office-with-coffee.jpg";
import Footer from "../components/Footer/Footer";
import ContactUsContactUs from "../components/ContactUsContactUs";
import GoogleMapContactUs from "../components/GoogleMapContactUs";
import CalculatorHome from "../components/CalculatorHome";
import { Helmet } from "react-helmet-async";

function ContactUs() {
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
        <title>Contact US - Sen Transport</title>
        <meta
          name="description"
          content="Get In Touch, We are ready to assist you anytime, every time"
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="w-full h-screen ">
        <div className="w-full h-screen">
          <img src={bgImage} className="absolute w-full h-full object-cover" />
          <div className="absolute h-full w-full bg-black opacity-40"></div>
          <div className="absolute">
            <div className="flex items-start flex-col mt-36 lg:ml-24 ml-20">
              <text className=" text-white my-2 lg:text-5xl text-4xl font-FamiljenGbi">
                Contact Us
              </text>
              <div className="lg:w-12 w-8 h-2 bg-lotus-red"></div>
            </div>
          </div>
          <div className="abolute">
            <NavBarNew onClickGetQuote={handleClick}/>
          </div>
        </div>
        <ContactUsContactUs />
        <GoogleMapContactUs />
        <div ref={ref}>
          <CalculatorHome />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
