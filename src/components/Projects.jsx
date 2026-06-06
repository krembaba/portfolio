import { projects } from "../data.js";

function ProjectMedia({ project }) {
  if (project.mediaType === "image" && project.mediaSrc) {
    return (
      // Replace mediaSrc in src/data.js with your real project screenshot path, e.g. /images/learnix.png.
      <img src={project.mediaSrc} alt={project.mediaAlt} />
    );
  }

  if (project.mediaType === "video" && project.mediaSrc) {
    return (
      // Replace mediaSrc in src/data.js with your real preview video path, e.g. /videos/route-and-riches.mp4.
      <video src={project.mediaSrc} aria-label={project.mediaAlt} autoPlay muted loop playsInline />
    );
  }

  return (
    // Default placeholder. Replace this with an image or video by setting mediaType and mediaSrc in src/data.js.
    <div className="project-placeholder">
      <div className="placeholder-window">
        <span />
        <span />
        <span />
      </div>
      <strong>{project.mediaLabel}</strong>
      <p>{project.mediaAlt}</p>
    </div>
  );
}

function ProjectIcon({ icon, title }) {
  const isImagePath = typeof icon === "string" && icon.startsWith("/");

  if (isImagePath) {
    return (
      // Add project logos in public/images and set icon in src/data.js, e.g. /images/learnix-logo.png.
      <img src={icon} alt={`${title} logo`} />
    );
  }

  return icon;
}

export default function Projects() {
  return (
    <section className="projects section-shell" id="projects">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Selected Projects</p>
          <h2>Portfolio work with full-stack and interactive systems focus.</h2>
        </div>
        <p>
          Each project card has placeholder links and image areas that can be replaced when demos,
          screenshots, or repositories are ready.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-media">
              <ProjectMedia project={project} />
              <div className="project-icon" aria-hidden="true">
                <ProjectIcon icon={project.icon} title={project.title} />
              </div>
            </div>
            <div className="project-body">
              <p className="project-number">0{index + 1}</p>
              <h3>
                {project.title} <span>{project.category}</span>
              </h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="card-actions">
                <a className="button button-ghost" href={project.githubUrl}>
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
