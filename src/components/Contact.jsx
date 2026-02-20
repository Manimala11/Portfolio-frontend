import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      await axios.post(`${API_URL}/api/contact`, formData);

      setStatus("success");
      setTimeout(()=>setStatus(""),3000);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-5 bg-light" id="contact">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Contact Me</h2>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form onSubmit={handleSubmit} className="card shadow p-4">
              {status === "success" && (
                <div className="alert alert-success">
                  Message sent successfully
                </div>
              )}
             
              {status === "error" && (
                <div className="alert alert-danger">
                  Something went wrong. Please try again.
                </div>
              )}
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark w-100 fw-semibold" disabled={loading}>
                {loading ? "sending...": "send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
