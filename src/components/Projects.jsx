import "./Projects.css";

function Projects() {
    const projects = [
        {
            title: "Google Cloud Portfolio Website",
            description: "Designed and deployed a React portfolio on Google Cloud Run using Docker, integrated with Cloudflare for custom domain management.",
            technologies: "React • Docker • Cloud Run • Cloudflare",

        },
        {
            title: "Enterprise GKE Monitoring",
            description: "Configured Google Kubernetes Engine with Managed Prometheus for application and infrastructure monitoring.",
            technologies: "GKE • Prometheus • Kubernetes",
        },
        {
            title: "AWS Infrastructure Design",
            description: "Designed secure and scalable AWS architectures with VPCs, IAM, EC2, and load balancing following AWS best practices.",
            technologies: "AWS • IAM • VPC • EC2",
        },
    ];

    return (
        <section className="projects" id="projects">
            <h2>Projects & Cloud Engineering</h2>

            <div className="project-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <span>{project.technologies}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;

