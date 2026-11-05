import Icon from "./Icons.jsx";

// Each line is a list of [tokenType, text] pairs, rendered with syntax colours.
const codeLines = [
  [["kw", "const"], ["var", " dion"], ["pn", " = {"]],
  [["prop", "  role"], ["pn", ": "], ["str", '"Software Developer"'], ["pn", ","]],
  [["prop", "  location"], ["pn", ": "], ["str", '"Prishtina, Kosovo"'], ["pn", ","]],
  [["prop", "  education"], ["pn", ": "], ["str", '"BSc CS @ ELTE, 2026"'], ["pn", ","]],
  [["prop", "  stack"], ["pn", ": ["], ["str", '"Java"'], ["pn", ", "], ["str", '"Spring Boot"'], ["pn", ","]],
  [["pn", "          "], ["str", '"Node.js"'], ["pn", ", "], ["str", '"React"'], ["pn", ", "], ["str", '"Docker"'], ["pn", "],"]],
  [["prop", "  learning"], ["pn", ": ["], ["str", '"Kubernetes"'], ["pn", ", "], ["str", '"Terraform"'], ["pn", "],"]],
  [["pn", "};"]],
];

function CodeWindow() {
  return (
    <div className="code-window" aria-hidden="true">
      <div className="code-bar">
        <span />
        <span />
        <span />
        <p className="code-tab">dion.js</p>
      </div>
      <pre className="code-body">
        {codeLines.map((tokens, lineIndex) => (
          <span className="code-line" key={lineIndex}>
            <span className="line-number">{lineIndex + 1}</span>
            {tokens.map(([type, text], tokenIndex) => (
              <span className={`tok-${type}`} key={tokenIndex}>
                {text}
              </span>
            ))}
            {lineIndex === codeLines.length - 1 && <i className="cursor" />}
          </span>
        ))}
      </pre>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-greeting">
            <span aria-hidden="true">&gt; </span>Hi there, I&apos;m
          </p>
          <h1>Dion Ismajli</h1>
          <p className="hero-role">
            Software Developer · Backend &amp; DevOps
            <span className="role-cursor" aria-hidden="true">_</span>
          </p>
          <p className="hero-text">
            I build backend services and REST APIs in Java (Spring Boot) and Node.js, and I am
            growing on the DevOps side: containerizing services with Docker and automating builds
            with GitHub Actions.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">
              <Icon name="code" size={16} />
              View Projects
            </a>
            <a className="button-text" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
        <CodeWindow />
      </div>
      <svg className="hero-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40 C 240 110, 480 130, 760 80 S 1220 30, 1440 110 L1440 120 L0 120 Z" />
      </svg>
    </section>
  );
}
