import Reveal from "./Reveal";

function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Education</span>

          <div className="edu-row">
            <div>
              <h3 className="edu-title">
                SRM Institute of Science and Technology, Trichy
              </h3>

              <p className="edu-degree">
                B.Tech in Computer Science and Engineering
              </p>

              <p className="edu-meta">
                CGPA 8.8/10 · Class 12: 77.7% · Class 10: 79.4%
              </p>
            </div>

            <div className="edu-year">
              2024 – 2028
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Education;