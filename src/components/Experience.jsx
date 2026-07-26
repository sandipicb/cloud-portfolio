import "./Experience.css";

const experiences = [
  {
    company: "Investment Corporation of Bangladesh",
    role: "Engineer (IT)",
    period: "June 2013 - Present",
    achievements: [
      "Managed enterprise network infrastructure.",
      "Configured Cisco routers, switches, and ASA firewalls.",
      "Administered Fortinet and Check Point security solutions.",
      "Designed secure cloud infrastructure on Google Cloud and AWS.",
      "Managed virtualization, servers, and backup systems.",
    ],
  },
  {
    company: "Ruposhi Bangla Hotel",
    role: "IT Executive",
    period: "April 2010 - June 2013",
    achievements: [
      "Maintained LAN/WAN infrastructure.",
      "Configured Windows Server and Active Directory.",
      "Managed network users and security.",
      "Provided IT support across departments.",
    ],
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2>Professional Experience</h2>

      <div className="timeline">
        {experiences.map((job, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>{job.role}</h3>
              <h4>{job.company}</h4>
              <span>{job.period}</span>

              <ul>
                {job.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;