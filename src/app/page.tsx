'use client';

import { useEffect, useState } from 'react';

const heroSlides = [
  {
    label: '01 — RELIABILITY',
    kicker: 'LESS DOWNTIME.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=85',
  },
  {
    label: '02 — EFFICIENCY',
    kicker: 'LESS DIESEL.',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=2200&q=85',
  },
  {
    label: '03 — GROWTH',
    kicker: 'MORE PRODUCTIVITY.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=85',
  },
  {
    label: '04 — POSSIBILITY',
    kicker: 'MORE POSSIBILITY.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2200&q=85',
  },
  {
    label: '05 — FUTURE',
    kicker: 'POWERING AFRICA\'S FUTURE.',
    image: 'https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=2200&q=85',
  },
];

const metrics = [
  ['325+', 'renewable energy systems installed'],
  ['34 MW+', 'solar + battery capacity'],
  ['12', 'countries with delivered projects'],
  ['99.9%', 'target uptime with 24/7 monitoring'],
];

export default function Home() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((value) => (value + 1) % heroSlides.length), 3800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.kicker}
              className={`hero-frame ${index === active ? 'is-active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
          <div className="hero-wash" />
          <div className="hero-grain" />
        </div>

        <header className="nav shell">
          <a className="brand" href="#top" aria-label="PowerGen home">
            <span className="brand-mark">PG</span>
            <span>POWERGEN</span>
          </a>
          <nav>
            <a href="#solutions">Solutions</a>
            <a href="#projects">Projects</a>
            <a href="#impact">Impact</a>
            <a href="#company">Company</a>
          </nav>
          <a className="nav-cta" href="#contact">Start a project ↗</a>
        </header>

        <div className="hero-content shell">
          <div className="hero-copy">
            <p className="eyebrow">Accelerating Africa&apos;s clean energy future</p>
            <div className="hero-line-wrap" aria-live="polite">
              <h1 key={heroSlides[active].kicker} className="hero-line">{heroSlides[active].kicker}</h1>
            </div>
            <p className="hero-sub">Reliable solar + battery infrastructure for businesses and communities across Africa.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#projects">Explore our projects</a>
              <a className="button button-ghost" href="#contact">Talk to our team</a>
            </div>
          </div>

          <div className="hero-progress" aria-label="Hero story progress">
            <span>{heroSlides[active].label}</span>
            <div className="progress-track">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.label}
                  aria-label={`Show ${slide.label}`}
                  className={index === active ? 'is-active' : ''}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
            <span className="scroll-cue">Scroll ↓</span>
          </div>
        </div>
      </section>

      <section className="intro shell" id="impact">
        <p className="section-kicker">POWERGEN AT A GLANCE</p>
        <h2>325+ systems. 12 countries. One mission: dependable clean power.</h2>
        <div className="metric-grid">
          {metrics.map(([value, label]) => (
            <article className="metric" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="statement dark-section" id="company">
        <div className="shell statement-grid">
          <p className="section-kicker light">WHY POWERGEN</p>
          <h2>Energy should move your business forward — not hold it back.</h2>
          <p className="lead">PowerGen combines engineering, financing, solar generation, battery storage and long-term operations into one dependable energy platform.</p>
        </div>
      </section>

      <section className="solutions shell" id="solutions">
        <div className="section-head">
          <p className="section-kicker">SOLUTIONS</p>
          <h2>Built around the realities of African power.</h2>
        </div>
        <div className="solution-grid">
          <article className="solution-card large-card solar-card">
            <div className="card-overlay" />
            <div className="card-content">
              <span>01</span>
              <h3>Commercial & Industrial</h3>
              <p>Solar + storage designed to cut generator dependence, reduce energy costs and protect operations from outages.</p>
              <a href="#contact">Explore C&amp;I ↗</a>
            </div>
          </article>
          <article className="solution-card mini-card">
            <div className="card-overlay" />
            <div className="card-content">
              <span>02</span>
              <h3>Mini & Metro Grids</h3>
              <p>Reliable energy infrastructure that powers communities, local economies and productive use.</p>
              <a href="#contact">Explore mini-grids ↗</a>
            </div>
          </article>
        </div>
      </section>

      <section className="system dark-section">
        <div className="shell system-grid">
          <div>
            <p className="section-kicker light">HOW POWERGEN DELIVERS</p>
            <h2>Solar. Storage. Intelligence.</h2>
            <p className="lead">A connected energy system engineered for reliability, monitored continuously and operated as infrastructure — not just equipment.</p>
          </div>
          <div className="flow">
            {['SOLAR ARRAY', 'BESS', 'CONTROL', 'BUSINESS / COMMUNITY'].map((item, index) => (
              <div className="flow-item" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
                {index < 3 && <i>→</i>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project" id="projects">
        <div className="project-media" />
        <div className="project-overlay" />
        <div className="shell project-copy">
          <p className="section-kicker light">FEATURED PROJECT — TOTO, NIGERIA</p>
          <h2>Infrastructure that changes what is possible.</h2>
          <div className="project-stats">
            <div><strong>352.24 kWp</strong><span>Solar PV</span></div>
            <div><strong>972 kWh</strong><span>Battery storage</span></div>
          </div>
          <a className="button button-light" href="#contact">Explore the project</a>
        </div>
      </section>

      <section className="platform shell">
        <p className="section-kicker">THE NEXT CHAPTER</p>
        <div className="platform-grid">
          <strong>120 MW</strong>
          <div>
            <h2>Building the next generation of African energy infrastructure.</h2>
            <p>PowerGen is moving beyond individual installations toward a scalable renewable-energy platform built for long-term impact.</p>
          </div>
        </div>
      </section>

      <section className="closing dark-section" id="contact">
        <div className="shell closing-grid">
          <div>
            <p className="section-kicker light">LET&apos;S BUILD</p>
            <h2>Africa needs dependable power.</h2>
          </div>
          <a className="closing-link" href="mailto:info@powergen-re.com">Start a project ↗</a>
        </div>
      </section>
    </main>
  );
}
