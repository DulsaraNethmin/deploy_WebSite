import React, { useEffect } from "react";
import creaDImage from "../assets/creaDImage.jpg";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

function CreativeD_CareersComponent() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="w-full flex lg:flex-row flex-col justify-between lg:px-24 px-10">
      <div className="flex flex-col lg:w-6/12 w-full lg:my-40 my-24">
        <div className="lg:text-5xl text-3xl font-bold">
          <text className="text-white">Business Plan and </text>
          <text className="text-lotus-red">Market Positioning</text>
        </div>
        <div className="mt-6 lg:hidden">
          <div className="">
            <img src={creaDImage} width="350" height="100%" />
          </div>
        </div>
        <div className="lg:text-3xl text-xl font-bold lg:mt-12 mt-6">
          <text className="text-white">Ready to make an impact?</text>
        </div>
        <text className="mt-4 text-gray-300">
          SEN Transport Australian-based transport company is seeking a skilled and experienced Business Plan and Market Positioning Writer to join our team. As a writer in our tech transport business, you will be responsible for creating a comprehensive business plan and developing a strong market positioning strategy. This role requires a deep understanding of business management principles and experience in writing business plans for technology-based ventures.
        </text>
        <div className="lg:text-3xl text-xl font-bold lg:mt-12 mt-6">
          <text className="text-white">Responsibilities</text>
        </div>
        <div className="text-gray-300 flex flex-col justify-start items-start">
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Conduct market research to gather relevant data and insights.
              </text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Develop a detailed business plan for our tech transport business, including market analysis, financial projections, and growth strategies.
              </text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Create a strong market positioning strategy to differentiate our business from competitors.
              </text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Collaborate with internal teams and stakeholders to gather input and refine the business plan.
              </text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Ensure the business plan aligns with the company's goals and objectives.
              </text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Stay updated with industry trends and best practices related to business planning and market positioning.
              </text>
            </div>
          </div>
        </div>

        <div className="lg:text-3xl text-xl font-bold lg:mt-12 mt-6">
          <text className="text-white">About You</text>
        </div>
        <text className="mt-4 text-gray-300">
          To succeed in this role, you will need to have the following
          requirements.
        </text>
        <div className="lg:text-3xl text-xl font-bold lg:mt-12 mt-6">
          <text className="text-white">Requirements</text>
        </div>
        <div className="text-gray-300 flex flex-col justify-start items-start">
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Bachelor's degree in Business Management or a related field.
              </text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Minimum of 2 years of experience in business plan writing and market positioning.
              </text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Strong analytical and research skills.
              </text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Excellent written and verbal communication abilities.
              </text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Proficiency in using business planning tools and software.
              </text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Attention to detail and ability to work independently.
              </text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Knowledge of the tech transport industry is a plus.
              </text>
            </div>
          </div>
        </div>

        <div className="lg:text-3xl text-xl font-bold lg:mt-12 mt-6">
          <text className="text-white">We offer</text>
        </div>
        <div className="text-gray-300 flex flex-col justify-start items-start">
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">Task-wise payment.</text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Opportunities for career growth and promotions.
              </text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Opportunities for career growth and promotions.
              </text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">Work for an international company.</text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Strongly encourage talented university undergraduates to apply
                and join us on our journey to build a dynamic and resilient team
                for the long term. Your potential contributions to us would be
                invaluable, and we would be thrilled to have you as part of our
                organization.
              </text>
            </div>
          </div>
          <div className="mt-4">
            <text className="text-xl">
              If you are a motivated and passionate Business Plan and Market Positioning with the
              required skills and experience, we encourage you to apply for this
              exciting opportunity. Please submit your CV to
            </text>
            <text className="text-xl text-blue-600 hover:cursor-pointer">
              {" "}
              careers@sentransport.com.au
            </text>
            <text className="text-xl">
              {" "}
              outlining your qualifications and experience. We look forward to
              hearing from you!
            </text>
          </div>
        </div>
      </div>
      <div className="mt-40 w-4/12 lg:inline hidden">
        <div className="">
          <img src={creaDImage} width="350" height="100%" />
        </div>
        <div className="flex flex-row items-center mt-8">
          <FontAwesomeIcon icon={faClock} color="#e44650" size="xl" />
          <div className="flex flex-col ml-6">
            <text className="text-gray-300">POSITION TYPE</text>
            <text className="text-white font-bold">Part time</text>
          </div>
        </div>
        <div className="flex flex-row items-center mt-8">
          <FontAwesomeIcon icon={faLocationDot} color="#e44650" size="2xl" />
          <div className="flex flex-col ml-6">
            <text className="text-gray-300">MODE</text>
            <text className="text-white font-bold">Remote</text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreativeD_CareersComponent;
