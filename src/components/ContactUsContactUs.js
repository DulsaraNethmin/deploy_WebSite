import React, { useRef } from "react";
import { faPhone, faEnvelope, faLocationDot, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";

function ContactUsContactUs() {
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
    <div className="w-full flex lg:flex-row flex-col justify-between lg:py-48 lg:px-24 py-20 px-10 lg:bg-contactusBG-img bg-cover">
      <div className="flex flex-col lg:w-4/12 w-full">
        <text className="font-ExpletusSans-BoldItalic text-lg text-lotus-red">
          Contact Us
        </text>
        <text className="text-5xl font-bold">Contact Info</text>
        <div className="lg:ml-20">
          <div className="flex flex-row items-center ml-10 mt-10">
            <FontAwesomeIcon icon={faPhone} size="2x" color="#e44650" />
            <div className="flex flex-col ml-6">
              <text className="font-semibold">PHONE</text>
              <text>+2 360 185 35 65</text>
              <text>+2 262 890 80 02</text>
            </div>
          </div>
          <div className="flex flex-row items-center ml-10 mt-10">
            <FontAwesomeIcon icon={faEnvelope} size="2x" color="#e44650" />
            <div className="flex flex-col ml-6">
              <text className="font-semibold">EMAIL</text>
              <text>sulbrorriagomain.com</text>
            </div>
          </div>
          <div className="flex flex-row items-center ml-10 mt-10">
            <FontAwesomeIcon icon={faLocationDot} size="2x" color="#e44650" />
            <div className="flex flex-col ml-8">
              <text className="font-semibold">LOCATION</text>
              <text>2307 Brooklyn. New York</text>
              <text>United State</text>
            </div>
          </div>
          <div className="flex flex-row items-center ml-10 mt-10">
            <FontAwesomeIcon icon={faShareNodes} size="2x" color="#e44650" />
            <div className="flex flex-col ml-8">
              <text className="font-semibold">FOLLOW US</text>
              <text>+2 262 890 80 02</text>
            </div>
          </div>
        </div>
      </div>

      <form className="w-6/12 border border-black p-8 rounded-xl hidden lg:inline" ref={form}
        onSubmit={sendEmail}>
        <div>
          <div className="flex flex-row justify-between my-6">
            <div className="flex flex-col ">
              <text className="text-sm">First Name</text>
              <input className="border-b border-black bg-transparent" type="text"
                name="first_name"></input>
            </div>
            <div className="flex flex-col ">
              <text className="text-sm">Last Name</text>
              <input className="border-b border-black bg-transparent"
                type="text"
                name="last_name"></input>
            </div>
          </div>
          <div className="flex flex-row justify-between mb-6">
            <div className="flex flex-col ">
              <text className="text-sm">Email</text>
              <input className="border-b border-black bg-transparent"
                type="email"
                name="email"></input>
            </div>
            <div className="flex flex-col ">
              <text className="text-sm">Phone Number</text>
              <input className="border-b border-black bg-transparent" type="text"
                name="phone"></input>
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <text className="text-sm">Message</text>
            <input
              placeholder="Wrirte your message"
              className="border-b border-black bg-transparent"
              type="text"
              name="message"
            ></input>
          </div>
        </div>
        <input className="lg:w-1/3 w-4/5 flex flex-row-reverse mt-14 px-6 py-2 bg-secondary-blue text-white rounded font-semibold hover:opacity-90 hover:cursor-pointer" value="Send message"
          type="submit" />
      </form>

      <form className="border border-black p-8 rounded-xl lg:hidden mt-20" ref={form}
        onSubmit={sendEmail}>
        <div>

          <div className="flex flex-col mt-6">
            <text className="text-sm">First Name</text>
            <input className="border-b border-black bg-transparent"
              type="text"
              name="first_name"></input>
          </div>
          <div className="flex flex-col mt-6">
            <text className="text-sm">Last Name</text>
            <input className="border-b border-black bg-transparent"
              type="text"
              name="last_name"></input>
          </div>


          <div className="flex flex-col mt-6">
            <text className="text-sm">Email</text>
            <input className="border-b border-black bg-transparent"
              type="email"
              name="email"></input>
          </div>
          <div className="flex flex-col mt-6">
            <text className="text-sm">Phone Number</text>
            <input className="border-b border-black bg-transparent"
              type="text"
              name="phone"></input>
          </div>

          <div className="flex flex-col my-6">
            <text className="text-sm">Message</text>
            <input
              placeholder="Wrirte your messege"
              className="border-b border-black bg-transparent" type="text"
              name="message"
            ></input>
          </div>
        </div>
        
          <input className="lg:w-1/3 w-4/5 py-2 bg-secondary-blue text-white rounded font-semibold flex justify-center items-center" value="Send Message"
            type="submit" />

      </form>

    </div>
  );
}

export default ContactUsContactUs;
