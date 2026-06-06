export default function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Portfolio · Full-Stack Development · Computer Science</p>
        <h1>Dion Ismajli</h1>
        <p className="hero-role">Full-Stack Developer & Computer Science Student</p>
        <p className="hero-subtitle">
          Final-year Computer Science student at ELTE with a strong interest in full-stack
          development, software engineering, and interactive systems.
        </p>
        <p className="hero-intro">
          I build clean, practical, and user-focused software using modern web technologies, Java,
          and strong computer science fundamentals.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View Projects
          </a>
          <a className="button button-secondary" href="#contact">
            Contact Me
          </a>
          <a className="button button-ghost" href="#" download>
            Download CV
          </a>
        </div>
      </div>

      <div className="hero-visual">
        {/* Replace the src below if you want to use a different profile photo from public/images. */}
        <div className="profile-placeholder">
          <img src="/images/profile.JPG" alt="Dion Ismajli" />
        </div>
        <div className="orb orb-one" />
        <div className="orb orb-two" />
      </div>
    </section>
  );
}
