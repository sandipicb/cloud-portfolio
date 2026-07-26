import "./Hero.css";
import profile from "../assets/images/profile.png";
import gcpPcaBadge from "../assets/images/gcp-pca.png";
import gcpBadge from "../assets/images/gcp-ace.png";
import awsBadge from "../assets/images/aws-badge.png";


import { TypeAnimation } from "react-type-animation";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Hi, I'm Sandip Chakroborty</h1>

        <TypeAnimation
          sequence={[
            "Infrastructure Engineer",
            1500,
            "GCP Professional Cloud Architect",
            1500,
            "AWS Solution Architect",
            1500,
            "Google Cloud Engineer",
            1500,
            "Cloud Architect",
            1500,
          ]}
          wrapper="h2"
          repeat={Infinity}
        />
        <p>
          I design secure, scalable, and cost-effective cloud and enterprise network
          solutions using AWS, Google Cloud, Kubernetes, Docker, and modern networking
          technologies.
        </p>

        <div className="hero-buttons">
          <a href="/resume.pdf" target="_blank" rel="nonreferrer">
            Download Resume
          </a>
          <a href="#contact">
            Contact Me
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <h3>12+</h3>
            <p>Years of Experience</p>
          </div>

          <div className="stat">
            <h3>50+</h3>
            <p>Projects</p>
          </div>

          <div className="stat">
            <h3>3</h3>
            <p>Cloud Certifications</p>
          </div>
        </div>

        <div className="social-icons">
          <a href="https://linkedin.com/in/sandip-chakroborty-35b219195" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://github.com/sandipicb" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="mailto:sandipcloudtech@gmail.com">
            <FaEnvelope />
          </a>

        </div>
      </div>
      <div className="hero-right">
        <img src={profile} alt="Profile" className="profile-photo" />
        <div className="certifications">
          <img src={gcpPcaBadge} alt="GCP PCA" />
          <img src={gcpBadge} alt="GCP" />
          <img src={awsBadge} alt="AWS" />

        </div>
      </div>
    </section>
  );
}
export default Hero; 