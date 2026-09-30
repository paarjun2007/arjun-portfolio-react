import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <div>
      <section className="contact">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">
              Get in touch
            </span>

            <h2>
              Building something interesting?
              I'd like to hear about it.
            </h2>

            <p className="contact-subtitle">
              Whether it's a software project, a technical
              collaboration, or an interesting idea, feel free
              to reach out.
            </p>

            <div className="contact-layout">
              <div className="contact-links">
                <a href="mailto:paarjun2006@gmail.com">
                  <span className="k">Email</span>
                  <span>paarjun2006@gmail.com</span>
                </a>

                <a href="tel:+919865179222">
                  <span className="k">Phone</span>
                  <span>+91 98651 79222</span>
                </a>

                <a
                  href="https://github.com/paarjun2007"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="k">GitHub</span>
                  <span>github.com/paarjun2007</span>
                </a>

                <a
                  href="https://linkedin.com/in/arjun-padmanaban-71379638"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="k">LinkedIn</span>
                  <span>/in/arjun-padmanaban</span>
                </a>
              </div>

              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;