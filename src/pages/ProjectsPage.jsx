import Projects from "../components/Projects";
import Reveal from "../components/Reveal";

function ProjectsPage() {
  return (
    <div className="projects-page">

      <section className="page-header">
        <div className="wrap">

          <Reveal>
            <span className="eyebrow">
              Selected Work
            </span>

            <h1>
              Projects I've built
            </h1>

            <p>
              A collection of software, hardware, and
              problem-solving projects developed through
              coursework, experimentation, and practical
              prototyping.
            </p>
          </Reveal>

        </div>
      </section>

      <Projects />

    </div>
  );
}

export default ProjectsPage;