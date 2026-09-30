import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    title: "Venture Link",
    category: "Full-Stack Platform",
    description:
      "An end-to-end community collaboration platform enabling entrepreneurs to pitch ideas and connect with mentors and angel investors. The platform is designed around structured user profiles, project discovery, and REST API-driven data transactions.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/paarjun2007",
  },

  {
    number: "02",
    title: "EV Emergency Solar Backup Charging System",
    category: "Hardware / Energy",
    description:
      "A solar-powered emergency charging concept designed to provide backup charging support for electric vehicles when conventional charging infrastructure is unavailable.",
    stack: ["Solar", "EV", "Arduino", "Power Electronics"],
    github: "https://github.com/paarjun2007",
  },

  {
    number: "03",
    title: "Dual Battery Switcher Logic for EV Bikes",
    category: "Embedded Systems",
    description:
      "A battery switching prototype designed to manage dual battery sources for electric vehicles, with sensing and relay-based switching logic to improve operational continuity.",
    stack: ["Arduino Uno", "Relay", "ACS712", "Battery Management"],
    github: "https://github.com/paarjun2007",
  },
];

function Projects({ preview = false }) {
  const displayedProjects = preview
    ? projects.slice(0, 2)
    : projects;

  return (
    <section className="projects-section" id="projects">
      <div className="wrap">

        <Reveal>
          <div className="projects-heading">
            <div>
              <span className="eyebrow">Selected Work</span>

              <h2>
                Projects I've built
              </h2>
            </div>

            {!preview && (
              <span className="project-count">
                {projects.length.toString().padStart(2, "0")} projects
              </span>
            )}
          </div>
        </Reveal>

        <div className="project-list">
          {displayedProjects.map((project, index) => (
            <Reveal key={project.title}>
              <article className="project-card">

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-main">

                  <div className="project-top">
                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>
                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-bottom">

                    <div className="project-stack">
                      {project.stack.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View project
                      <span className="project-arrow">↗</span>
                    </a>

                  </div>
                </div>

              </article>
            </Reveal>
          ))}
        </div>

        {preview && (
          <Reveal>
            <div className="projects-more">
              <a href="/projects" className="project-link">
                View all projects
                <span className="project-arrow">→</span>
              </a>
            </div>
          </Reveal>
        )}

      </div>
    </section>
  );
}

export default Projects;