import Reveal from "./Reveal";

function Experience() {
  return (
    <section className="alt" id="experience">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Experience</span>

          <div className="tl-item">
            <div className="tl-date">
              Dec 2025 – Jan 2026
            </div>

            <div>
              <div className="tl-role">
                Full Stack Development Intern
              </div>

              <div className="tl-org">
                VDart · Remote / Trichy, India
              </div>

              <ul>
                <li>
                  Developed an enterprise PDF Management System using
                  React.js and Node.js for document uploading, indexing,
                  and organization.
                </li>

                <li>
                  Integrated full-stack REST APIs connecting frontend
                  workflows with backend document-processing services.
                </li>

                <li>
                  Used Git and GitHub for version control and
                  collaborative development.
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;