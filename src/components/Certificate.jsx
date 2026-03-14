import React from "react";
import certificate from "../assets/manimala-s.png"

export const Certificate = () => {
  return (
    <section id="certifications" style={{backgroundColor: "#16172a"}}>
      <div className="container p-5">
        <h2 className="text-center text-white my-5">Certifications</h2>
        <div className="card d-flex flex-row py-3 shadow text-white" style={{backgroundColor: "#38395c"}}>
          <img
            src={certificate}
            className="m-3"
            width={500}
            height={350}
            alt="Full Stack Development - MERN Stack"
          />
          <div className="ms-5 mt-5">
            <h5>Full Stack Development - MERN Stack</h5>
            <p>Brassy Academy</p>
            <p>Jun 2025 - Sep 2025</p>
            <a href="https://brassyacademy.com/certificate/verify/BAC-6778feb9-a084-4768-a63d-91dc5bcc395f/" target="_blank" rel="noopener noreferre" className="btn btn-primary">View Certificate</a>
          </div>
        </div>
      </div>
    </section>
  );
};
