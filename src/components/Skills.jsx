import { skillGroups } from "../data.js";

export default function Skills() {
  return (
    <section className="skills-section section-shell" id="skills">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Skills</p>
          <h2>Technical skills grouped for quick scanning.</h2>
        </div>
        <p>
          A mix of software development, programming fundamentals, debugging, and computer science
          foundations.
        </p>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
