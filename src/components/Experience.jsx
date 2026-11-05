import { education, experience } from "../data.js";
import SectionHeader from "./SectionHeader.jsx";

function TimelineItem({ title, org, duration, bullets }) {
  return (
    <article className="timeline-item">
      <p className="timeline-date">{duration}</p>
      <div className="timeline-body">
        <h4>{title}</h4>
        <p className="timeline-org">{org}</p>
        <ul>
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeader index="02" title="experience" subtitle="Where I've Worked" />
        <div className="timeline">
          {experience.map((item) => (
            <TimelineItem
              key={`${item.role}-${item.company}`}
              title={item.role}
              org={item.company}
              duration={item.duration}
              bullets={item.bullets}
            />
          ))}
        </div>

        <h3 className="subsection-title">Education</h3>
        <div className="timeline">
          {education.map((item) => (
            <TimelineItem
              key={`${item.title}-${item.school}`}
              title={item.title}
              org={item.school}
              duration={item.duration}
              bullets={item.bullets}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
