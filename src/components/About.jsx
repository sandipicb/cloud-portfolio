import "./About.css";

function About() {
    return (
        <section className="about-section" id="about">
            <div className="about-container">``
                <h2>About Me</h2>

                <p className="about-intro">
                    I'm <strong>Sandip Chakroborty</strong>, an IT professional with over
                    12 years of experience in enterprise networking, infrastructure, and
                    cloud technologies. My passion is designing secure, scalable, and
                    cost-effective solutions that help organizations modernize their IT
                    environments.
                </p>

                <div className="about-grid">
                    <div className="about-card">
                        <h3>☁️ Cloud</h3>
                        <p>
                            Experienced with Google Cloud Platform, AWS, Cloud Run,
                            Kubernetes, Docker, IAM, VPC, Compute Engine, Cloud Storage, and
                            CI/CD pipelines.
                        </p>
                    </div>
                    <div className="about-card">
                        <h3>🌐 Networking</h3>
                        <p>
                            12+ years managing enterprise networks, routing, switching,
                            wireless infrastructure, VPNs, and high-availability
                            environments.
                        </p>
                    </div>

                    <div className="about-card">
                        <h3>🔒 Security</h3>
                        <p>
                            Hands-on experience with Cisco ASA, Fortinet, Check Point
                            firewalls, network segmentation, IAM, and cloud security best
                            practices.
                        </p>
                    </div>

                    <div className="about-card">
                        <h3>⚙️ DevOps</h3>
                        <p>
                            Building containerized applications with Docker, deploying to
                            Cloud Run, using GitHub, Git, and modern CI/CD workflows.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default About;