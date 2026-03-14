import React from "react";
import logo from "../assets/logoclg.jpg";

const Education = () => {
  return (
    <section id="education" className="py-5" style={{ background: "#180643" }}>
      <div className="container">
        <h2 className="text-center text-white my-5">Education</h2>
        <div
          className="card border-0 text-center py-3 shadow"
          style={{ background: "#071857" }}
        >
          <img
            src={logo}
            alt="St. Johns College"
            className="mx-auto rounded-circle mb-3"
            width={100}
            height={100}
          />
          <div className="text-white">
            <h3>Bachelor of Commerce</h3>
            <p>St. Johns College, Tirunelveli</p>
            <p>2022-2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
