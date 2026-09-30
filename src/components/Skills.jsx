function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <span className="eyebrow">Skills</span>

        <div className="skill-grid">
          <div className="skill-cat">
            <h3>Languages</h3>
            <div className="skill-tags">
              <span>Python</span>
              <span>C++</span>
              <span>C</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="skill-cat">
            <h3>Full-Stack</h3>
            <div className="skill-tags">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST APIs</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
          </div>

          <div className="skill-cat">
            <h3>Database</h3>
            <div className="skill-tags">
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;