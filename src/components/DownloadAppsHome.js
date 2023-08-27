import React from "react";
import bgImage from "../assets/Group 81.png";
import mobilePhones from "../assets/Group 1000001827.png";
import mobileapp from "../assets/mobileapp1.png";
import appleStore from "../assets/vecteezy_get-it-on-play-store-button-and-appasle-app-store-icon_ 1.png";
import googlePlay from "../assets/vecteezy_get-it-on-play-store-button-and-aadpple-app-store-icon_ 1.png";

function DownloadAppsHome() {
  return (
    <>
      <div className=" w-full bg-downloadApp-img2 bg-cover h-3/6 bg-fixed">
        <div className="flex lg:flex-row flex-col justify-between items-center lg:items-start xl:pt-10 lg:pt-4 px-10 lg:px-24 ">
          <div className="w-full lg:w-5/12 mt-4 lg:mt-4 mb-10 ">
            <text className="font-ExpletusSans-BoldItalic text-xl text-lotus-red">
              Download
            </text>
            <div className="flex justify-center flex-col mb-6 lg:text-5xl text-3xl">
              <text className="font-Inter-SemiBold text-white">Connect </text>
              <text className="ml-20 font-Inter-SemiBold text-white">
                with Sen...
              </text>
              <div className="w-12 h-2 bg-lotus-red ml-20"></div>
            </div>
            <text className="text-white lg:text-base text-xs text-justify">
              Full visibility & trackability of movements along with real-time
              information accessibility using our technology platform. Stay
              connected by downloading the mobile app. You can simply book &
              track your package in a single touch.
            </text>
            <div className="flex flex-row justify-start mt-6">
              <img src={appleStore} width="130" className="mr-4 lg:mr-6" />
              <img src={googlePlay} width="130" />
            </div>
          </div>
          <div className="lg:w-auto lg:inline hidden">
            <img src={mobileapp} width="430" />
          </div>
        </div>
      </div>
      <div className="w-full mt-16 lg:hidden flex justify-center">
        <img src={mobileapp} width="400" />
      </div>
    </>
  );
}

export default DownloadAppsHome;
