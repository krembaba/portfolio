import { education, experience } from "../data.js";

function TimelineCard({ item, type }) {
  return (
    <article className="timeline-card">
      <div>
        <p className="timeline-type">{type}</p>
        <h3>{item.role || item.title}</h3>
        <span>{item.company || item.school}</span>
      </div>
      <time>{item.duration}</time>
      <ul>
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Experience() {
  return (
    <section className="experience section-shell" id="experience">
      <div className="section-heading">
        <p className="eyebrow">Experience & Education</p>
        <h2>Real practice, academic foundation, and steady development.</h2>
      </div>
      <div className="timeline-grid">
        {experience.map((item) => (
          <TimelineCard key={`${item.role}-${item.company}`} item={item} type="Experience" />
        ))}
        {education.map((item) => (
          <TimelineCard key={`${item.title}-${item.school}`} item={item} type="Education" />
        ))}
      </div>
    </section>
  );
}
