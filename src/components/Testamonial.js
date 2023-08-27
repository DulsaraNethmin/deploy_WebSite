import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";
import Ellipse7 from "../assets/Ellipse 7.png";
import googleLogo from "../assets/google-logo.png";
import Ellipse9 from "../assets/Ellipse 9.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Testamonial() {
  return (
    <div className="w-full lg:bg-dot-Patern bg-no-repeat bg-cover lg:pt-40 pb-16">
      <div className=" w-full flex flex-col justify-center items-center">
        <div className=" flex justify-center flex-col items-center my-6">
          <text className="font-ExpletusSans-BoldItalic text-xl text-lotus-red">
            Testamonial
          </text>
          <text className="font-Inter-SemiBold lg:text-5xl text-3xl text-center">
            Who
          </text>
          <text className="font-Inter-SemiBold lg:text-5xl text-3xl text-center">
            Loves Us
          </text>
          <div className="w-12 h-2 bg-lotus-red"></div>
        </div>

        {/* <div className="">
          <div className="flex flex-col lg:flex-row justify-between py-6 lg:10 lg:px-24">
            <div className="m-6 flex flex-col justify-center items-center ">
              <div className="absolute flex flex-row justify-center items-center p-2 rounded-lg border-2 bg-secondary-blue mb-80 sm:mb-64 md:mb lg:mb-96 xl:mb-80">
                <FontAwesomeIcon icon={faStar} color="#FFCE31" />
                <FontAwesomeIcon icon={faStar} color="#FFCE31" />
                <FontAwesomeIcon icon={faStar} color="#FFCE31" />
                <FontAwesomeIcon icon={faStar} color="#FFCE31" />
                <FontAwesomeIcon icon={faStar} color="#FFCE31" />
              </div>
              <div className=" p-6 border rounded-2xl">
                <text className="text-xs">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.”
                </text>
              </div>
              <div className="mt-6 flex flex-col justify-center items-center">
                <img src={Ellipse7} width="60" className="" />
                <text className="font-semibold mt-4">Stanley Hancock</text>
                <text className="text-lotus-red">Client</text>
              </div>
            </div>

            <div className="m-6 flex flex-col justify-center items-center ">
              <div className="flex flex-row justify-center items-center p-2 absolute rounded-lg border-2 bg-secondary-blue mb-80">
                <FontAwesomeIcon icon={faStar} color="#FFCE31" />
                <FontAwesomeIcon icon={faStar} color="#FFCE31" />
                <FontAwesomeIcon icon={faStar} color="#FFCE31" />
                <FontAwesomeIcon icon={faStar} color="#FFCE31" />
                <FontAwesomeIcon icon={faStar} color="#FFCE31" />
              </div>
              <div className="p-6 border rounded-2xl">
                <text className="text-xs">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.”
                </text>
              </div>
              <div className="mt-6 flex flex-col justify-center items-center">
                <img src={Ellipse8} width="60" className="" />
                <text className="font-semibold mt-4">Jane Cummins</text>
                <text className="text-lotus-red">Client</text>
              </div>
            </div>

            <div className="m-6 flex flex-col justify-center items-center ">
              <div className="flex flex-row justify-center items-center p-2 absolute rounded-lg border-2 bg-secondary-blue mb-80">
                <FontAwesomeIcon icon={faStar} color="#FFCE31" />
                <FontAwesomeIcon icon={faStar} color="#FFCE31" />
                <FontAwesomeIcon icon={faStar} color="#FFCE31" />
                <FontAwesomeIcon icon={faStar} color="#FFCE31" />
                <FontAwesomeIcon icon={faStar} color="#FFCE31" />
              </div>
              <div className="p-6 border rounded-2xl">
                <text className="text-xs">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.”
                </text>
              </div>
              <div className="mt-6 flex flex-col justify-center items-center">
                <img src={Ellipse9} width="60" className="" />
                <text className="font-semibold mt-4">Allen Tyler</text>
                <text className="text-lotus-red">Coperater</text>
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex flex-col lg:w-4/6 mx-8 lg:mx-0 lg:p-8 p-4 border mt-10">
          <div className="mb-4">
            <FontAwesomeIcon icon={faQuoteRight} color="#7A8086" size="3x" />
          </div>

          <text className="lg:text-2xl text-xl font-OpenSans-LightItalic">
            Being the preferred choice in the industry for the loyal, efficient
            & safe services provided by Sen, let's see what our clients have to
            say about us...
          </text>

          <div className="flex flex-row mt-6 w-32 justify-evenly">
            <FontAwesomeIcon icon={faStar} color="#FFCE31" />
            <FontAwesomeIcon icon={faStar} color="#FFCE31" />
            <FontAwesomeIcon icon={faStar} color="#FFCE31" />
            <FontAwesomeIcon icon={faStar} color="#FFCE31" />
            <FontAwesomeIcon icon={faStar} color="#FFCE31" />
          </div>

          <div className="flex flex-row justify-between items-center mt-8">
            <div className="flex flex-row  items-center">
              <img
                src={Ellipse7}
                width="60"
                className="hidden lg:inline lg:mr-8 mr-6"
              />
              <img
                src={Ellipse7}
                width="40"
                className="lg:hidden lg:mr-8 mr-6"
              />
              <text className="font-semibold font lg:text-2xl text-lg">
                Stanley Hancock
              </text>
            </div>
            <div className="m-2 hover:cursor-pointer">
              <img src={googleLogo} width="140" className="" />
            </div>
          </div>
        </div>

        {/* <Carousel>
        <div className="flex flex-col lg:w-4/6 mx-8 lg:mx-0 lg:p-8 p-4 border mt-10">
          <div className="mb-4">
            <FontAwesomeIcon icon={faQuoteRight} color="#7A8086" size="3x" />
          </div>

          <text className="lg:text-2xl text-xl font-OpenSans-LightItalic">
            Being the preferred choice in the industry for the loyal, efficient
            & safe services provided by Sen, let's see what our clients have to
            say about us...
          </text>

          <div className="flex flex-row mt-6 w-32 justify-evenly">
            <FontAwesomeIcon icon={faStar} color="#FFCE31" />
            <FontAwesomeIcon icon={faStar} color="#FFCE31" />
            <FontAwesomeIcon icon={faStar} color="#FFCE31" />
            <FontAwesomeIcon icon={faStar} color="#FFCE31" />
            <FontAwesomeIcon icon={faStar} color="#FFCE31" />
          </div>

          <div className="flex flex-row justify-between items-center mt-8">
            <div className="flex flex-row  items-center">
              <img
                src={Ellipse7}
                width="60"
                className="hidden lg:inline lg:mr-8 mr-6"
              />
              <img
                src={Ellipse7}
                width="40"
                className="lg:hidden lg:mr-8 mr-6"
              />
              <text className="font-semibold font lg:text-2xl text-lg">
                Stanley Hancock
              </text>
            </div>
            <div className="m-2 hover:cursor-pointer">
              <img src={googleLogo} width="140" className="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:w-4/6 mx-8 lg:mx-0 lg:p-8 p-4 border mt-10">
          <div className="mb-4">
            <FontAwesomeIcon icon={faQuoteRight} color="#7A8086" size="3x" />
          </div>

          <text className="lg:text-2xl text-xl font-OpenSans-LightItalic">
            Being the preferred choice in the industry for the loyal, efficient
            & safe services provided by Sen, let's see what our clients have to
            say about us...
          </text>

          <div className="flex flex-row mt-6 w-32 justify-evenly">
            <FontAwesomeIcon icon={faStar} color="#FFCE31" />
            <FontAwesomeIcon icon={faStar} color="#FFCE31" />
            <FontAwesomeIcon icon={faStar} color="#FFCE31" />
            <FontAwesomeIcon icon={faStar} color="#FFCE31" />
            <FontAwesomeIcon icon={faStar} color="#FFCE31" />
          </div>

          <div className="flex flex-row justify-between items-center mt-8">
            <div className="flex flex-row  items-center">
              <img
                src={Ellipse7}
                width="60"
                className="hidden lg:inline lg:mr-8 mr-6"
              />
              <img
                src={Ellipse7}
                width="40"
                className="lg:hidden lg:mr-8 mr-6"
              />
              <text className="font-semibold font lg:text-2xl text-lg">
                Stanley Hancock
              </text>
            </div>
            <div className="m-2 hover:cursor-pointer">
              <img src={googleLogo} width="140" className="" />
            </div>
          </div>
        </div>
        </Carousel> */}
      </div>
    </div>
  );
}

export default Testamonial;
