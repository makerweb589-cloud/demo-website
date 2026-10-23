import Link from "next/link";
import BrandLogo from "../../components/BrandLogo";

const principles = [
  { number: "01", title: "Start with clarity", text: "We take time to understand the goal, the people it serves, and what a useful result should look like before choosing a direction." },
  { number: "02", title: "Make it practical", text: "Good ideas should be easy to put into action. We focus on thoughtful plans, clear priorities, and digital experiences that work in the real world." },
  { number: "03", title: "Keep improving", text: "Progress is a process. We look for useful feedback, learn from what is working, and help turn small improvements into lasting momentum." },
];

const capabilities = [
  { number: "01", title: "Business strategy", text: "A clearer direction, practical priorities, and a plan shaped around your goals." },
  { number: "02", title: "Digital solutions", text: "Modern, considered digital experiences that help your business work smarter." },
  { number: "03", title: "Growth & support", text: "Ongoing thinking and support to help you spot opportunities and move forward." },
];

export default function AboutPage() {
  return (
    <main className="nexa-page nexa-about-page">
      <section className="nexa-page-hero about-hero">
        <div className="nexa-page-hero-copy"><span className="section-label">ABOUT NEXA</span><p className="nexa-kicker"><span className="status-dot" /> YOUR NEXT CHAPTER STARTS HERE</p><h1>Better business starts with <span>a clearer view.</span></h1><p>Nexa brings strategy, digital thinking, and practical support together to help businesses turn good ideas into meaningful progress.</p><div className="nexa-page-actions"><Link href="/#demo" className="button button-dark">Let&apos;s talk <span aria-hidden="true">↗</span></Link><Link href="/overview" className="text-link">Explore the overview <span aria-hidden="true">→</span></Link></div><div className="about-hero-footnote"><span className="about-footnote-mark">N</span><span>Clear thinking. Useful work. Better next steps.</span></div></div>
        <div className="about-hero-visual" aria-hidden="true"><div className="about-visual-orbit orbit-a" /><div className="about-visual-orbit orbit-b" /><div className="about-visual-orbit orbit-c" /><div className="about-visual-center"><span>N</span><small>nexa.</small></div><div className="about-visual-tag tag-a">Strategy</div><div className="about-visual-tag tag-b">Digital</div><div className="about-visual-tag tag-c">Growth</div></div>
      </section>

      <section className="about-intro-section"><div className="about-intro-label"><span className="section-label">WHO WE ARE</span><span className="about-intro-line" /></div><div className="about-intro-copy"><h2>We believe progress gets easier when the path is <span>clear.</span></h2><p>Every business has its own challenges, ambitions, and definition of success. Nexa is built around the idea that the best solutions begin by listening, asking the right questions, and making the complicated feel manageable.</p><p>From the first idea to the next stage of growth, our focus is on helping you make informed decisions and create experiences that are useful for the people who rely on them.</p></div></section>

      <section className="about-principles-section"><div className="about-section-heading"><div><span className="section-label">HOW WE THINK</span><h2>A considered approach.<br /><span>Practical by nature.</span></h2></div><p>We keep the work grounded in your goals and make every step count.</p></div><div className="about-principles-grid">{principles.map((item) => <article className="about-principle-card" key={item.number}><span className="about-card-number">{item.number}</span><div className="about-principle-symbol" aria-hidden="true">{item.number === "01" ? "⌁" : item.number === "02" ? "↗" : "✳"}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

      <section className="about-capabilities-section"><div className="about-capabilities-copy"><span className="section-label">WHAT WE DO</span><h2>Ideas are a start.<br /><span>Progress is the point.</span></h2><p>Nexa connects thoughtful planning with the tools and support needed to move forward. The work can look different from one business to another, but the aim stays the same: make the next step clearer and more achievable.</p><Link href="/#services" className="text-link">Explore our services <span aria-hidden="true">↗</span></Link></div><div className="about-capabilities-list">{capabilities.map((item) => <article className="about-capability-row" key={item.number}><span className="about-capability-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="about-capability-arrow" aria-hidden="true">↗</span></article>)}</div></section>

      <section className="about-values-band"><div className="about-values-mark" aria-hidden="true">✳</div><div><span className="section-label">OUR PROMISE</span><h2>Make the next step feel possible.</h2><p>Clear communication, thoughtful decisions, and useful solutions—without adding unnecessary complexity.</p></div><Link href="/#demo" className="about-values-cta">Start a conversation <span aria-hidden="true">↗</span></Link></section>

      <section className="about-faq-section"><div><span className="section-label">A FEW QUICK ANSWERS</span><h2>Getting to know Nexa.</h2><p>Here is what guides the way we work.</p></div><div className="about-faq-list"><article><h3>Who is Nexa for?</h3><p>For businesses and teams looking for clearer strategy, considered digital solutions, or practical support as they grow.</p></article><article><h3>How does a project begin?</h3><p>It starts with a conversation about your goals, your current challenges, and what a successful outcome would mean to you.</p></article><article><h3>What does Nexa focus on?</h3><p>Business strategy, digital solutions, and growth support—connected by a focus on clarity and practical results.</p></article></div></section>

      <section className="about-final-cta"><span className="section-label">READY WHEN YOU ARE</span><h2>Let&apos;s make your next move a good one.</h2><p>Tell us what you are working toward. We can start with the idea and work out the next step together.</p><Link href="/#demo" className="button button-dark">Book a demo <span aria-hidden="true">↗</span></Link></section>
      <footer className="about-page-footer"><Link href="/" className="brand"><BrandLogo className="brand-icon" /> nexa<span className="brand-dot">.</span></Link><span>Thoughtful strategies. Modern solutions. Clear next steps.</span><Link href="/dashboard">Open dashboard ↗</Link></footer>
    </main>
  );
}
