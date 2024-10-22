import React from "react";
import "../styles/Hero.css";
import bukolaImg from "../assets/bukola.jpg";
import John from "../assets/Group 11 1.svg";

const Hero = () => {
  return (
    <>
      <main className="hero p-4  ">
        <section className="container hero-section">
          <div className="d-lg-flex justify-content-between gap-5">
            <div className=" order-lg-2">
              <img
                src={bukolaImg}
                alt=""
                className="w-100 mt-5 h-100"
                style={{ borderRadius: "10px" }} 
              />{" "}
            </div>
            <div className=" order-lg-1">
             
              <p id="name">Hey, I am Oluwabukola</p>
              <p id="develop">
                I develop dynamic and User-Centered Web Applications
              </p>
              <p id="expertise">
                My expertise spans both front-end development and user-centered design, 
                enabling me to build comprehensive solutions that meet diverse
                user needs.
               
              </p>
              <a
                href="#contact"
                className="text-white text-decoration-none btn contact-btn rounded-1 mb-5"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
