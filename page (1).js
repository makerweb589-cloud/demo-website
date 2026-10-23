"use client";

import { useState } from "react";
import Link from "next/link";

function OutlineIcon({ name, size = 20, className = "" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
    focusable: "false"
  };

  const paths = {
    arrow: <><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>,
    sparkle: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /></>,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m15.8 8.2-2.4 5.2-5.2 2.4 2.4-5.2 5.2-2.4Z" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></>,
    chart: <><path d="M4 19V5" /><path d="M4 19h16" /><path d="m7 15 4-4 3 2 5-6" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>
  };

  return <svg {...common}>{paths[name] || paths.sparkle}</svg>;
}

const services = [
  {
    number: "01",
    title: "Business Strategy",
    description:
      "Build a clear direction for your business with practical planning and thoughtful solutions."
  },
  {
    number: "02",
    title: "Digital Solutions",
    description:
      "Create modern digital experiences that help your business work smarter and grow."
  },
  {
    number: "03",
    title: "Growth & Support",
    description:
      "Discover opportunities, improve your processes and move forward with confidence."
  }
];

export default function HomePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState(null);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setNotice(null);

    try {
      const response = await fetch("/api/demo-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong.");
      }

      setNotice({
        type: "success",
        text: "Thank you! Your demo request has been submitted."
      });

      setForm({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    } catch (error) {
      setNotice({
        type: "error",
        text: error.message || "Please try again."
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <Link href="/" className="brand">
            <span className="brand-icon">N</span>
            nexa<span className="brand-dot">.</span>
          </Link>

          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#process">How it works</a>
            <Link href="/about">About</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>

          <a className="nav-cta" href="#demo">
            Book a demo
          </a>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" />
              YOUR NEXT CHAPTER STARTS HERE
            </div>

            <h1>
              Good ideas.
              <br />
              <span>Better business.</span>
            </h1>

            <p className="hero-description">
              Thoughtful strategies and modern digital solutions
              designed to help your business move forward.
            </p>

            <div className="hero-actions">
              <a href="#demo" className="button button-dark">
                Let&apos;s talk
              </a>

              <a href="#services" className="text-link">
                Explore our services <OutlineIcon name="arrow" size={16} />
              </a>
            </div>

            <div className="hero-note">
              <span className="avatar-stack">
                <span>A</span>
                <span>B</span>
                <span>C</span>
              </span>

              <p>
                Built around your goals,
                <br />
                designed for what&apos;s next.
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-top">
              <span>THE BIG PICTURE</span>
              <span>2026 ↗</span>
            </div>

            <div className="visual-graphic">
              <div className="graphic-circle circle-one" />
              <div className="graphic-circle circle-two" />
              <div className="graphic-circle circle-three" />

              <div className="graphic-center">
                <span>n.</span>
              </div>

              <div className="graphic-label label-one">
                Clarity
              </div>

              <div className="graphic-label label-two">
                Strategy
              </div>

              <div className="graphic-label label-three">
                Growth
              </div>
            </div>

            <div className="visual-bottom">
              <div>
                <span className="mini-label">OUR APPROACH</span>
                <p>Simple thinking. Meaningful outcomes.</p>
              </div>

              <span className="visual-arrow" aria-hidden="true"><OutlineIcon name="arrow" size={18} /></span>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <p>MADE FOR AMBITIOUS BUSINESSES</p>

            <div className="trust-items">
              <span>Strategy</span>
              <span>Design</span>
              <span>Technology</span>
              <span>Growth</span>
            </div>
          </div>
        </section>

        <section className="section container" id="services">
          <div className="section-heading">
            <div>
              <span className="section-label">WHAT WE DO</span>

              <h2>
                Everything starts
                <br />
                with a <span>better plan.</span>
              </h2>
            </div>

            <p className="section-intro">
              We bring together clear thinking, useful technology
              and thoughtful execution to make business simpler.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span>{service.number}</span>
                  <span className="service-arrow" aria-hidden="true"><OutlineIcon name={service.number === "01" ? "compass" : service.number === "02" ? "layers" : "chart"} size={20} /></span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="#demo" className="service-link">
                  Learn more <OutlineIcon name="arrow" size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="container process-inner">
            <div className="process-heading">
              <span className="section-label">A SIMPLE PROCESS</span>

              <h2>
                Less complexity.
                <br />
                <span>More progress.</span>
              </h2>

              <p>
                Great work does not need to be complicated.
                We keep every step clear, collaborative and focused.
              </p>
            </div>

            <div className="process-list">
              <div className="process-item">
                <span className="process-number">01</span>

                <div>
                  <h3>We listen</h3>
                  <p>
                    Understand your goals, challenges and vision.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <span className="process-number">02</span>

                <div>
                  <h3>We plan</h3>
                  <p>
                    Create a practical roadmap tailored to your needs.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <span className="process-number">03</span>

                <div>
                  <h3>We build</h3>
                  <p>
                    Turn ideas into thoughtful, useful solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="demo-section container" id="demo">
          <div className="demo-copy">
            <span className="section-label">LET&apos;S CONNECT</span>

            <h2>
              Have an idea?
              <br />
              <span>Let&apos;s explore it.</span>
            </h2>

            <p>
              Tell us a little about your project. This demo form
              lets you preview how a client enquiry experience works.
            </p>

            <div className="demo-contact-note">
              <span className="contact-icon" aria-hidden="true"><OutlineIcon name="sparkle" size={22} /></span>

              <div>
                <strong>A conversation, not a commitment.</strong>
                <p>Start with an idea. We&apos;ll take it from there.</p>
              </div>
            </div>
          </div>

          <form className="demo-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <h3>Request a demo</h3>
              <p>Fields marked with * are required.</p>
            </div>

            <label htmlFor="name">Full name *</label>

            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              maxLength={100}
              autoComplete="name"
              required
            />

            <label htmlFor="email">Work email *</label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              maxLength={254}
              autoComplete="email"
              required
            />

            <label htmlFor="company">Company name</label>

            <input
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Your company"
              maxLength={150}
              autoComplete="organization"
            />

            <label htmlFor="message">Tell us about your project *</label>

            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to build?"
              rows={4}
              maxLength={2000}
              required
            />

            <button
              type="submit"
              className="button button-dark submit-button"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit demo request"}
            </button>

            {notice && (
              <div
                className={`form-notice ${notice.type}`}
                role="status"
              >
                {notice.text}
              </div>
            )}

            <p className="form-disclaimer">
              Demo only. Do not submit sensitive or confidential information.
            </p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div>
              <Link href="/" className="brand footer-brand">
                <span className="brand-icon">N</span>
                nexa<span className="brand-dot">.</span>
              </Link>

              <p className="footer-description">
                Thoughtful solutions for a business moving forward.
              </p>
            </div>

            <div className="footer-column">
              <h4>EXPLORE</h4>
              <a href="#services">Services</a>
              <a href="#process">Our Process</a>
              <Link href="/dashboard">Dashboard</Link>
            </div>

            <div className="footer-column">
              <h4>COMPANY</h4>
              <Link href="/about">About Us</Link>
              <a href="#demo">Contact</a>
              <a href="#demo">Request a Demo</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Nexa. Demo concept.</span>

            <span>
              Made with clarity <span className="footer-star" aria-hidden="true"><OutlineIcon name="sparkle" size={15} /></span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}