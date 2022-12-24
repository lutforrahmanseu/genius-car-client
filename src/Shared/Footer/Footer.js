import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer p-32 my-5 bg-black text-white ">
      <div>
        <img src={logo} alt="" />
        <p>
          Edwin Diaz is a software and web <br /> technologies engineer, a life
          coach <br />
          trainer who is also a serial .
        </p>
      </div>
      <div>
        <span className="footer-title">About</span>
        <Link className="link link-hover">Home</Link>
        <Link className="link link-hover">Service</Link>
        <Link className="link link-hover">Contact</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link className="link link-hover">Why Car Doctor</Link>
        <Link className="link link-hover">About</Link>
      </div>
      <div>
        <span className="footer-title">Support</span>
        <Link className="link link-hover">Support Center</Link>
        <Link className="link link-hover">Feedback</Link>
        <Link className="link link-hover">Accesbility</Link>
      </div>
    </footer>
  );
};

export default Footer;
