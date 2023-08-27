import React from "react";

function AchivementAboutUs() {
  return (
    <div className="lg:my-36 lg:px-24 lg:py-24 my-24 px-10">
      <div className="flex justify-center flex-col items-center lg:my-6">
        <text className="font-ExpletusSans-BoldItalic text-xl text-lotus-red">
          Achivement
        </text>
        <text className="font-Inter-SemiBold lg:text-5xl text-3xl text-center">
          High Work Achievements
        </text>
        <div className="w-12 h-2 bg-lotus-red"></div>
      </div>

      <div className="flex lg:flex-row flex-col lg:justify-evenly justify-center lg:my-20 my-10 lg:ml-0 ml-8">
        <div className="mt-8 lg:mt-0">
          <div>
            <text className="text-8xl text-lotus-red font-bold">50</text>
            <text className="text-xl ml-4 font-bold">cities</text>
          </div>
          <text className="font-semibold text-gray-600">Around the Ausi</text>
        </div>
        <div className="mt-8 lg:mt-0">
          <div>
            <text className="text-8xl text-lotus-red font-bold">2</text>
            <text className="text-xl ml-4 font-bold">million</text>
          </div>
          <text className="font-semibold text-gray-600">Around the Ausi</text>
        </div>
        <div className="mt-8 lg:mt-0">
          <div>
            <text className="text-8xl text-lotus-red font-bold">350</text>
            <text className="text-xl ml-4 font-bold">clients</text>
          </div>
          <text className="font-semibold text-gray-600">Around the Ausi</text>
        </div>
      </div>
    </div>
  );
}

export default AchivementAboutUs;
