import React from "react";
import "../styles/Hero.css";
const Contact = () => {
  return (
    <>
      <main id="contact" className="p-4">
        <section className="container mb-5">
          <p className="text-center get-in-touch">Get In Touch</p>
          <h1 className="text-center  contact-me">Contact Me</h1>
          <p className=" text-center contact-text">
            If you like my work or want to hire me, please feel free to send me
            an email on{" "}
            <span className="text-decoration-underline">
              amoooluwabukola@outlook.com
            </span>{" "}
            by pressing the button below.
          </p>
          <div className="text-center ">
            <div className="btn">
              <a
                href="mailto:amoooluwabukola@outlook.com"
                className=" btn  email-btn text-white  "
              >
                Send me an email!
              </a>
            </div>
            <div className="">
              <p>
                or contact me through{" "}
                <a
                  href="https://tinyurl.com/amoobukola"
                  className="underline text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>{" "}
                or{" "}
                <a
                  href="https://x.com/bukola_gee/"
                  className="underline text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  X
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
