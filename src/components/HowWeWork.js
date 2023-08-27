import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faL } from "@fortawesome/free-solid-svg-icons";
import animation1 from "../assets/animation1.png";
import desktopUI from "../assets/desktopUI.png";
import mobileUI from "../assets/mobileUI.png";
import mergeUI from "../assets/mergeUI.png";
import addf1 from "../assets/addf 1.png";
import adsda1 from "../assets/adsda 1.png";

function HowWeWork() {
  const [isShippers, setShippers] = useState(false);
  const [isCarriers, setCarriers] = useState(true);
  return (
    <div className="w-full flex flex-col justify-center items-center my-16">
      <div className="flex justify-center flex-col items-center my-6">
        <text className="font-ExpletusSans-BoldItalic text-xl text-lotus-red">
          How We Work
        </text>
        <text className="font-Inter-SemiBold text-center lg:mb-6 lg:text-5xl text-3xl">
          Connecting Carriers with Large Shippers
        </text>
        <div className="w-12 h-2 bg-lotus-red"></div>
      </div>
      <div className="flex flex-row justify-between mt-16">
        <div
          className={`flex justify-end items-center lg:px-24 lg:py-4 px-10 py-2 mr-2 border rounded-3xl hover:cursor-pointer ${isCarriers ? " bg-lotus-red text-white" : ""
            }`}
          onClick={() => {
            setCarriers(true);
            setShippers(false);
          }}
        >
          <text className="font-ExpletusSans-BoldItalic">Carriers</text>
        </div>
        <div
          className={` flex justify-start items-center lg:px-24 lg:py-4 px-10 py-2 mr-2 border rounded-3xl hover:cursor-pointer${isShippers ? " bg-lotus-red text-white" : ""
            }`}
          onClick={() => {
            setCarriers(false);
            setShippers(true);
          }}
        >
          <text className="font-ExpletusSans-BoldItalic">Shippers</text>
        </div>
      </div>
      {isCarriers ? (
        <div className="flex lg:flex-row flex-col justify-evenly items-center mt-16 lg:px-24 px-10">
          <div className="lg:w-1/2 w-full hidden lg:inline">
            <img src={mergeUI} width="800" />
          </div>
          <div className="lg:w-1/2 w-full">
            <text className="font-ExpletusSans-BoldItalic text-2xl text-lotus-red lg:ml-24">
              Carriers
            </text>
            <div className="lg:ml-20 text-secondary-blue mb-6 lg:mb-0">
              <div>
                <div className="mt-6 ml-4 flex flex-row items-center ">
                  <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
                  <div className="ml-6">
                    <text className="text-lg font-semibold">
                      Streamlined load management
                    </text>
                  </div>
                </div>
                <div className="ml-14">
                  <text className="text-sm">
                    Use our dedicated marketplace to bid on both spot and contracted loads that match your fleet size. Our technology personalizes loads to help you handle more shipments with less effort.
                  </text>
                </div>
              </div>
            </div>
            <img src={addf1} width="130" className="ml-48 hidden lg:inline" />
            <div className="lg:ml-36 text-secondary-blue mb-6 lg:mb-0">
              <div>
                <div className="ml-4 flex flex-row items-center ">
                  <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
                  <div className="ml-6">
                    <text className="text-lg font-semibold">
                      Quick and easy paperwork
                    </text>
                  </div>
                </div>
                <div className="ml-14">
                  <text className="text-sm">
                    With just one click, you can instantly upload PODs and invoices. No need for time-consuming manual processes.
                  </text>
                </div>
              </div>
            </div>
            <img src={adsda1} width="150" className="ml-48 hidden lg:inline" />
            <div className="lg:ml-16 text-secondary-blue mb-6 lg:mb-0">
              <div>
                <div className="ml-4 flex flex-row items-center ">
                  <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
                  <div className="ml-6">
                    <text className="text-lg font-semibold">
                      Faster payments
                    </text>
                  </div>
                </div>
                <div className="ml-14">
                  <text className="text-sm">
                    Once your paperwork is uploaded, you'll receive payment in just 48 hours. Enjoy peace of mind knowing your cash flow is consistent and reliable.
                  </text>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:hidden mt-10 flex items-center justify-center">
            <img src={mergeUI} width="450" />
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {isShippers ? (
        <div className="flex lg:flex-row flex-col justify-evenly items-center mt-16 lg:px-24 px-10">
          <div className="lg:w-1/2 w-full hidden lg:inline">
            <img src={mergeUI} width="800" />
          </div>
          <div className="lg:w-1/2 w-full">
            <text className="font-ExpletusSans-BoldItalic text-2xl text-lotus-red lg:ml-24">
              Shippers
            </text>
            <div className="lg:ml-20 text-secondary-blue mb-6 lg:mb-0">
              <div>
                <div className="mt-6 ml-4 flex flex-row items-center ">
                  <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
                  <div className="ml-6">
                    <text className="text-lg font-semibold">
                      Book shipments and connect with carriers
                    </text>
                  </div>
                </div>
                <div className="ml-14">
                  <text className="text-sm">
                    Book your shipments quickly and easily on the Ofload platform, and gain access to our verified fleet network of over 15,000 trucks for reliable transport.
                  </text>
                </div>
              </div>
            </div>
            <img src={addf1} width="130" className="ml-48 hidden lg:inline" />
            <div className="lg:ml-36 text-secondary-blue mb-6 lg:mb-0">
              <div>
                <div className="ml-4 flex flex-row items-center ">
                  <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
                  <div className="ml-6">
                    <text className="text-lg font-semibold">
                      Improve visibility and efficiency
                    </text>
                  </div>
                </div>
                <div className="ml-14">
                  <text className="text-sm">
                    Stay informed about key milestones in your shipment's journey with real-time updates and GPS tracking. This helps you unlock efficiencies and streamline your operations.
                  </text>
                </div>
              </div>
            </div>
            <img src={adsda1} width="150" className="ml-48 hidden lg:inline" />
            <div className="lg:ml-16 text-secondary-blue mb-6 lg:mb-0">
              <div>
                <div className="ml-4 flex flex-row items-center ">
                  <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
                  <div className="ml-6">
                    <text className="text-lg font-semibold">
                      Optimize performance with data insights
                    </text>
                  </div>
                </div>
                <div className="ml-14">
                  <text className="text-sm">
                    Access cost and performance metrics on our Analytics Dashboard to help you reduce freight costs and make continuous improvements to your logistics strategy.
                  </text>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:hidden mt-10 flex justify-center items-center">
            <img src={mergeUI} width="450" />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default HowWeWork;
