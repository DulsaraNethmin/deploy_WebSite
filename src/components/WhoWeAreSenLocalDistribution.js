import React from "react";
import BGImageOne from "../assets/stock-photo-freight-transportation-and-logistic-warehouse-forklift-driver-loading-the-shipment-pallet-into-a-1092496493.jpg";
import BGImageTwo from "../assets/whowearesenlocaldistributionimage2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function WhoWeAreSenLocalDistribution() {
  return (
    <div className="w-full flex lg:flex-row flex-col lg:justify-between bg-dot-Patern bg-no-repeat bg-cover lg:py-20 lg:px-24 ">
      <div className="hidden lg:inline w-full lg:w-5/12 my-20">
        <img src={BGImageOne} width="600" height="100%" className="" />
      </div>
      <div className="flex flex-col w-full lg:w-5/12 my-20 px-10">
        <text className="font-ExpletusSans-BoldItalic text-lg text-lotus-red">
          Who we are
        </text>
        <div className="text-5xl font-bold">
          <text>Our </text>
          <text className="text-lotus-red">Capabilities </text>
          <div>
            <text>to Delivery Your </text>
            <text className="text-lotus-red">Items</text>
          </div>
        </div>
        <text className="font-bold text-sm mt-6 text-justify">
          Access - reliable, convenient same day parcel pick -up & delivery
          services within the suburbs of Sydney are provided for you. This is
          ideal for short distance delivery purposes. We at Sen are committed to
          deliver on time ensuring a quality service.
        </text>
        <div>
          <div className="mt-6 flex flex-row items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="text-lg font-semibold">
                Preserved quality
              </text>
            </div>
          </div>
          <div className="text-justify">
            <text className="text-sm">
              We have experts who take care of your goods ensuring they reach the destination in the same quality.
            </text>
          </div>
        </div>
        <div>
          <div className="mt-6 flex flex-row items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="text-lg font-semibold">
                Efficient & effective deliveries
              </text>
            </div>
          </div>
          <div className=" text-justify">
            <text className="text-sm">
              Providing 100% customer satisfaction by catering all your needs as we make them our top priority.
            </text>
          </div>
        </div>
        <div>
          <div className="mt-6 flex flex-row items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="text-lg font-semibold">
              Strong safety record
              </text>
            </div>
          </div>
          <div className="text-justify">
            <text className="text-sm">
            Our history bears evidence for safe & smooth services provided over the years.
            </text>
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full ">
        <img src={BGImageOne} width="600" height="100%" className="" />
      </div>
    </div>
  );
}

export default WhoWeAreSenLocalDistribution;
