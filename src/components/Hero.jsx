import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Sandip Chakroborty</h1>

        <h2>Network Engineer | AWS Solutions Architect | Google Cloud PCA</h2>

        <p>
          I have 12+ years of experience in enterprise networking, security,
          cloud infrastructure, and DevOps. I specialize in AWS, Google Cloud,
          Kubernetes, Docker, Cisco, Fortinet, and Check Point technologies.
        </p>

        <div className="hero-buttons">
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Download Resume
          </a>

          <a href="#contact">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;