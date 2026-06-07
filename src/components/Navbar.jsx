import { useState } from "react";
import { navItems } from "../data.js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileItems = [...navItems, ["Contact", "#contact"]];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${isOpen ? "is-open" : ""}`}>
      <a className="brand" href="#home" aria-label="Dion Ismajli home" onClick={closeMenu}>
        <span className="brand-mark">DI</span>
        <span>Dion Ismajli</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#contact">
        Let&apos;s Talk
      </a>
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
      <nav className="mobile-menu" aria-label="Mobile navigation">
        {mobileItems.map(([label, href]) => (
          <a key={label} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a className="mobile-talk" href="#contact" onClick={closeMenu}>
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  );
}
