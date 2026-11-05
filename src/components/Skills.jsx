import { skillGroups } from "../data.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeader index="04" title="skills" subtitle="Tools I Work With">
          The languages, frameworks, and tools I build with, from backend services and front-end
          interfaces to the DevOps tooling that ships them.
        </SectionHeader>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-box" key={group.title}>
              <h4>{group.title}</h4>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span className="tag tag-plain" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
