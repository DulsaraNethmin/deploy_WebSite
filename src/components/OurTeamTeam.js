import React from "react";
import ourTeam_1 from "../assets/ourTeam_1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function OurTeamTeam() {
  return (
    <div className="w-full flex lg:flex-row flex-col justify-between lg:pt-36 lg:pb-24 mt-10 lg:mt-0 bg-dot-Patern bg-no-repeat bg-cover lg:px-24">
      <div className="lg:w-5/12 lg:inline hidden w-full">
        <img src={ourTeam_1} width="700" height="100%" className="" />
      </div>
      <div className="flex flex-col lg:w-6/12 w-full mt-24 lg:mt-0 px-10 lg:mb-0 mb-24 text-justify">
        <text className="font-ExpletusSans-BoldItalic text-lg text-lotus-red">
          Our Team
        </text>
        <div className="lg:text-5xl text-3xl font-bold">
          <text>Meet </text>
          <text className="text-lotus-red">Our </text>
          <text>Crew</text>
        </div>
        <text className=" mt-4">
          Welcome to our Meet Our Team page! We are a team of dedicated
          professionals who are committed to providing our clients with
          exceptional transportation services. With years of experience in the
          industry, we have built a reputation for excellence, safety, and
          dependability.
        </text>
        <text className=" mt-4">
          At our transport company, we understand that every client has unique
          transportation needs. That's why we offer a wide range of services to
          cater to those needs. Whether you need to transport goods or people,
          we have the expertise and resources to get the job done right.
        </text>
        <text className=" mt-4">
          Our fleet of well-maintained vehicles is equipped with the latest
          technology and safety features to ensure the safety and security of
          your cargo and passengers. Our drivers are experienced, licensed, and
          undergo regular training to maintain their skills and knowledge.
        </text>
        <text className=" mt-4">
          We take pride in providing personalized service to our clients. We
          work closely with you to understand your transportation needs and
          develop customized solutions that meet your specific requirements. Our
          commitment to excellence means that we always strive to exceed your
          expectations and deliver the highest level of service possible.
        </text>
        <text className=" mt-4">
          At our transport company, we believe in operating with integrity and
          transparency. We are fully licensed and insured, and we adhere to all
          safety regulations and industry standards. You can trust us to handle
          your transportation needs with the utmost care and professionalism.
        </text>
        <text className=" mt-4">
          We are dedicated to building long-lasting relationships with our
          clients. Our goal is to be your trusted transportation partner,
          providing you with reliable, efficient, and cost-effective solutions
          that help you achieve your business objectives.
        </text>
        <text className=" mt-4">
          Thank you for considering our transport company for your
          transportation needs. We look forward to working with you and earning
          your trust and loyalty. Please don't hesitate to contact us to learn
          more about our services or to request a quote.
        </text>
      </div>
      <div className="lg:w-4/12 inline lg:hidden w-full">
        <img src={ourTeam_1} width="500" height="100%" className="" />
      </div>
    </div>
  );
}

export default OurTeamTeam;
