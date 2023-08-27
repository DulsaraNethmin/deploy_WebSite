import React, { useEffect } from "react";
import trucksImg from "../assets/Group 83.png";
import PrimaryButton from "./PrimaryButton";
import WhyChooseUsCard from "./WhyChooseUsCard";
import AOS from "aos";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);


  return (
    <div className="w-full lg:flex lg:flex-row lg:justify-between flex-col px-10 lg:px-24 lg:pt-40 lg:pb-36 py-16 lg:bg-dot-Patern bg-no-repeat bg-cover">
      <div className="flex flex-col w-full lg:w-5/12 mb-24">
        <text className="font-ExpletusSans-BoldItalic text-xl text-lotus-red">
          Who we are...
        </text>
        <div className="flex flex-col mb-6 xl:text-5xl text-3xl font-Montserrat">
          <text className="font-Inter-SemiBold">Fast & Reliable</text>
          <text className="font-Inter-SemiBold ml-28">Transport</text>
          <text className="font-Inter-SemiBold ml-48">Services</text>
          <div className="w-12 h-2 bg-lotus-red ml-48"></div>
        </div>
        <text className="pr-4 text-justify mb-2">
          We, Sen Transport is the third party that links both ends of pick up &
          delivery.
        </text>
        <text className="pr-4 text-justify mb-6">
          Sen is equipped with sophisticated features, providing you efficient &
          innovative delivery solutions.
        </text>
        <text className="font-ExpletusSans-BoldItalic text-xl text-lotus-red">
          What we offer...
        </text>
        <text className="pr-4 text-justify mt-4">
          Since your choice is our priority, Sen operations are simplified for
          easy access. We provide safe & efficient deliveries leaving nothing
          behind for you to worry about.
        </text>
        <div className="my-8 hidden lg:flex">
          <div>
            <WhyChooseUsCard icon="Assured safety" title="Assured safety" />
            <WhyChooseUsCard
              icon="Affordable prices"
              title="Affordable prices"
            />
            <WhyChooseUsCard
              icon="Pre-planned deliveries"
              title="Pre-planned deliveries"
            />
          </div>
          <div>
            <WhyChooseUsCard
              icon="Emergency services"
              title="Emergency services"
            />
            <WhyChooseUsCard
              icon="Real-time tracking"
              title="Real-time tracking"
            />
            <WhyChooseUsCard icon="Zero hassle" title="Zero hassle" />
          </div>
        </div>
        <div className="my-8 lg:hidden flex flex-col justify-center items-center">
          <WhyChooseUsCard icon="Assured safety" title="Assured safety" />
          <WhyChooseUsCard icon="Affordable prices" title="Affordable prices" />
          <WhyChooseUsCard
            icon="Pre-planned deliveries"
            title="Pre-planned deliveries"
          />
          <WhyChooseUsCard
            icon="Emergency services"
            title="Emergency services"
          />
          <WhyChooseUsCard
            icon="Real-time tracking"
            title="Real-time tracking"
          />
          <WhyChooseUsCard icon="Zero hassle" title="Zero hassle" />
        </div>
        <PrimaryButton title={"More about us"} link={"/about"} />
      </div>
      <div className="w-full lg:w-5/12 flex justify-center">
        <img src={trucksImg} height="100%" />
      </div>
    </div>
  );
}

export default WhyChooseUs;
