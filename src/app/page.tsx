'use client';

import { useEffect, useRef, useState } from 'react';

const heroSlides = [
  { label: '01 — RELIABILITY', kicker: 'LESS DOWNTIME.', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=85' },
  { label: '02 — EFFICIENCY', kicker: 'LESS DIESEL.', image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=2200&q=85' },
  { label: '03 — GROWTH', kicker: 'MORE PRODUCTIVITY.', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=85' },
  { label: '04 — POSSIBILITY', kicker: 'MORE POSSIBILITY.', image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2200&q=85' },
  { label: '05 — FUTURE', kicker: "POWERING AFRICA'S FUTURE.", image: 'https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=2200&q=85' },
];

const systemSteps = [
  { number: '01', name: 'SOLAR', value: '352 kWp', note: 'Generation' },
  { number: '02', name: 'STORAGE', value: '84%', note: 'Battery SOC' },
  { number: '03', name: 'CONTROL', value: 'LIVE', note: 'System state' },
  { number: '04', name: 'OUTPUT', value: '99.9%', note: 'Target uptime' },
];

const projects = [
  {
    name: 'TOTO',
    eyebrow: 'INTERCONNECTED MINI-GRID',
    detail: '352.24 kWp solar / 972 kWh battery storage',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2400&q=88',
  },
  {
    name: 'CSS FARMS',
    eyebrow: 'COMMERCIAL & INDUSTRIAL',
    detail: 'Reliable clean power for productive enterprise',
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=2400&q=88',
  },
  {
    name: 'SGB',
    eyebrow: 'COMMERCIAL & INDUSTRIAL',
    detail: 'Solar and storage built around operating demand',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=2400&q=88',
  },
  {
    name: 'OFOSU-OWODE',
    eyebrow: 'DISTRIBUTED ENERGY',
    detail: 'Infrastructure designed for dependable local power',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2400&q=88',
  },
];

const footprint = [
  { name: 'Nigeria', x: 43, y: 48 },
  { name: 'Sierra Leone', x: 27, y: 45 },
  { name: 'Kenya', x: 67, y: 54 },
  { name: 'DRC', x: 55, y: 60 },
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [systemIndex, setSystemIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);
  const projectMarkers = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const id = window.setInterval(() => setHeroIndex((value) => (value + 1) % heroSlides.length), 3800);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const nodes = projectMarkers.current.filter(Boolean) as HTMLDivElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.index ?? 0);
        setProjectIndex(index);
      },
      { threshold: [0.35, 0.55, 0.75] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.kicker}
              className={`hero-frame ${index === heroIndex ? 'is-active' : ''}`}
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
            <a href="#system">System</a>
            <a href="#projects">Projects</a>
            <a href="#footprint">Footprint</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="#contact">Start a project ↗</a>
        </header>

        <div className="hero-content shell">
          <div className="hero-copy">
            <p className="eyebrow">Accelerating Africa&apos;s clean energy future</p>
            <div className="hero-line-wrap" aria-live="polite">
              <h1 key={heroSlides[heroIndex].kicker} className="hero-line">{heroSlides[heroIndex].kicker}</h1>
            </div>
            <p className="hero-sub">Reliable solar + battery infrastructure for businesses and communities across Africa.</p>
          </div>

          <div className="hero-progress" aria-label="Hero story progress">
            <span>{heroSlides[heroIndex].label}</span>
            <div className="progress-track">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.label}
                  aria-label={`Show ${slide.label}`}
                  className={index === heroIndex ? 'is-active' : ''}
                  onClick={() => setHeroIndex(index)}
                />
              ))}
            </div>
            <span className="scroll-cue">Scroll ↓</span>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Selected partners">
        <div className="shell trust-inner">
          <span>SELECTED PARTNERS</span>
          <div className="trust-names">
            <strong>PIDG / InfraCo Africa</strong>
            <strong>IFU</strong>
            <strong>ElectriFI</strong>
            <strong>AfDB</strong>
          </div>
        </div>
      </section>

      <section className="system-v2 shell" id="system">
        <div className="section-label-row">
          <span>01 / THE SYSTEM</span>
          <span>Follow the power</span>
        </div>

        <div className="system-headline">
          <h2>PowerGen is not a panel.<br />It is a power system.</h2>
          <p>Generation, storage, controls and operations work as one connected infrastructure layer.</p>
        </div>

        <div className="energy-stage">
          <div className="energy-line" aria-hidden="true"><i /></div>
          {systemSteps.map((step, index) => (
            <button
              key={step.name}
              className={`energy-node ${index === systemIndex ? 'is-active' : ''}`}
              onMouseEnter={() => setSystemIndex(index)}
              onFocus={() => setSystemIndex(index)}
              onClick={() => setSystemIndex(index)}
            >
              <span>{step.number}</span>
              <strong>{step.name}</strong>
              <small>{step.note}</small>
            </button>
          ))}

          <div className="system-readout">
            <span>{systemSteps[systemIndex].name}</span>
            <strong>{systemSteps[systemIndex].value}</strong>
            <small>{systemSteps[systemIndex].note}</small>
          </div>
        </div>
      </section>

      <section className="manifesto">
        <div className="shell manifesto-inner">
          <div className="section-label-row light-row">
            <span>02 / POWERGEN</span>
            <span>Africa / Since 2011</span>
          </div>
          <h2>Power shouldn&apos;t limit<br />what Africa can become.</h2>
          <div className="manifesto-facts">
            <div><strong>325+</strong><span>systems installed</span></div>
            <div><strong>34 MW+</strong><span>solar + battery capacity</span></div>
            <div><strong>12</strong><span>countries with delivered projects</span></div>
          </div>
        </div>
      </section>

      <section className="project-story" id="projects">
        <div className="project-stage">
          <div className="project-images" aria-hidden="true">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className={`project-image ${index === projectIndex ? 'is-active' : ''}`}
                style={{ backgroundImage: `url(${project.image})` }}
              />
            ))}
            <div className="project-shade" />
          </div>

          <div className="project-stage-copy shell">
            <div className="section-label-row light-row">
              <span>03 / PROJECTS</span>
              <span>{String(projectIndex + 1).padStart(2, '0')} — {String(projects.length).padStart(2, '0')}</span>
            </div>
            <div className="project-title-block">
              <span>{projects[projectIndex].eyebrow}</span>
              <h2>{projects[projectIndex].name}</h2>
              <p>{projects[projectIndex].detail}</p>
            </div>
            <a href="#contact" className="text-link light-link">Explore all projects ↗</a>
          </div>
        </div>

        <div className="project-scroll-track" aria-hidden="true">
          {projects.map((project, index) => (
            <div
              key={project.name}
              data-index={index}
              ref={(node) => { projectMarkers.current[index] = node; }}
              className="project-marker"
            />
          ))}
        </div>
      </section>

      <section className="footprint-v2" id="footprint">
        <div className="shell footprint-grid-v2">
          <div className="footprint-copy-v2">
            <div className="section-label-row light-row">
              <span>04 / FOOTPRINT</span>
              <span>Operating across Africa</span>
            </div>
            <h2>Built in Africa.<br />Built for Africa.</h2>
            <p>Local teams. Regional experience. Infrastructure designed around the realities of African businesses and communities.</p>
            <div className="country-list">
              {footprint.map((country, index) => (
                <div key={country.name}><span>0{index + 1}</span><strong>{country.name}</strong></div>
              ))}
            </div>
          </div>

          <div className="africa-canvas" aria-label="Stylised PowerGen Africa footprint">
            <svg viewBox="0 0 520 620" aria-hidden="true">
              <path d="M204 32L279 39L345 69L397 126L415 190L455 245L441 306L403 341L387 412L338 466L311 550L264 589L224 535L207 463L158 415L132 343L94 293L81 225L113 170L143 102Z" />
            </svg>
            {footprint.map((country) => (
              <div key={country.name} className="footprint-pin" style={{ left: `${country.x}%`, top: `${country.y}%` }}>
                <i />
                <span>{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scale-section">
        <div className="shell">
          <div className="section-label-row">
            <span>05 / SCALE</span>
            <span>The next chapter</span>
          </div>
          <div className="scale-number">120</div>
          <div className="scale-bottom">
            <span>MW</span>
            <h2>From individual projects to<br />portfolio-scale infrastructure.</h2>
            <p>A renewable-energy platform designed for long-term growth, resilience and investment across African markets.</p>
          </div>
        </div>
      </section>

      <section className="editorial shell">
        <div className="section-label-row">
          <span>06 / INSIGHTS</span>
          <span>Latest from PowerGen</span>
        </div>
        <div className="editorial-row">
          <span>01</span>
          <h3>Building renewable infrastructure at African scale</h3>
          <a href="#contact">Read story ↗</a>
        </div>
        <div className="editorial-row">
          <span>02</span>
          <h3>What dependable power changes for businesses and communities</h3>
          <a href="#contact">Read story ↗</a>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="shell final-cta-inner">
          <span className="cta-kicker">07 / LET&apos;S BUILD</span>
          <h2>Africa needs<br />dependable power.</h2>
          <div className="cta-bottom">
            <p>Bring us the energy challenge.<br />We&apos;ll help build the path forward.</p>
            <a href="mailto:info@powergen-re.com">Start a project ↗</a>
          </div>
        </div>
      </section>
    </main>
  );
}
