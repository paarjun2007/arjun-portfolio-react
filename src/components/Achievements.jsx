import Reveal from "./Reveal";

const achievements = [
  {
    title: "J.P. Morgan Chase & Co.",
    description:
      "Completed the Quantitative Research Job Simulation through Forage, covering price analysis, credit risk, and FICO score bucketing.",
  },

  {
    title: "Google — The Big Code 2026",
    description:
      "Secured a position within the top 15,000 engineering candidates in India during the qualification track.",
  },

  {
    title: "MongoDB University",
    description:
      "Earned credentials in MongoDB Atlas Architecture, Advanced Document Modeling, and Database Transactions.",
  },

  {
    title: "IBM SkillsBuild",
    description:
      "Completed micro-credentials in Core AI Literacy and Foundational Artificial Intelligence Engineering.",
  },
];

function Achievements() {
  return (
    <section className="alt" id="achievements">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">
            Achievements & Certifications
          </span>

          {achievements.map((item) => (
            <div className="ach" key={item.title}>
              <p>
                <strong>{item.title}</strong>
                {" — "}
                {item.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default Achievements;