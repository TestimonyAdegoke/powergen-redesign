'use client';

import { useEffect, useMemo, useState } from 'react';

const heroSlides = [
  { label: '01 — RELIABILITY', kicker: 'LESS DOWNTIME.', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=85' },
  { label: '02 — EFFICIENCY', kicker: 'LESS DIESEL.', image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=2200&q=85' },
  { label: '03 — GROWTH', kicker: 'MORE PRODUCTIVITY.', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=85' },
  { label: '04 — POSSIBILITY', kicker: 'MORE POSSIBILITY.', image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2200&q=85' },
  { label: '05 — FUTURE', kicker: "POWERING AFRICA'S FUTURE.", image: 'https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=2200&q=85' },
];

const metrics = [
  ['325+', 'renewable energy systems installed'],
  ['34 MW+', 'solar + battery capacity'],
  ['12', 'countries with delivered projects'],
  ['99.9%', 'target uptime with 24/7 monitoring'],
];

const flowSteps = [
  { title: 'Solar generation', detail: 'High-efficiency PV captures energy where it is needed.' },
  { title: 'Battery storage', detail: 'Stored power smooths supply and cuts generator dependence.' },
  { title: 'Smart control', detail: 'Controls balance solar, battery, grid and operational demand.' },
  { title: 'Reliable output', detail: 'Businesses and communities receive dependable usable power.' },
];

const countries = [
  { name: 'Nigeria', x: 43, y: 46, note: 'Mini-grid and C&I project delivery' },
  { name: 'Sierra Leone', x: 28, y: 43, note: 'Distributed energy infrastructure' },
  { name: 'Kenya', x: 67, y: 52, note: 'Regional operations and project delivery' },
  { name: 'DRC', x: 55, y: 59, note: 'Renewable infrastructure footprint' },
];

const insights = [
  ['Platform', 'Scaling renewable infrastructure across African markets', 'A 120 MW platform approach moves PowerGen from project delivery to portfolio-scale infrastructure.'],
  ['Projects', 'From individual systems to resilient energy ecosystems', 'Solar, storage, control and operations work together as one dependable energy service.'],
  ['Impact', 'Power that unlocks productivity', 'Reliable electricity enables businesses, communities and local economies to do more.'],
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [activeFlow, setActiveFlow] = useState(0);
  const [activeCountry, setActiveCountry] = useState('Nigeria');

  useEffect(() => {
    const id = window.setInterval(() => setActive((value) => (value + 1) % heroSlides.length), 3800);
    return () => window.clearInterval(id);
  }, []);

  const selectedCountry = useMemo(
    () => countries.find((country) => country.name === activeCountry) ?? countries[0],
    [activeCountry],
  );

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <div key={slide.kicker} className={`hero-frame ${index === active ? 'is-active' : ''}`} style={{ backgroundImage: `url(${slide.image})` }} />
          ))}
          <div className="hero-wash" />
          <div className="hero-grain" />
        </div>

        <header className="nav shell">
          <a className="brand" href="#top" aria-label="PowerGen home"><span className="brand-mark">PG</span><span>POWERGEN</span></a>
          <nav>
            <a href="#solutions">Solutions</a><a href="#projects">Projects</a><a href="#footprint">Footprint</a><a href="#insights">Insights</a>
          </nav>
          <a className="nav-cta" href="#contact">Start a project ↗</a>
        </header>

        <div className="hero-content shell">
          <div className="hero-copy">
            <p className="eyebrow">Accelerating Africa&apos;s clean energy future</p>
            <div className="hero-line-wrap" aria-live="polite"><h1 key={heroSlides[active].kicker} className="hero-line">{heroSlides[active].kicker}</h1></div>
            <p className="hero-sub">Reliable solar + battery infrastructure for businesses and communities across Africa.</p>
            <div className="hero-actions"><a className="button button-light" href="#projects">Explore our projects</a><a className="button button-ghost" href="#contact">Talk to our team</a></div>
          </div>
          <div className="hero-progress" aria-label="Hero story progress">
            <span>{heroSlides[active].label}</span>
            <div className="progress-track">{heroSlides.map((slide, index) => <button key={slide.label} aria-label={`Show ${slide.label}`} className={index === active ? 'is-active' : ''} onClick={() => setActive(index)} />)}</div>
            <span className="scroll-cue">Scroll ↓</span>
          </div>
        </div>
      </section>

      <section className="intro shell" id="impact">
        <p className="section-kicker">POWERGEN AT A GLANCE</p>
        <h2>325+ systems. 12 countries. One mission: dependable clean power.</h2>
        <div className="metric-grid">{metrics.map(([value, label]) => <article className="metric" key={label}><strong>{value}</strong><span>{label}</span></article>)}</div>
      </section>

      <section className="statement dark-section">
        <div className="shell statement-grid">
          <p className="section-kicker light">WHY POWERGEN</p>
          <h2>Energy should move your business forward — not hold it back.</h2>
          <p className="lead">PowerGen combines engineering, financing, solar generation, battery storage and long-term operations into one dependable energy platform.</p>
        </div>
      </section>

      <section className="solutions shell" id="solutions">
        <div className="section-head"><p className="section-kicker">SOLUTIONS</p><h2>Built around the realities of African power.</h2></div>
        <div className="solution-grid">
          <article className="solution-card large-card solar-card"><div className="card-overlay" /><div className="card-content"><span>01</span><h3>Commercial & Industrial</h3><p>Solar + storage designed to cut generator dependence, reduce energy costs and protect operations from outages.</p><a href="#contact">Explore C&amp;I ↗</a></div></article>
          <article className="solution-card mini-card"><div className="card-overlay" /><div className="card-content"><span>02</span><h3>Mini & Metro Grids</h3><p>Reliable energy infrastructure that powers communities, local economies and productive use.</p><a href="#contact">Explore mini-grids ↗</a></div></article>
        </div>
      </section>

      <section className="system dark-section" id="system">
        <div className="shell system-grid">
          <div className="system-copy"><p className="section-kicker light">HOW POWERGEN DELIVERS</p><h2>Solar. Storage. Intelligence.</h2><p className="lead">A connected energy system engineered for reliability, monitored continuously and operated as infrastructure — not just equipment.</p></div>
          <div className="system-stage">
            <div className="system-rail">{flowSteps.map((step, index) => <button key={step.title} className={index === activeFlow ? 'is-active' : ''} onMouseEnter={() => setActiveFlow(index)} onFocus={() => setActiveFlow(index)} onClick={() => setActiveFlow(index)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step.title}</strong></button>)}</div>
            <div className="system-visual" aria-live="polite"><div className="pulse-orbit"><span>{String(activeFlow + 1).padStart(2, '0')}</span></div><p>{flowSteps[activeFlow].detail}</p></div>
          </div>
        </div>
      </section>

      <section className="footprint shell" id="footprint">
        <div className="footprint-copy"><p className="section-kicker">OUR FOOTPRINT</p><h2>Built in Africa. Built for Africa.</h2><p>PowerGen combines regional operating experience with project delivery across multiple African markets.</p><div className="country-detail"><span>{selectedCountry.name}</span><strong>{selectedCountry.note}</strong></div></div>
        <div className="africa-map" aria-label="PowerGen operating footprint illustration">
          <svg viewBox="0 0 520 620" role="img" aria-label="Stylised map of Africa">
            <path d="M204 32L279 39L345 69L397 126L415 190L455 245L441 306L403 341L387 412L338 466L311 550L264 589L224 535L207 463L158 415L132 343L94 293L81 225L113 170L143 102Z" fill="currentColor" />
          </svg>
          {countries.map((country) => <button key={country.name} aria-label={`Show ${country.name}`} className={`map-pin ${activeCountry === country.name ? 'is-active' : ''}`} style={{ left: `${country.x}%`, top: `${country.y}%` }} onClick={() => setActiveCountry(country.name)}><i /><span>{country.name}</span></button>)}
        </div>
      </section>

      <section className="project" id="projects">
        <div className="project-media" /><div className="project-overlay" />
        <div className="shell project-copy"><p className="section-kicker light">FEATURED PROJECT — TOTO, NIGERIA</p><h2>Infrastructure that changes what is possible.</h2><div className="project-stats"><div><strong>352.24 kWp</strong><span>Solar PV</span></div><div><strong>972 kWh</strong><span>Battery storage</span></div></div><a className="button button-light" href="#contact">Explore the project</a></div>
      </section>

      <section className="trust dark-section">
        <div className="shell trust-grid"><div><p className="section-kicker light">PARTNER ECOSYSTEM</p><h2>Backed by institutions investing in Africa&apos;s energy future.</h2></div><div className="logo-wall"><span>World Bank</span><span>USAID</span><span>Power Africa</span><span>InfraCo Africa</span><span>AfDB</span><span>IFU</span><span>ElectriFI</span></div></div>
      </section>

      <section className="platform shell">
        <p className="section-kicker">THE NEXT CHAPTER</p>
        <div className="platform-grid"><strong>120 MW</strong><div><h2>Building the next generation of African energy infrastructure.</h2><p>PowerGen is moving beyond individual installations toward a scalable renewable-energy platform built for long-term impact.</p></div></div>
      </section>

      <section className="insights shell" id="insights">
        <div className="section-head"><p className="section-kicker">INSIGHTS</p><h2>From the energy transition.</h2></div>
        <div className="insight-grid">{insights.map(([tag, title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')} / {tag}</span><h3>{title}</h3><p>{body}</p><a href="#contact">Read more ↗</a></article>)}</div>
      </section>

      <section className="closing dark-section" id="contact">
        <div className="shell closing-grid"><div><p className="section-kicker light">LET&apos;S BUILD</p><h2>Africa needs dependable power.</h2><p>Bring us the energy challenge. We&apos;ll help design the path forward.</p></div><a className="closing-link" href="mailto:info@powergen-re.com">Start a project ↗</a></div>
      </section>
    </main>
  );
}
