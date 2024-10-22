import React from "react";
import Bukola from "../assets/bukola2.jpg";
import "../styles/Hero.css";
import John2 from "../assets/About Me.svg"
const About = () => {
  return (
    <>
      <main id="about" className="p-4">
        <section className="container">
          <div className="row mt-5 mb-5">
            <div className="col-lg-6">
              <img src={Bukola} className="w-100 " alt=""   style={{ borderRadius: "10px" }} />
            </div>
            <div className="col-lg-6 py-5 mt-4">
              <p className="about">About</p>
              <h2 className="aboutMe">About Me</h2>
              <p className="aboutText">
             
              Hi, my name is Oluwabukola Amoo a motivated and detail-oriented entry-level software developer with hands-on experience in front-end development and e-commerce platforms. Strong ability to collaborate remotely and create user-friendly, responsive, and scalable web applications. Ready to contribute to dynamic development teams while continuously learning new technologies.

              </p>
              <p className="aboutText">
                In my free time, I love seeing movies, playing scrabble, trying out recipes.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
