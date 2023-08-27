import React from "react";
import BGImageOne from "../assets/Rectangle 30.png";
import BGImageTwo from "../assets/Rectangle 31.png";
import WhyChooseUsCard from "./WhyChooseUsCard";

function WhyWeDoSenConsolidatedHub() {
  return (
    <div className="w-full flex lg:flex-row flex-col lg:justify-between lg:py-28 bg-dot-Patern bg-no-repeat bg-cover pt-28 lg:px-24">
      <div className="flex flex-col lg:w-5/12 w-full px-10 lg:px-0">
        <text className="font-ExpletusSans-BoldItalic text-lg text-lotus-red">
          Who we do
        </text>
        <div className="lg:text-5xl text-3xl font-bold">
          <div>
            <text>Primary </text>
            <text className="text-lotus-red">Connect </text>
            <text>to </text>
          </div>
          <div>
            <text>Unique </text>
            <text className="text-lotus-red">Opportunity </text>
            <text>for</text>
          </div>
          <div>
            <text className="text-lotus-red">Small </text>
            <text>Suppliers</text>
          </div>
        </div>
        <text className="font-bold text-sm mt-6  text-justify">
          Sen coordinates & manages all your deliveries by safely assembling
          your packages at our warehouse in Sydney until they proceed for
          transportation. Large & more versatile fleet of vehicles are
          available to fulfil your needs. We make sure you receive a flexible &
          effective service at an affordable cost. All the deliveries are pre-
          planned to assure hassle free services.
        </text>
        {/* <text className="font-sm text-sm mt-6 text-justify">
          Rainbowfish powen paddlefish brotula Arctic char zebra bullhead shark.
          Yellowhead jawfish gianttail temperate ocean-bass Atlantic eel river
          stingray skilfish. Flounder.
        </text>
        <text className="font-sm text-sm mt-6  text-justify">
          Rainbowfish powen paddlefish brotula Arctic char zebra bullhead shark.
          Yellowhead jawfish gianttail temperate ocean-bass Atlantic eel river
          stingray skilfish. Flounder.
        </text>
        <text className="font-sm text-sm mt-6  text-justify">
          Rainbowfish powen paddlefish brotula Arctic char zebra bullhead shark.
          Yellowhead jawfish gianttail temperate ocean-bass Atlantic eel river
          stingray skilfish. Flounder.
        </text>
        <text className="font-sm text-sm mt-6  text-justify">
          Rainbowfish powen paddlefish brotula Arctic char zebra bullhead shark.
          Yellowhead jawfish gianttail temperate ocean-bass Atlantic eel river
          stingray skilfish. Flounder.
        </text> */}
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
      </div>

      <div className="lg:w-5/12 w-full flex items-center justify-center mt-16 lg:mt-0 rounded-md">
        <img src={BGImageTwo} width="700" height="100%" />
      </div>
    </div>
  );
}

export default WhyWeDoSenConsolidatedHub;
