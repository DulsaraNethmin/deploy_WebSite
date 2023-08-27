import React, {useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

function CurriorSenCurrior() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_al4c9la",
        "template_7l5lgfo",
        form.current,
        "pqP_Kk13ylAANuEA6"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("messge sent");
          alert('Your message is sent!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="w-full flex lg:flex-row flex-col lg:justify-between py-28 bg-dot-Patern bg-no-repeat bg-cover lg:px-24 px-10">
      <div className="flex flex-col w-full lg:w-5/12">
        <text className="font-ExpletusSans-BoldItalic text-lg text-lotus-red">
          Courier
        </text>
        <text className="text-5xl font-bold">Courier Info</text>
        <text className="mt-4 text-xl">
          You are a few steps away from experiencing
        </text>
        <div>
          <div className="mt-6 ml-4 flex flex-row items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="text-lg font-semibold">A reliable service</text>
            </div>
          </div>
          {/* <div className="ml-14">
            <text className="text-sm">
              A wide range of services and door-to-door shipping options to
              solve vour international export challenges coverina 220
              territories across the globe.
            </text>
          </div> */}
        </div>
        <div>
          <div className="mt-6 ml-4 flex flex-row items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="text-lg font-semibold">
                Flexible delivery options
              </text>
            </div>
          </div>
          {/* <div className="ml-14">
            <text className="text-sm">
              With rates adapted to your shipping volume, it’s pricing that fits
              your business – not the other way around.
            </text>
          </div> */}
        </div>
        <div>
          <div className="mt-6 ml-4 flex flex-row items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="text-lg font-semibold">Interesting pricing</text>
            </div>
          </div>
          {/* <div className="ml-14">
            <text className="text-sm">
              Your customers will benefit from our On Demand Delivery services,
              allowing them to decide when and where their package is delivered.
              That means less enquiries and fewer returns for you.
            </text>
          </div> */}
        </div>
        {/* <div>
          <div className="mt-6 ml-4 flex flex-row items-center ">
            <FontAwesomeIcon icon={faCircleCheck} color="#e44650" />
            <div className="ml-6">
              <text className="text-lg font-semibold">Trusted Services </text>
            </div>
          </div>
          <div className="ml-14">
            <text className="text-sm">
              You’re in good company: DHL Express is used by some of the world’s
              biggest brands and organisations.
            </text>
          </div>
        </div> */}

        <text className="text-sm mt-4">
          Sen Transport is a package of everything essential.
        </text>
      </div>


      <form className="w-full lg:w-5/12  border p-8 rounded-xl bg-secondary-blue flex flex-col justify-between lg:mt-0 mt-24" ref={form}
        onSubmit={sendEmail}>
        <div className="xl:inline hidden">
          <div className="flex flex-row justify-between my-6">
            <div className="flex flex-col ">
              <text className="text-sm text-white">First Name</text>
              <input className="rounded" type="text"
                name="first_name"></input>
            </div>
            <div className="flex flex-col ">
              <text className="text-sm text-white">Last Name</text>
              <input className="rounded" type="text"
                name="last_name"></input>
            </div>
          </div>
          <div className="flex flex-row justify-between mb-6">
            <div className="flex flex-col ">
              <text className="text-sm text-white">Email</text>
              <input className="rounded" type="email"
                name="email"></input>
            </div>
            <div className="flex flex-col ">
              <text className="text-sm text-white">Phone Number</text>
              <input className="rounded" type="text"
                name="phone"></input>
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <text className="text-sm text-white">Messege</text>
            <input className="border-b rounded h-10" type="text"
              name="message"></input>
          </div>
        </div>
        <div className="hidden lg:inline xl:hidden">
          <div className="flex flex-col">
            <text className="text-sm text-white">First Name</text>
            <input className="rounded" className="rounded" type="text"
              name="first_name"></input>
          </div>
          <div className="flex flex-col mt-3">
            <text className="text-sm text-white">Last Name</text>
            <input className="rounded" type="text"
              name="last_name"></input>
          </div>
          <div className="flex flex-col mt-3">
            <text className="text-sm text-white">Email</text>
            <input className="rounded" type="email"
              name="email"></input>
          </div>
          <div className="flex flex-col mt-3">
            <text className="text-sm text-white">Phone Number</text>
            <input className="rounded" type="text"
              name="phone"></input>
          </div>
          <div className="flex flex-col mb-3 mt-3">
            <text className="text-sm text-white">Messege</text>
            <input className="border-b rounded h-10" type="text"
              name="message"></input>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex flex-col">
            <text className="text-sm text-white">First Name</text>
            <input className="rounded" className="rounded" type="text"
              name="first_name"></input>
          </div>
          <div className="flex flex-col mt-3">
            <text className="text-sm text-white">Last Name</text>
            <input className="rounded" type="text"
              name="last_name"></input>
          </div>
          <div className="flex flex-col mt-3">
            <text className="text-sm text-white">Email</text>
            <input className="rounded" type="email"
              name="email"></input>
          </div>
          <div className="flex flex-col mt-3">
            <text className="text-sm text-white">Phone Number</text>
            <input className="rounded" type="text"
              name="phone"></input>
          </div>
          <div className="flex flex-col mb-4 mt-3">
            <text className="text-sm text-white">Messege</text>
            <input className="border-b rounded h-20" type="text"
              name="message"></input>
          </div>
        </div>
          <input className="mt-14 lg:w-1/3 w-4/5 py-2 bg-lotus-red text-white rounded font-semibold hover:opacity-90 hover:cursor-pointer" type="submit" value="Send message" />
      </form>
    </div>
  );
}

export default CurriorSenCurrior;
