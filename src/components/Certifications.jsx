import "./Certifications.css";

import awsBadge from "../assets/images/aws-badge.png";
import gcpAce from "../assets/images/gcp-ace.png";
import gcpPca from "../assets/images/gcp-pca.png";

function Certifications() {

    const certs = [
        {
            title: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            image: awsBadge,
        },
        {
            title: "Google Cloud Professional Architect",
            issuer: "Google Cloud",
            image: gcpPca
        },
        {
            title: "Google Cloud Associate Cloud Engineer",
            issuer: "Google Cloud",
            image: gcpAce
        },

    ];

    return (
        <section className="certifications-section" id="certifications">
            <h2>Professional Certifications</h2>
            <div className="cert-grid">
                {certs.map((cert, index) => (
                    <div className="cert-card" key={index}>
                        <img src={cert.image} alt={cert.title} />
                        <h3>{cert.title}</h3>
                        <p>{cert.issuer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;