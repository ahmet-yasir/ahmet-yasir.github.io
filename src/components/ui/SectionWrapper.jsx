export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}
