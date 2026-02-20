import { useState, useEffect } from "react";
import profile from "../assets/profile.jpeg";
import cv from "../assets/MANIMALA_S_MERNStack.pdf";
import "../App.css";
const Hero = () => {
  const text = "Hi, I'm Manimala";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 150);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [index, text]);
  return (
    <section
      id="home"
      className="bg-dark text-light d-flex align-items-center text-center"
      style={{ minHeight: "90vh" }}
    >
      <div className="container-fluid">
        <div className="row mx-5">
          <div className="col-md-3 mb-3 mb-md-0">
            <img
              src={profile}
              alt="profile"
              className="img-fluid bounce rounded-circle ms-md-5"
            />
          </div>
          <div className="col-md-9">
            <h1 className="display-4 fw-bold">{displayedText}</h1>

            <p className="lead mt-3">
              MERN Stack Developer | Building Full-Stack Web Applications
            </p>

            <div className="mt-4">
              <a href="#projects" className="btn btn-primary me-3 mb-3 mb-md-0">
                View Projects
              </a>

              <a
                href={cv}
                download="ManimalaCV.pdf"
                className="btn btn-success me-3 mb-3 mb-md-0"
              >
                Download CV 
              </a>

              <a href="#contact" className="btn btn-outline-light me-3 mb-3 mb-md-0">
                Contact Me
              </a>
            </div>
            <div className="mt-3 mb-3 mb-md-0">
              <a
                href="https://www.linkedin.com/in/manimalas09"
                target="_blank"
                aria-label="LinkedIn profile"
              >
                <i className="fa-brands fa-linkedin fa-2x me-2"></i>
              </a>
              <a
                href="https://github.com/Manimala11"
                target="_blank"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github fa-2x me-2"></i>
              </a>
              <a
                href="mailto:manimala3214@gmail.com"
                target="_blank"
                aria-label="Email"
              >
                <i className="fa-solid fa-at fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
