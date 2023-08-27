import React from "react";
import dotLine from "../assets/Group 1000001830.png";

function HistoryAboutUs() {
  return (
    <div className="bg-gray-100 lg:px-24 lg:py-36 px-10 py-20">
      <div>
        <text className="font-ExpletusSans-BoldItalic text-lg text-lotus-red">
          History...
        </text>
        <div className="lg:text-5xl text-3xl font-bold">
          <text>Milestones</text>
        </div>
        <div className="mt-2">
          <text>
            Here's a quick insight on how we have evolved through the years in
            the business.
          </text>
        </div>
      </div>
      <div className="flex flex-col lg:hidden mt-4">
        <div className="mt-6">
          <div>
            <text className="text-lotus-red text-5xl font-semibold ">2017</text>
            <text className="font-bold ml-2">year</text>
          </div>
          <div className="p-6 w-56 flex flex-col m-6 shadow-lg">
            <text className="text-sm font-bold">Initiated Sen Transport</text>
            <text className="text-xs mt-4">
              Operations were carried out in Melbourne at first, as a medical
              supplies courier service.
            </text>
          </div>
        </div>

        <div className="mt-6">
          <div>
            <text className="text-lotus-red text-5xl font-semibold ">2019</text>
            <text className="font-bold ml-2">year</text>
          </div>
          <div className="p-6 w-56 flex flex-col m-6 shadow-lg">
            <text className="text-sm font-bold">Expansion</text>
            <text className="text-xs mt-4">
              Sen Transport successfully expanded by initiating 12 Tautliner
              operations. Meanwhile, Sen established Freight Consolidation Hub
              service for the ease of management & coordination of freight.
            </text>
          </div>
        </div>

        <div className="mt-6">
          <div>
            <text className="text-lotus-red text-5xl font-semibold ">2020</text>
            <text className="font-bold ml-2">year</text>
          </div>
          <div className="p-6 w-56 flex flex-col m-6 shadow-lg">
            <text className="text-sm font-bold">Sen in Sydney</text>
            <text className="text-xs mt-4">
              Operations in Melbourne were managed very smoothly & successfully
              , therefore the management decided to expand its services to
              Sydney as well to cater the transportation needs.
            </text>
          </div>
        </div>

        <div className="mt-6">
          <div>
            <text className="text-lotus-red text-5xl font-semibold ">2022</text>
            <text className="font-bold ml-2">year</text>
          </div>
          <div className="p-6 w-56 flex flex-col m-6 shadow-lg">
            <text className="text-sm font-bold">Linehaul operations</text>
            <text className="text-xs mt-4">
              Inter-state shuttle services were initiated that offer pre-planned
              freight delivery services. (Ex: Melbourne to Sydney).
            </text>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:flex flex-row justify-between hidden max-w-7xl">
        <div>
          <text className="text-lotus-red text-5xl font-semibold ">2017</text>
          <text className="font-bold ml-2">year</text>
        </div>
        <div>
          <text className="text-lotus-red text-5xl font-semibold ">2019</text>
          <text className="font-bold ml-2">year</text>
        </div>
        <div>
          <text className="text-lotus-red text-5xl font-semibold ">2020</text>
          <text className="font-bold ml-2">year</text>
        </div>
        <div>
          <text className="text-lotus-red text-5xl font-semibold ">2022</text>
          <text className="font-bold ml-2">year</text>
        </div>
      </div>
      <div className="mt-4 hidden lg:inline">
        <img src={dotLine} />
      </div>
      <div className="lg:flex flex-row justify-between hidden max-w-7xl">
        <div className="p-6 w-56 flex flex-col m-6 shadow-lg">
          <text className="text-sm font-bold">Initiated Sen Transport</text>
          <text className="text-xs mt-4">
            Operations were carried out in Melbourne at first, as a medical
            supplies courier service.
          </text>
        </div>
        <div className="p-6 w-56 flex flex-col m-6 shadow-lg">
          <text className="text-sm font-bold">Expansion</text>
          <text className="text-xs mt-4">
            Sen Transport successfully expanded by initiating 12 Tautliner
            operations. Meanwhile, Sen established Freight Consolidation Hub
            service for the ease of management & coordination of freight.
          </text>
        </div>
        <div className="p-6 w-56 flex flex-col m-6 shadow-lg">
          <text className="text-sm font-bold">Sen in Sydney</text>
          <text className="text-xs mt-4">
            Operations in Melbourne were managed very smoothly & successfully ,
            therefore the management decided to expand its services to Sydney as
            well to cater the transportation needs.
          </text>
        </div>
        <div className="p-6 w-56 flex flex-col m-6 shadow-lg">
          <text className="text-sm font-bold">Linehaul operations</text>
          <text className="text-xs mt-4">
            Inter-state shuttle services were initiated that offer pre-planned
            freight delivery services. (Ex: Melbourne to Sydney).
          </text>
        </div>
      </div>
    </div>
  );
}

export default HistoryAboutUs;
