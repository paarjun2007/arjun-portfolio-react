function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-content">
        <h1>Arjun PA</h1>

        <p className="hero-description">
          Computer Science Engineering student building full-stack web
          applications and database-driven systems, with a parallel
          interest in hardware prototyping and applied electronics.
        </p>

        <p className="hero-location">
          Tiruchirappalli, Tamil Nadu, India
        </p>

        <div className="hero-buttons">
          <a
            href="mailto:paarjun2006@gmail.com"
            className="btn btn-primary"
          >
            Email me
          </a>

          <a
            href="https://github.com/paarjun2007"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/arjun-padmanaban-71379638"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;