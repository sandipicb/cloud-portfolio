import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

function Contact() {
    return (
        <section className="contact" id="contact">
            <h2>Get in Touch</h2>

            <p>
                I'm available for Cloud, Networking, Security, and DevOps projects.
            </p>

            <div className="contact-grid">
                <div className="contact-card">
                    <FaEnvelope className="contact-icon" />
                    <h3>Email</h3>
                    <p>sandipcloudtech@gmail.com</p>
                </div>

                <div className="contact-card">
                    <FaLinkedin />
                    <h3>LinkedIn</h3>
                    <p>github.com/sandipicb</p>
                </div>
                
                <div className="contact-card">
                    <FaPhone />
                    <h3>Location</h3>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
        </section>
    )
};

export default Contact;
