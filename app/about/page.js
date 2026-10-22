import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="inner-page">
      <header className="inner-header">
        <Link href="/" className="brand">
          <span className="brand-icon">N</span>
          nexa<span className="brand-dot">.</span>
        </Link>

        <Link href="/" className="back-link">
          ← Back to home
        </Link>
      </header>

      <section className="about-hero">
        <span className="section-label">ABOUT NEXA</span>

        <h1>
          Good business
          <br />
          begins with <span>good thinking.</span>
        </h1>

        <p>
          Nexa is a demo business concept built around one simple
          belief: meaningful progress comes from clear thinking,
          thoughtful design and practical solutions.
        </p>
      </section>

      <section className="about-values">
        <article>
          <span>01</span>
          <h2>Clarity first</h2>
          <p>
            We believe the best solutions begin with understanding
            what really matters.
          </p>
        </article>

        <article>
          <span>02</span>
          <h2>Built with purpose</h2>
          <p>
            Every decision should solve a problem or create
            something genuinely useful.
          </p>
        </article>

        <article>
          <span>03</span>
          <h2>Always improving</h2>
          <p>
            Good work is an ongoing process of learning,
            adapting and making things better.
          </p>
        </article>
      </section>

      <section className="about-cta">
        <h2>Have a project in mind?</h2>

        <p>
          Let&apos;s explore how the right approach could help.
        </p>

        <Link href="/#demo" className="button button-dark">
          Request a demo ↗
        </Link>
      </section>

      <footer className="simple-footer">
        © 2026 Nexa — Demo concept.
      </footer>
    </main>
  );
}
