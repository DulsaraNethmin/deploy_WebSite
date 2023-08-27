import React, { useEffect } from "react";
import devImage from "../assets/devImage.jpg";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

function FullStackCareersComponent() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="w-full flex lg:flex-row flex-col justify-between lg:px-24 px-10">
      <div className="flex flex-col lg:w-6/12 w-full lg:my-40 my-24">
        <div className="lg:text-5xl text-3xl font-bold">
          <text className="text-white">Full Stack </text>
          <text className="text-lotus-red">Developer</text>
        </div>
        <div className="mt-6 lg:hidden">
          <div className="">
            <img src={devImage} width="350" height="100%" />
          </div>
        </div>
        <div className="lg:text-3xl text-xl font-bold lg:mt-12 mt-6">
          <text className="text-white">Ready to make an impact?</text>
        </div>
        <text className="mt-4 text-gray-300">
          SEN Transport Australian-based transport company is seeking a talented
          and experienced Full Stack Developer - Web to join our team part-time.
          As a Full Stack Developer, you will be responsible for developing and
          maintaining web applications using technologies such as React,
          Node.js, MySQL, and Firebase. You will collaborate with the product
          and design teams to ensure the successful delivery of our products and
          participate in agile development processes such as sprint planning,
          daily stand-ups, and retrospectives.
        </text>
        <div className="lg:text-3xl text-xl font-bold lg:mt-12 mt-6">
          <text className="text-white">Responsibilities</text>
        </div>
        <div className="text-gray-300 flex flex-col justify-start items-start">
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Develop and maintain web applications using React, Node.js,
                MySQL, and Firebase technologies.
              </text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Collaborate with the product and design teams to ensure the
                successful delivery of our products.
              </text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Ensure code quality and maintainability by writing clean,
                well-designed code and performing code reviews.
              </text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Participate in agile development processes such as sprint
                planning, daily stand-ups, and retrospectives.
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
                Proficiency in React, Node.js, MySQL, Firebase, and other
                relevant technologies.
              </text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Experience with agile development processes.
              </text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Strong problem-solving and analytical skills.
              </text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Excellent communication and collaboration skills.
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
              <text className="">A competitive hourly rate.</text>
            </div>
          </div>
          <div className="mt-4 ml-4 flex flex-row justify-center items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="">
                Part-time deployment with a minimum of 10 hours per week.
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
              If you are a motivated and passionate Web Developer with the
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
          <img src={devImage} width="350" height="100%" />
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

export default FullStackCareersComponent;
