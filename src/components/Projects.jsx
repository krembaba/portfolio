import { projects } from "../data.js";
import Icon from "./Icons.jsx";
import SectionHeader from "./SectionHeader.jsx";

function ProjectThumb({ project }) {
  // Set mediaType to "image" or "video" and mediaSrc in src/data.js to show a screenshot or clip.
  if (project.mediaType === "image" && project.mediaSrc) {
    return (
      <img
        src={project.mediaSrc}
        alt={project.mediaAlt}
        loading="lazy"
        style={project.mediaPosition ? { objectPosition: project.mediaPosition } : undefined}
      />
    );
  }

  if (project.mediaType === "video" && project.mediaSrc) {
    return (
      <video src={project.mediaSrc} aria-label={project.mediaAlt} autoPlay muted loop playsInline />
    );
  }

  return <img className="thumb-icon" src={project.icon} alt={project.mediaAlt} />;
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeader index="03" title="projects" subtitle="Things I've Built">
          These projects show how I approach real software: clear structure, practical user flows,
          and technical decisions across web platforms, interactive Java applications, and the
          tooling that ships them.
        </SectionHeader>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-thumb">
                <ProjectThumb project={project} />
              </div>
              <div className="project-content">
                <div className="project-title">
                  {project.icon && <img src={project.icon} alt="" aria-hidden="true" />}
                  <h4>{project.title}</h4>
                </div>
                <p className="project-category">
                  <span aria-hidden="true">// </span>
                  {project.category}
                </p>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">
                  {project.technologies.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a className="project-link" href={project.githubUrl}>
                  <Icon name="github" size={16} />
                  View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
