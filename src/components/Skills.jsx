import "./Skills.css";

function Skills() {
    return (
        <section className="skills" id="skills">
            <h2>Technical Skills</h2>

            <div className="skills-grid">
                <div className="skill-card">
                    <h3>☁️ Cloud</h3>
                    <p>AWS, Google Cloud, Cloud Run, Compute Engine, GKE, Cloud Storage</p>
                </div>

                <div className="skill-card">
                    <h3>🌐 Networking</h3> 
                    <p>Cisco, Routing, Switching, VLAN, OSPF, BGP, VPN</p>
                </div>

                <div className="skill-card">
                    <h3>⚙️ DevOps</h3>
                    <p>Docker, Kubernetes, Git, GitHub, Terraform, CI/CD</p>
                </div>
            </div>
        </section>
    );
}

export default Skills;