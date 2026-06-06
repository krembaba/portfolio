import { navItems } from "../data.js";

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Dion Ismajli home">
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
    </header>
  );
}
