import React, { useRef, useEffect } from "react";
import NavBarNew from "../components/NavBarNew";
import Typewriter from "typewriter-effect";
import WhyChooseUs from "../components/WhyChooseUs";
import CountingNumbersContainer from "../components/CountingNumbersContainer";
import Footer from "../components/Footer/Footer";
import HowWeWork from "../components/HowWeWork";
import Testamonial from "../components/Testamonial";
import DownloadAppsHome from "../components/DownloadAppsHome";
import CalculatorHome from "../components/CalculatorHome";
import bgHomeImage from "../assets/bgHomeImage.jpg";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function sendEmail() {
    const templateParams = {
      name: "James",
      notes: "Check this out!",
    };
    emailjs
      .send(
        "service_al4c9la",
        "template_7l5lgfo",
        templateParams,
        "pqP_Kk13ylAANuEA6"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  }

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Home - Sen Transport</title>
        <meta
          name="description"
          content="We, Sen Transport is the third party that links both ends of pick up & delivery.
          Sen is equipped with sophisticated features, providing you efficient & innovative delivery solutions. Since your choice is our priority, Sen operations are simplified for easy access. We provide safe & efficient deliveries leaving nothing behind for you to worry about."
        />
        <link rel="canonical" href="/home" />
      </Helmet>
      <div className=" w-full h-screen">
        <div className="relative w-full h-screen ">
          {/* <video
            className="object-cover w-full h-full absolute "
            src="https://www.shutterstock.com/shutterstock/videos/1062225952/preview/stock-footage-logistics-park-with-a-warehouse-loading-hub-semi-trailers-trucks-standing-at-the-ramps-for.webm"
            autoPlay
            loop
            muted
          /> */}
          <img
            src={bgHomeImage}
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute h-full w-full bg-gradient-to-r from-black" />
          <div className="absolute w-full h-full">
            <div className="w-full">
              <div className="flex items-start flex-col mt-40 sm:mt-72 ml-10 sm:ml-24">
                <div className="text-3xl font-FamiljenGbi sm:text-5xl">
                  <text className=" text-white my-1">We are on the move </text>
                  <div className="flex flex-row">
                    <text className=" text-white my-1">ensuring, </text>
                    <div className="text-lotus-red my-1">
                      <Typewriter
                        options={{
                          strings: [
                            " Quick",
                            " Safe",
                            " Reliable",
                            " Affordable",
                            " Hassle-free",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </div>
                  </div>
                  <text className=" text-white my-1">Deliveries.</text>
                </div>
              </div>
            </div>
            {/* <div className="ml-10 mt-4 sm:ml-24">
            <PrimaryButton title={""} onClick={sendEmail} />
          </div> */}
            <div className="w-full">
              <div className="mt-10 md:mt-36 lg:mt-48 2xl:mt-96 flex lg:flex-row flex-col justify-between lg:mx-24 mx-10">
                <NavLink to="/ourservices">
                  <div className="mt-10 lg:mt-0 flex flex-col items-start border-l px-6 lg:py-2  hover:text-white text-lotus-red hover:transition-all transition hover:scale-105 hover:border-lotus-red hover:cursor-pointer">
                    {/* <text className="font-ExpletusSans-BoldItalic text-white">
                Sen
              </text> */}
                    <text className="lg:text-3xl text-2xl font-medium font-Montserrat">
                      On Demand
                    </text>
                    <text className="lg:text-3xl text-2xl font-medium font-Montserrat">
                      Delivery
                    </text>
                  </div>
                </NavLink>
                <NavLink to="/localdis">
                  <div className="mt-10 lg:mt-0 flex flex-col items-start border-l px-6 lg:py-2  hover:text-white text-lotus-red hover:transition-all transition hover:scale-105 hover:border-lotus-red hover:cursor-pointer">
                    {/* <text className="font-ExpletusSans-BoldItalic text-white">
                Sen
              </text> */}
                    <text className="lg:text-3xl text-2xl font-medium font-Montserrat">
                      Local
                    </text>
                    <text className="lg:text-3xl text-2xl font-medium font-Montserrat">
                      Distribution
                    </text>
                  </div>
                </NavLink>
                <NavLink to="/consolidatedhub">
                  <div className="mt-10 lg:mt-0 flex flex-col items-start border-l px-6 lg:py-2  hover:text-white text-lotus-red hover:transition-all transition hover:scale-105 hover:border-lotus-red hover:cursor-pointer">
                    {/* <text className="font-ExpletusSans-BoldItalic text-white">
                Sen
              </text> */}
                    <text className="lg:text-3xl text-2xl font-medium font-Montserrat">
                      Consolidated
                    </text>
                    <text className="lg:text-3xl text-2xl  font-medium font-Montserrat">
                      Hub
                    </text>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="abolute">
            <NavBarNew onClickGetQuote={handleClick} />
          </div>
        </div>

        <WhyChooseUs />
        <CountingNumbersContainer />
        {/* <HowWeWork /> */}
        <Testamonial />
        <DownloadAppsHome />
        
        <div ref={ref}>
          <CalculatorHome />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
