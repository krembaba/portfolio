import Icon from "./Icons.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <svg className="footer-wave" viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true">
        <path
          className="wave-back"
          d="M0 70 C 120 20, 240 20, 360 60 S 600 110, 720 60 S 960 10, 1080 55 S 1320 105, 1440 50 L1440 140 L0 140 Z"
        />
        <path
          className="wave-front"
          d="M0 100 C 160 60, 300 70, 420 95 S 680 130, 840 90 S 1140 50, 1280 85 S 1400 110, 1440 95 L1440 140 L0 140 Z"
        />
      </svg>
      <div className="footer-inner">
        <span className="footer-logo">&lt;DI /&gt;</span>
        <p>Dion Ismajli · Software Developer</p>
        <p className="footer-copy">
          © {new Date().getFullYear()} Dion Ismajli · Built with React &amp; Vite
        </p>
        <a className="footer-top" href="#home">
          <Icon name="arrowUp" size={16} />
          Back to top
        </a>
      </div>
    </footer>
  );
}
