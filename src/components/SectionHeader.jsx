// Renders a code-comment style heading, e.g. "// 01. about ──────".
export default function SectionHeader({ index, title, subtitle, children }) {
  return (
    <header className="section-header">
      <h2>
        <span className="section-comment" aria-hidden="true">
          // {index}.
        </span>
        {title}
      </h2>
      {subtitle && <h3>{subtitle}</h3>}
      {children && <p>{children}</p>}
    </header>
  );
}
