import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Proj1 from "../assets/Em.jpeg";
import Proj2 from "../assets/adviceGen.jpeg";
import Proj3 from "../assets/portfolio-pic.jpeg";
import arrow from "../assets/Vector.svg";
import gitHub from "../assets/mdi_github.svg";
import "../styles/Hero.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

const Portfolio = () => {
  return (
    <>
      <main id="projects" className="p-4">
        <section className="container">
          <p className="portfolio">Recent Projects</p>
          <div className="d-flex justify-content-between">
            <h1 className="my-portfolio">My Portfolio</h1>
            <a href="#" className="btn  git-btn text-white d-none d-lg-block">
              <img src={gitHub} alt="" />
              Visit My GitHub
            </a>
            <a href="#" className="btn  git-btn text-white d-lg-none py-1">
              <img src={gitHub} alt="" /> GitHub
            </a>
          </div>
          <div className="d-lg-flex justify-content-between gap-2 mb-5">
            {/*card 1  */}
            <Card className="w-100 mt-3 shadow-lg">
              <Card.Img variant="top" src={Proj1} className=""  style={{height:"205px"}}/>
              <Card.Body>
                <Card.Title className="title">EM Social App</Card.Title>
                <Card.Text className="portfolio-text">
                  Em is an online social platform where users can create posts,
                  engage with them by liking or disliking and by adding comments
                </Card.Text>
                <div className="d-flex gap-2 ">
                  <div>
                    {" "}
                    <a
                      href="https://em-social-app-bk.vercel.app/"
                      className="text-decoration-none text-dark pe-1 cardLink website-button"
                    >
                      Open <FaExternalLinkAlt />
                    </a>{" "}
                  </div>
                  <div>
                    <a
                      href="https://em-social-app-bk.vercel.app/"
                      className="text-decoration-none text-dark pe-1 cardLink website-button"
                    >
                      GitHub <IoLogoGithub />
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* card 2 */}
            <Card className="w-100 mt-3 shadow-lg">
              <Card.Img variant="top" src={Proj2} className=""  style={{height:"205px"}} />
              <Card.Body>
                <Card.Title className="title">Advice Generator</Card.Title>
                <Card.Text className="portfolio-text">
                  Em is an online social platform where users can create posts,
                  engage with them by liking or disliking and by adding comments
                </Card.Text>
                <div className="d-flex gap-2 ">
                  <div>
                    {" "}
                    <a
                      href="https://advice-generator-beryl-phi.vercel.app/"
                      className="text-decoration-none text-dark pe-1 cardLink website-button"
                    >
                      Open <FaExternalLinkAlt />
                    </a>{" "}
                  </div>
                  <div>
                    <a
                      href="https://https://github.com/AmooOluwabukola/Advice-Generator.git"
                      className="text-decoration-none text-dark pe-1 cardLink website-button"
                    >
                      GitHub <IoLogoGithub />
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>

          {/* card 2 */}
          <Card className="w-100 mt-3 shadow-lg">
              <Card.Img variant="top" src={Proj3} className=""  style={{height:"205px"}}/>
              <Card.Body>
                <Card.Title className="title">Portfolio Website</Card.Title>
                <Card.Text className="portfolio-text">
                A responsive one-page portfolio website built using Reactjs consisting of about, skills, projects, and contact sections designed with React-Bootsrap
                </Card.Text>
                <div className="d-flex gap-2 ">
                  <div>
                    {" "}
                    <a
                      href="https://amoooluwabukolasportfolio-oluwabukolas-projects.vercel.app/"
                      className="text-decoration-none text-dark pe-1 cardLink website-button"
                    >
                      Open <FaExternalLinkAlt />
                    </a>{" "}
                  </div>
                  <div>
                    <a
                      href="https://github.com/AmooOluwabukola/My-Portfolio.git"
                      className="text-decoration-none text-dark pe-1 cardLink website-button"
                    >
                      GitHub <IoLogoGithub />
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>

          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
