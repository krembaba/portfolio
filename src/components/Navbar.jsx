import { useState } from "react";
import { contact, navItems } from "../data.js";
import Icon from "./Icons.jsx";

const socials = [
  { label: "LinkedIn", href: contact.linkedin, icon: "linkedin" },
  { label: "GitHub", href: contact.github, icon: "github" },
  { label: "Email", href: `mailto:${contact.email}`, icon: "mail" },
];

// Shows "About" as "~/about"; the prefix is hidden from screen readers.
function NavLabel({ label }) {
  return (
    <>
      <span className="nav-prefix" aria-hidden="true">
        ~/
      </span>
      {label.toLowerCase()}
    </>
  );
}

function SocialLinks() {
  return socials.map(({ label, href, icon }) => (
    <a key={label} href={href} aria-label={label} title={label}>
      <Icon name={icon} size={20} />
    </a>
  ));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${isOpen ? "is-open" : ""}`}>
      <div className="navbar-inner">
        <a className="brand" href="#home" aria-label="Dion Ismajli home" onClick={closeMenu}>
          &lt;DI /&gt;
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>
              <NavLabel label={label} />
            </a>
          ))}
        </nav>
        <div className="nav-socials">
          <SocialLinks />
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav className="mobile-menu" aria-label="Mobile navigation">
        {navItems.map(([label, href]) => (
          <a key={label} href={href} onClick={closeMenu}>
            <NavLabel label={label} />
          </a>
        ))}
        <div className="mobile-socials">
          <SocialLinks />
        </div>
      </nav>
    </header>
  );
}
