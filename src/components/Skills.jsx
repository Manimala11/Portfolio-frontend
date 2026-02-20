import html5 from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongo from '../assets/mongo.png'
import react from '../assets/react.png'
import bs from '../assets/bootstrap.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import vercel from '../assets/vercel.png'
import postman from '../assets/postman.png'
import insomnia from '../assets/insomnia.png'
import vs from '../assets/vs.png'

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      img : html5
    },
    {
      name: "CSS",
      img : css
    },
    {
      name: "JavaScript",
      img : js
    },
    {
      name: "React.js",
      img : react
    },
    {
      name: "Node.js",
      img : node
    },
    {
      name: "Express.js",
      img : express
    },
    {
      name: "MongoDB",
      img : mongo
    },
    {
      name: "Bootstrap",
      img : bs
    },
    
  ]
  
  const tools = [
    {
      name: "Git",
      img: git
    },
    {
      name: "GitHub",
      img: github
    },
    {
      name: "Postman",
      img: postman
    },
    {
      name: "Insomnia",
      img: insomnia
    },
    {
      name: "VS Code",
      img: vs
    },
    {
      name: "Vercel",
      img: vercel
    },
  ]
  return (
    <section id='skills' className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">My SKills</h2>
        
        <h4 className="fw-bold mb-3">Technical Skills</h4>
        <div className="row g-4 mb-5">
          {skills.map((skill,index)=>(
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div className="card bg-dark text-center shadow-sm h-100">
                <div className="card-body">
                  <img src={skill.img}  alt={skill.name} className="img-fluid" height={100} width={100} />
                  <h5 className="card-title text-white">{skill.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h4 className="fw-bold mb-3">Tools & Platforms</h4>
        <div className="row g-4">
          {tools.map((tool, index)=>(
            <div className="col-6 col-md-4 col-lg-3 " key={index}>
              <div className="card bg-secondary text-center shadow-sm h-100">
                <div className="card-body">
                  <img src={tool.img} alt={tool.name} className="img-fluid"  height={100} width={100} />
                  <h5 className="card-title text-white">{tool.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills