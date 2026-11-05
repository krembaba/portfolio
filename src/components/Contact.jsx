import { contact } from "../data.js";
import Icon from "./Icons.jsx";
import SectionHeader from "./SectionHeader.jsx";

const details = [
  { icon: "mail", label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: "phone", label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  { icon: "pin", label: "Location", value: contact.location },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeader index="05" title="contact" />
        <div className="about-row">
          <div className="about-box contact-details">
            <ul>
              {details.map((item) => (
                <li key={item.label}>
                  <span className="fact-icon">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <span>
                    <small>{item.label}</small>
                    {item.href ? <a href={item.href}>{item.value}</a> : <strong>{item.value}</strong>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-text">
            <h3>Let&apos;s build something together.</h3>
            <p>
              I am open to software developer roles, whether backend, full-stack, or DevOps-leaning,
              especially on teams where I can learn from experienced engineers and grow quickly.
            </p>
            <div className="contact-actions">
              <a className="button button-outline" href={`mailto:${contact.email}`}>
                <Icon name="mail" size={16} />
                Email
              </a>
              <a className="button button-outline" href={contact.linkedin}>
                <Icon name="linkedin" size={16} />
                Connect on LinkedIn
              </a>
              <a className="button button-outline" href={contact.github}>
                <Icon name="github" size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
