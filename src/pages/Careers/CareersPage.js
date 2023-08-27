import React, { useEffect } from "react";
import NavBarNew from "../../components/NavBarNew";
import bgVideo from "../../assets/pexels-cottonbro-studio-3205626-1920x1080-25fps.jpg";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

function CareersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Careers - Sen Transport</title>
        <meta
          name="description"
          content="We're always seeking talent.
          Full Stack Developer
          Join us developing next genaration technologies on web
          Creative Designer
          Create creative UI/UX, Logo designs and Graphic designs
          "
        />
        <link rel="canonical" href="/careers" />
      </Helmet>
      <div className="w-full h-screen">
        <div className="w-full h-screen">
          <img src={bgVideo} className="object-cover w-full h-full absolute " />
          <div className="absolute h-full w-full bg-gradient-to-r from-black" />
          <div className="absolute h-full w-full bg-gradient-to-t from-black" />
          <div className="absolute">
            <div className="flex items-start flex-col mt-36 lg:ml-24 ml-20">
              <text className=" text-white my-2 lg:text-5xl text-4xl font-FamiljenGbi">
                We're always
              </text>
              <text className=" text-white my-2 lg:text-5xl text-4xl font-FamiljenGbi ml-6 lg:ml-20">
                seeking talent.
              </text>
              <div className="lg:w-12 w-8 h-2 bg-lotus-red lg:ml-20"></div>
            </div>

            <div className="lg:ml-24 ml-20 lg:mt-24 mt-8">
              <text className="text-white">WORK AT SENTRANPORT</text>
            </div>

            <div class="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl mt-4 lg:ml-24 mx-10 lg:mx-0">
              <div class="flex lg:flex-row flex-col lg:justify-between items-start">
                <div class="flex items-center lg:mb-0 mb-6">
                  <div class="flex flex-col lg:ml-3">
                    <div class="font-medium leading-none">
                      Full Stack Developer
                    </div>
                    <p class="text-sm text-gray-600 leading-none mt-1">
                      Join us developing next genaration technologies on web
                    </p>
                  </div>
                </div>
                <NavLink to="/careersfulldev">
                  <div className="">
                    <button class="flex-no-shrink bg-red-500 px-5 lg:ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">
                      Read more
                    </button>
                  </div>
                </NavLink>
              </div>
            </div>

            <div class="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl mt-10 lg:ml-24 mx-10 lg:mx-0">
              <div class="flex lg:flex-row flex-col lg:justify-between items-start">
                <div class="flex items-center lg:mb-0 mb-6">
                  <div class="flex flex-col lg:ml-3">
                    <div class="font-medium leading-none">
                    Business Plan and Market Positioning
                    </div>
                    <p class="text-sm text-gray-600 leading-none mt-1">
                    Creating a comprehensive business plan and developing a strong market positioning strategy
                    </p>
                  </div>
                </div>
                <NavLink to="/careersbusnsanls">
                  <div>
                    <button class="flex-no-shrink bg-red-500 px-5 lg:ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">
                      Read more
                    </button>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="abolute">
            <NavBarNew />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default CareersPage;
