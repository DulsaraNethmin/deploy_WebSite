import React, { useRef, useEffect } from "react";
import NavBarNew from "../components/NavBarNew";
import bgImage from "../assets/teambg.png";
import Footer from "../components/Footer/Footer";
import OurTeamTeam from "../components/OurTeamTeam";
import ResponsibleOurTeam from "../components/ResponsibleOurTeam";
import CalculatorHome from "../components/CalculatorHome";
import { Helmet } from "react-helmet-async";

function Team() {
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
        <title>Team - Sen Transport</title>
        <meta
          name="description"
          content="Welcome to our Meet Our Team page! We are a team of dedicated professionals who are committed to providing our clients with exceptional transportation services. With years of experience in the industry, we have built a reputation for excellence, safety, and dependability."
        />
        <link rel="canonical" href="/team" />
      </Helmet>
      <div className="w-full h-screen">
        <div className="w-full h-screen">
          <img src={bgImage} className="absolute w-full h-full object-cover" />
          <div className="absolute h-full w-full bg-black opacity-40"></div>
          <div className="absolute">
            <div className="flex items-start flex-col mt-36 lg:ml-24 ml-20">
              <text className=" text-white my-2 lg:text-5xl text-4xl font-FamiljenGbi">
                Team
              </text>
              <text className=" text-white my-2 lg:text-5xl text-4xl font-FamiljenGbi ml-6 lg:ml-20">
                SEN Transport
              </text>
              <div className="lg:w-12 w-8 h-2 bg-lotus-red lg:ml-20"></div>
            </div>
          </div>
          <div className="abolute">
            <NavBarNew onClickGetQuote={handleClick}/>
          </div>
        </div>

        <OurTeamTeam />
        {/* <ResponsibleOurTeam /> */}
        <div ref={ref}>
          <CalculatorHome />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Team;
