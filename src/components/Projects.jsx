import { useState } from "react";
import luxora from "../assets/Luxora.png";
import movie from "../assets/MovieTicketBooking.png"
import booksky from '../assets/booksky.png'
import ecommerce from '../assets/ecommerce.png'
import rideon from '../assets/rideon.png'
import healthfirst from '../assets/healthfirst.png'
import '../App.css'

const Projects = () => {
 

  const projects = [
    {
      title: "Luxora",  
      description: "Luxora is a luxury e-commerce web application built using the MERN stack. It includes secure authentication, dynamic product management, cart functionality, and a fully responsive user interface.",
      tech: "React, Node.js, Express.js, MongoDB, JavaScript",
      github: "https://github.com/Manimala11/Luxora-Frontend",
      live: "https://luxora-frontend-two.vercel.app/",
      image: luxora,
    },
    {
      title: "Movie Ticket Booking",
      description: "A responsive movie ticket booking frontend application built with React.js. It integrates with an existing backend API to fetch movie data, supports Google OAuth authentication, cart functionality, and detailed movie pages.",
      tech: "React, JavaScript, Bootstrap, Google OAuth",
      github: "https://github.com/Manimala11/Movie-Ticket-Booking",
      live: "https://movie-ticket-booking-eosin.vercel.app/",
      image: movie,
    },
    {
      title: "Booksky",
      description: "Book Sky is a book management web application. It allows users to add and remove books with descriptions, demonstrating DOM manipulation and dynamic content rendering",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/Manimala11/Booksky",
      live: "https://booksky-sepia.vercel.app/",
      image: booksky,
    },
    {
      title: "E-Commerce Store",
      description: "A responsive e-commerce frontend application built with React.js that fetches product data from an API. It includes search functionality, category filtering, and dynamic product rendering.",
      tech: "React, JavaScript, Bootstrap",
      github: "https://github.com/Manimala11/E-Commerce",
      live: "https://e-commerce-khaki-kappa-96.vercel.app/",
      image: ecommerce,
    },
    {
      title: "RideOn",
      description: "A responsive multi-page cab booking website built with HTML, CSS, and Bootstrap, featuring booking form, fleet display, and modern UI design.",
      tech: "HTML, CSS, Bootstrap, Font Awesome",
      github: "https://github.com/Manimala11/RIDEON",
      live: "https://rideon-amber.vercel.app/",
      image: rideon,
    },
    {
      title: "HealthFirst",
      description: "Responsive health & nutrition website with blog, BMI calculator, and interactive design built using HTML, CSS & Bootstrap.",
      tech: "HTML, CSS, Bootstrap",
      github: "https://github.com/Manimala11/HealthFirst",
      live: "https://health-first-alpha.vercel.app/",
      image: healthfirst,
    },
  ];
  return (
    <section className="py-5" id="projects" style={{background: "#0a0a2c"}}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-white">My Projects</h2>
        <div className="row g-4">
          {projects.map((project, index)=>(
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="project-card">
                <img src={project.image} alt={project.title} className="img-fluid rounded" />
                <div className="project-overlay p-3 text-white">
                  <h5>{project.title}</h5>
                  <p className="small">{project.description}</p>
                  <p className="small">
                    <strong>Tech:</strong> {project.tech}     
                  </p>
                  <div className="mt-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm me-2">Code</a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Live</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
