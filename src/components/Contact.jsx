import { contact } from "../data.js";

export default function Contact() {
  return (
    <section className="contact section-shell" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s build something practical.</h2>
        <p>
          I am open to internship opportunities, junior developer roles, and projects where I can
          contribute, learn, and improve in a professional environment.
        </p>
      </div>
      <div className="contact-panel">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        <span>{contact.location}</span>
        <a href={contact.linkedin}>LinkedIn</a>
        <a href={contact.github}>GitHub</a>
      </div>
    </section>
  );
}
