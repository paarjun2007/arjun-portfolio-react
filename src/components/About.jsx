import Reveal from "./Reveal";

function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">About</span>

          <div className="about">
            <p>
              I'm a Computer Science and Engineering student at SRM
              Institute of Science and Technology, Trichy, with hands-on
              experience in full-stack development, REST APIs,
              database-driven applications, and hardware prototyping.
            </p>

            <p>
              I'm interested in building practical software solutions
              using modern web technologies, databases, and machine
              learning — and I like taking those ideas as far as a
              working prototype, whether that means shipping an API or
              wiring a circuit.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;