import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
          <a href="#home" className="navbar-brand ms-md-5">
            <h2>Manimala</h2>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  <h6>Home</h6>
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  <h6>About</h6>
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link">
                  <h6>Skills</h6>
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">
                  <h6>Projects</h6>
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  <h6>Contact</h6>
                </a>
              </li>
            </ul>
          </div>
        </div>

    </nav>
  );
};

export default Navbar;
