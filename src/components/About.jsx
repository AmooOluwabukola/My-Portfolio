import React from "react";
import Bukola from "../assets/2.png";
import "../styles/Hero.css";
import John2 from "../assets/About Me.svg"
const About = () => {
  return (
    <>
      <main id="about" className="p-4">
        <section className="container">
          <div className="row mt-5 mb-5">
            <div className="col-lg-6">
              <img src={Bukola} className="w-100" alt="" />
            </div>
            <div className="col-lg-6 py-5 mt-4">
              <p className="about">About</p>
              <h2 className="aboutMe">About Me</h2>
              <p className="aboutText">
             
              Hi, my name is Amoo Oluwabukola from Nigeria. I started my journey in the world of web development early this year and so far, I have worked on various websites.
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
