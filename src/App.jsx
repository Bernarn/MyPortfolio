import { certifications, experience, projects, toolkit } from './data.js';

const linkedInUrl = 'https://www.linkedin.com/in/bernard-godonou-21706327b/';

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Bernard Godonou, home">
        BG<span>.</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#toolkit">Toolkit</a>
        <a className="nav-contact" href="#contact">
          Contact <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" />Backend engineering · Nairobi, Kenya</p>
        <h1 id="hero-title">Bernard<br /><span>Godonou</span></h1>
        <p className="hero-role">Backend &amp; Distributed Systems Engineer</p>
        <p className="hero-intro">
          I build secure APIs, payment infrastructure, and privacy-preserving machine learning systems for a more connected financial world.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
          <a className="text-link" href="mailto:bernardgodonou98@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-meta">
          <span>Python · Node.js · Java</span>
          <span>Open to engineering opportunities</span>
        </div>
      </div>
      <div className="hero-visual" role="img" aria-label="Close-up view of a computer circuit board">
        <div className="visual-caption"><span>01 / 04</span><span>Systems that move value</span></div>
        <div className="visual-mark" aria-hidden="true">BG</div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to introduction">Scroll to explore <span aria-hidden="true">↓</span></a>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro section-shell" id="about" aria-labelledby="intro-title">
      <p className="section-index">01 — Approach</p>
      <div className="intro-copy">
        <h2 id="intro-title">Reliable systems.<br /><span>Thoughtful by design.</span></h2>
        <p>My work sits at the intersection of backend engineering, fintech, and security. I enjoy solving the hard parts: reliable service boundaries, interoperable payment flows, and useful machine learning that respects the data it learns from.</p>
        <p>Currently focused on distributed systems and cross-border financial technology, with hands-on experience across Python, Node.js, Java, and Docker-based deployments.</p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="work section-shell" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div><p className="section-index">02 — Selected projects</p><h2 id="work-title">Built to solve<br />real problems.</h2></div>
        <p className="section-note">Engineering work across fintech, privacy, inventory, and security.</p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-row" key={project.number}>
            <span className="project-number">{project.number}</span>
            <div className="project-main">
              <p className="project-type">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
            </div>
            <span className="project-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience section-shell" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <div><p className="section-index">03 — Experience</p><h2 id="experience-title">Where I’ve<br />made an impact.</h2></div>
        <p className="section-note">Engineering, infrastructure, and security across research and product environments.</p>
      </div>
      <div className="experience-list">
        {experience.map((role) => (
          <article className="experience-row" key={role.role}>
            <p className="experience-date">{role.date}</p>
            <div>
              <h3>{role.role}</h3>
              <p className="experience-org">{role.organization}</p>
              <p>{role.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Toolkit() {
  return (
    <section className="toolkit section-shell" id="toolkit" aria-labelledby="toolkit-title">
      <div className="section-heading">
        <div><p className="section-index">04 — Toolkit</p><h2 id="toolkit-title">Tools for the<br />work at hand.</h2></div>
        <p className="section-note">A practical stack for building, securing, and operating backend systems.</p>
      </div>
      <div className="toolkit-grid">
        {toolkit.map((group) => (
          <div className="tool-group" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.items}</p>
          </div>
        ))}
      </div>
      <p className="learning-note"><span>In progress</span> PyTorch · Google Professional Cloud Architect · ISHEERO Fellowship</p>
    </section>
  );
}

function Certifications() {
  return (
    <section className="credentials section-shell" aria-labelledby="credentials-title">
      <p className="section-index">05 — Certifications</p>
      <div className="credentials-content">
        <h2 id="credentials-title">Learning never<br />ships its final version.</h2>
        <div className="credential-list">
          {certifications.map((certification) => (
            <p key={certification.name}>{certification.name}<span>{certification.provider}</span></p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
      <p className="section-index">06 — Contact</p>
      <div className="contact-content">
        <h2 id="contact-title">Have a system<br />worth building?</h2>
        <a className="contact-email" href="mailto:bernardgodonou98@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a>
        <div className="contact-details">
          <a href="mailto:bernardgodonou98@gmail.com">bernardgodonou98@gmail.com</a>
          <a href="tel:+254794351869">+254 794 351 869</a>
          <a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <span>Nairobi, Kenya</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="wordmark" href="#home" aria-label="Back to top">BG<span>.</span></a>
      <p>© {new Date().getFullYear()} Bernard Godonou</p>
      <a href="#home">Back to top ↑</a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Projects />
        <Experience />
        <Toolkit />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
