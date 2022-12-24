import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero my-20 ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img src={person} alt="" className=" w-4/5 rounded-lg shadow-2xl" />
          <img
            src={parts}
            alt=""
            className=" absolute left-1/4 top-2/4 w-3/5 rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-orange-400 my-5 text-2xl  font-bold">About Us</h1>
          <h1 className="text-5xl text-black font-bold">
            We are qualified <br /> & of experience in this field
          </h1>
          <p className="py-6 text-black">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6 text-black">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="text-white btn btn-warning mr-5">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
