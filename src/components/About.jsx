import Icon from "./Icons.jsx";
import SectionHeader from "./SectionHeader.jsx";

const facts = [
  { icon: "briefcase", label: "Software Developer", detail: "L'Aquila Company" },
  { icon: "book", label: "BSc in Computer Science", detail: "ELTE, graduated 2026" },
  { icon: "pin", label: "Prishtina, Kosovo", detail: "Open to developer roles" },
];

export default function About() {
  return (
    <section className="section section-first" id="about">
      <div className="container">
        <SectionHeader index="01" title="about" />

        <div className="about-row">
          <div className="about-box about-photo">
            {/* Replace the src below to use a different profile photo from public/images. */}
            <img src="/images/profile.JPG" alt="Dion Ismajli" />
          </div>
          <div className="about-text">
            <h3>What I Do</h3>
            <p>
              I am a software developer who builds backend services and web applications. At
              L&apos;Aquila Company I build and maintain internal REST APIs and backend services in
              Java (Spring Boot), and I designed the PostgreSQL schema for an internal asset and
              ticketing tool that replaced spreadsheet tracking. I am also growing on the DevOps
              side: I have containerized internal apps with Docker, set up GitHub Actions pipelines,
              and automated deployment and backup tasks with Bash and Python.
            </p>
          </div>
        </div>

        <div className="about-row about-row-reverse">
          <div className="about-text">
            <h3>My Journey</h3>
            <p>
              While studying Computer Science at Eötvös Loránd University (ELTE), I worked as an IT
              Technician at L&apos;Aquila Company, where I started writing scripts to automate
              routine work. I then interned as a web developer at LimeLightr, building responsive
              websites and reusable front-end components. In 2026 I returned to L&apos;Aquila as a
              Software Developer and completed my degree. Now I am keen to keep growing alongside
              experienced engineers, on the backend and on the DevOps side, where I am currently
              exploring Kubernetes and Terraform.
            </p>
          </div>
          <div className="about-box about-facts">
            <ul>
              {facts.map((fact) => (
                <li key={fact.label}>
                  <span className="fact-icon">
                    <Icon name={fact.icon} size={18} />
                  </span>
                  <span>
                    <strong>{fact.label}</strong>
                    <small>{fact.detail}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
