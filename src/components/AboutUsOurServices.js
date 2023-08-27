import React, { useEffect } from "react";
import aboutUsBgImage from "../assets/bgImage about us services.png";
import aboutUsBgDesign from "../assets/design about us services.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";

function AboutUsOurServices() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="w-full flex lg:flex-row flex-col justify-between lg:mt-36 mt-16 lg:px-24">
      <div className="lg:w-4/12 lg:inline hidden w-full ">
        <img src={aboutUsBgImage} width="600" height="100%" className="" />
      </div>
      <div className="flex flex-col lg:w-5/12 w-full lg:m-10 lg:mb-0 mb-16 text-justify px-10 lg:px-0">
        <text className="font-ExpletusSans-BoldItalic text-lg text-lotus-red">
          How we evolved...
        </text>
        <div className="lg:text-5xl text-3xl font-bold">
          <text>The Story </text>
          {/* <text className="text-lotus-red">Transporterium </text>
          <text>Company</text> */}
        </div>
        <text className="font-bold mt-6">
          Launched in 2017 , Sen Transport has come a long way so far
          eliminating inefficiencies, embracing success.
        </text>
        <text className=" mt-4">
          The foundation for the company was laid upon an idea Neranjan
          Senanayake came up with, in order to fulfil the gaps that were
          identified in the transportation industry. He believed that an
          effective delivery service in the highly congested areas in Melbourne
          would be an ideal opportunity for himself to excel in, in business
          perspective. Besides, the knowledge & experience he bears, backed his
          decision to start-up the business. His self-confidence & proper
          understanding of the facts & features of the transportation industry
          were key values that aided in starting up the company.
        </text>
        <div className="mt-6 ml-4 flex flex-row justify-center items-center ">
          <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
          <div className="ml-6">
            <text className=" font-semibold">
              Intially it was limited to medical supplies courier service, and
              later on it expanded to cater the industry requirements. Sen
              Transport has now expanded its services to Sydney as well, while
              maintaining financial growth & stability over the years.
            </text>
          </div>
        </div>
        {/* <div className="mt-4 ml-4 flex flex-row justify-center items-center">
          <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
          <div className="ml-6">
            <text className=" font-semibold ">
              Trumpeter ropefish bonito roughy cobbler dogteeth tetra
              orangespine unicorn fish flounder bobtail.
            </text>
          </div>
        </div> */}
      </div>
      <div className="inline lg:hidden w-full">
        <img src={aboutUsBgImage} width="full" height="100%" className="" />
      </div>
    </div>
  );
}

export default AboutUsOurServices;
