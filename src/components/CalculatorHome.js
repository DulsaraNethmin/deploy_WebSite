import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faMapLocationDot,
  faHandsHoldingCircle,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

function CalculatorHome() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_al4c9la",
        "template_0vhe11j",
        form.current,
        "pqP_Kk13ylAANuEA6"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("messge sent");
          alert('Your quote is sent!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {" "}
      <div className="w-full px-10 xl:px-36 lg:px-24 py-16 bg-calculator-bgImage bg-no-repeat bg-cover flex lg:flex-row flex-col justify-between items-center">
        <form
          className="lg:inline hidden w-full lg:w-6/12"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="bg-white p-16 flex flex-col justify-center items-center">
            <div className="mb-8">
              <div className="mb-8">
                <text className="font-semibold">Personal data</text>
              </div>
              <div className="flex flex-row">
                <div>
                  <input
                    placeholder="Customer name"
                    className="border border-gray bg-transparent mr-8 p-1"
                    type="text"
                    name="full_name"
                  ></input>
                </div>
                <div>
                  <input
                    placeholder="Company name"
                    className="border border-gray bg-transparent p-1"
                    type="text"
                    name="company_name"
                  ></input>
                </div>
              </div>
              <div className="flex flex-row mt-4">
                <div>
                  <input
                    placeholder="Email"
                    className="border border-gray bg-transparent mr-8 p-1"
                    type="email"
                    name="email"
                  ></input>
                </div>
                <div>
                  <input
                    placeholder="Phone"
                    className="border border-gray bg-transparent p-1"
                    type="text"
                    name="phone"
                  ></input>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <div className="mb-8">
                <text className="font-semibold">Shipment data</text>
              </div>
              <div className="flex flex-row">
                <div>
                  <input
                    placeholder="Sender address"
                    className="border border-gray bg-transparent mr-8 p-1"
                    type="text"
                    name="sender_address"
                  ></input>
                </div>
                <div>
                  <input
                    placeholder="Receiver address"
                    className="border border-gray bg-transparent p-1"
                    type="text"
                    name="receiver_address"
                  ></input>
                </div>
              </div>
              <div className="mt-4 flex flex-row justify-between">
                <text className="mr-8 mt-4">Drop time</text>
                <input
                  placeholder="Drop time"
                  className="border border-gray bg-transparent p-1 w-40 justify-center"
                  type="time"
                  name="drop_time"
                ></input>
              </div>
              <div className="mt-4 flex flex-row justify-between">
                <text className="mr-4">Pickup time</text>
                <input
                  placeholder="Pickup time"
                  className="border border-gray bg-transparent p-1 w-40 justify-center"
                  type="time"
                  name="pickup_time"
                ></input>
              </div>
              <div className="mt-4">
                <input
                  placeholder="weight"
                  className="border border-gray bg-transparent p-1"
                  type="number"
                  name="weight"
                ></input>
              </div>
            </div>
            <input
              className="border-2 flex justify-center items-center text-center py-4 rounded-br-2xl mt-10 border-lotus-red hover:cursor-pointer w-full hover:bg-lotus-red hover:text-white hover:border-gray-300"
              value="REQUEST A QUOTE"
              type="submit"
            >
            </input>
          </div>
        </form>
        <div className="w-full lg:w-5/12">
          <text className="font-ExpletusSans-BoldItalic text-xl text-lotus-red">
            Calculator
          </text>
          <div className="flex justify-center flex-col mb-6">
            <text className="font-Inter-SemiBold lg:text-5xl text-3xl text-white">
              Get a
            </text>
            <text className="ml-24 font-Inter-SemiBold lg:text-5xl text-3xl text-white">
              Quote..
            </text>
            <div className="w-12 h-2 bg-lotus-red ml-24"></div>
          </div>
          <text className="text-white lg:text-base text-sm">
            Our team is always ready to assist you. Simply fill in the details &
            submit a request to see how much you can save on your delivery
            costs.
          </text>
          <div className="flex flex-row mt-10 justify-evenly">
            <div className="flex flex-col justify-center items-center mx-6">
              <FontAwesomeIcon icon={faHeadset} size="3x" color="#ffffff" />
              <text className="text-white font-bold mt-2">Support 24/7</text>
            </div>
            <div className="flex flex-col justify-center items-center mx-6">
              <FontAwesomeIcon
                icon={faMapLocationDot}
                size="3x"
                color="#ffffff"
              />
              <text className="text-white font-bold mt-2">Online Tracking</text>
            </div>
            <div className="flex flex-col justify-center items-center mx-6">
              <FontAwesomeIcon
                icon={faHandsHoldingCircle}
                size="3x"
                color="#ffffff"
              />
              <text className="text-white font-bold mt-2">Insurance</text>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 lg:hidden px-10 w-full">
        <form className="bg-white p-6 flex flex-col items-center border" ref={form}
          onSubmit={sendEmail}>
          <div className="mb-8 flex flex-col w-full items-center">
            <div className="mb-8">
              <text className="font-semibold">Personal data</text>
            </div>
            <div className="mb-4">
              <input
                placeholder="Customer name"
                className="border border-gray bg-transparent sm:px-24 sm:py-2 px-4 py-1"
                name="full_name"
              ></input>
            </div>
            <div className="mb-4">
              <input
                placeholder="Company name"
                className="border border-gray bg-transparent sm:px-24 sm:py-2 px-4 py-1"
                name="company_name"
              ></input>
            </div>
            <div className="mb-4">
              <input
                placeholder="Email"
                className="border border-gray bg-transparent sm:px-24 sm:py-2 px-4 py-1"
                type="email"
                name="email"
              ></input>
            </div>
            <div className="mb-4">
              <input
                placeholder="Phone"
                className="border border-gray bg-transparent sm:px-24 sm:py-2 px-4 py-1"
                type="text"
                name="phone"
              ></input>
            </div>
          </div>
          <div className="mb-8 flex flex-col items-center w-full">
            <div className="mb-8 ">
              <text className="font-semibold">Shipment data</text>
            </div>
            <div className="mb-4">
              <input
                placeholder="Sender address"
                className="border border-gray bg-transparent sm:px-24 sm:py-2 px-4 py-1"
                type="text"
                name="sender_address"
              ></input>
            </div>
            <div className="mb-4">
              <input
                placeholder="Receiver address"
                className="border border-gray bg-transparent sm:px-24 sm:py-2 px-4 py-1"
                type="text"
                name="receiver_address"
              ></input>
            </div>
            <div className="mb-4">
              <input
                placeholder="Pickup time"
                className="border border-gray bg-transparent sm:px-24 sm:py-2 px-4 py-1"
                type="text"
                name="pickup_time"
              ></input>
            </div>
            <div className="mb-4">
              <input
                placeholder="Drop time"
                className="border border-gray bg-transparent sm:px-24 sm:py-2 px-4 py-1"
                type="text"
                name="drop_time"
              ></input>
            </div>
            <div className="mb-4">
              <input
                placeholder="weight"
                className="border border-gray bg-transparent sm:px-24 sm:py-2 px-4 py-1"
                type="number"
                name="weight"
              ></input>
            </div>
          </div>
          <input className="border-2 flex justify-center items-center py-4 rounded-br-2xl mt-8 border-lotus-red hover:cursor-pointer w-3/5"
            value="REQUEST A QUOTE"
            type="submit">
          </input>
        </form>
      </div>
    </>
  );
}

export default CalculatorHome;
