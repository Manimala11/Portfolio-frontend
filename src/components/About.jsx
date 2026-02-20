import Profile from '../assets/profile.jpeg'
import '../App.css'

const About = () => {
  return (
    <section className="py-5 bg-light" id='about'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-3">About Me</h2>
            <p>I am a passionate MERN Stack Developer with strong knowledge in MongoDB, Express.js, React.js, and Node.js</p>
            <p>I enjoy building responsive and user-friendly web applications.
              Currently looking for opportunities to grow as a Full Stack Developer.</p>
              <a href="#projects" className="btn btn-primary mt-3">
              View My Work
            </a>
          </div>
          <div className="col-md-6 text-center">
            <img src={Profile} alt="Profile" className="img-fluid profile-img shadow-lg rounded" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About