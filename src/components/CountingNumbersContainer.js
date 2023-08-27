import React from "react";
import bgPatern from "../assets/vecteezy_halftone-australia-map_7d119415 1.png";
import wherehouseImage from "../assets/stock-photo-freight-transportation-and-logistic-warehouse-forklift-driver-loading-the-shipment-pallet-into-a-1092496493.jpg";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function CountingNumbersContainer() {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between ">
      <div className="hidden lg:inline bg-auto lg:max-w-3/7 mx-10 lg:m-0 mb-24">
        <img
          className="object-cover h-128"
          width="1165"
          height=""
          src={wherehouseImage}
        />
      </div>
      <div className="w-4/7 h-128 bg-secondary-blue flex flex-col justify-center items-center lg:m-0">
        {/* <img src={bgPatern} className="absolute" width="500" /> */}
        <div className="mx-24 my-10">
          <div className="flex flex-col items-start lg:w-full">
            <text className="font-ExpletusSans-BoldItalic text-xl text-lotus-red">
              Why Choose Us...
            </text>
            <div className="flex justify-center flex-col mb-6 lg:text-5xl text-3xl">
              <text className="font-Inter-SemiBold text-white ">Expert in</text>
              <text className="font-Inter-SemiBold text-white ml-20">
                Logistics Services
              </text>
              <div className="w-12 h-2 bg-lotus-red ml-20"></div>
            </div>
            <text className="text-white text-justify lg:text-base text-xs">
              We are providing services using a new & more advanced technology
              platform, along with safety & trackability features that enable
              us to hold the spotlight upon us among the competitors.
            </text>
            <text className="text-white text-justify lg:text-base text-xs mt-4">
              Let the numbers do the talking...
            </text>
          </div>

          <div className="mt-10 text-white">
            <div className="flex flex-col justify-center items-center border-b pb-6 border-b-slate-300">
              <text className="text-7xl font-bold">20M</text>
              <text className="font-semibold">Kms Travelled</text>
            </div>
            <div className="flex flex-row justify-around">
              <div className="flex flex-col items-center m-6 w-32">
                <div className="text-4xl font-bold">
                  <CountUp
                    start={800}
                    end={877}
                    duration={1.5}
                    enableScrollSpy={true}
                  >
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <text>+</text>
                </div>
                  <text className="font-semibold text-center">Carriers Completed</text>
              </div>
              <div className="flex flex-col items-center m-6 w-32">
                <div className="text-4xl font-bold">
                  <CountUp start={70.0} end={98.5} duration={1.5}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <text>%</text>
                </div>
                <text className="font-semibold text-center">On-Time Deiliverd</text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden bg-auto lg:max-w-2xl mb-10">
        <img
          className="object-contain"
          width="1250"
          height=""
          src={wherehouseImage}
        />
      </div>
    </div>
  );
}

export default CountingNumbersContainer;
