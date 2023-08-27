import React, { useEffect } from "react";
import missionImage from "../assets/MissionImage.png";
import missionSign from "../assets/missonsign.png";
import AOS from "aos";

function MissionOurServices() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="w-full flex lg:flex-row flex-col justify-between lg:mt-36 lg:px-24 mt-16 lg:bg-missionBG-img">
      <div className="flex flex-col lg:w-5/12 w-full text-justify px-10 lg:px-0">
        <text className="font-ExpletusSans-BoldItalic text-lg text-lotus-red">
          Our Vision...
        </text>
        <div className="lg:text-5xl text-3xl font-bold">
          <text>We deliver </text>
          <text className="text-lotus-red">Quality</text>
        </div>
        <text className="font-bold mt-6">
          To be the number one transport allocator in future technology driven
          supply chain management.
        </text>

        <text className="font-ExpletusSans-BoldItalic text-lg text-lotus-red mt-10">
          Our Mission...
        </text>
        <div className="lg:text-5xl text-3xl font-bold">
          <text>We Deliver </text>
          <text className="text-lotus-red">Satisfaction</text>
        </div>
        <text className="font-bold mt-6">
          To create a platform that connects shippers with carriers which allows
          both clients and carriers to gain benefit.
        </text>
        <text className="mt-4">
          The client gains benefit from the auction for road transport services
          by receiving the best deal & complete transparency, whereas the
          carrier gets the opportunity to earn more since there is no
          involvement of a third party.
        </text>
        <div className="flex flex-col justify-center items-center mt-10">
          <img src={missionSign} width="250" height="100%" />
          <text className="font-bold">Neranjan Senanayaka, SEN Transport LLC</text>
        </div>
      </div>
      <div className="mt-24 lg:mt-0">
        <img src={missionImage} width="480" height="100%" className="" />
      </div>
    </div>
  );
}

export default MissionOurServices;
