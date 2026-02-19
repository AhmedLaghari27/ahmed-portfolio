import { useState, useEffect } from 'react';
import './Hero.css';

const roles = [
  'Full Stack Developer',
  'WordPress Specialist',
  'React Developer',
  // 'Digital Architect',
];

function useTypewriter(words, speed = 85, pause = 2200) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIndex(i => (i + 1) % words.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return displayed;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">
      {/* Grid background */}
      <div className="grid-bg" />
      {/* Scan line */}
      <div className="scan-line" />
      {/* Floating orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for work — 2026
        </div>

        <h1 className="hero-name">
          <span className="name-first">Ahmed</span>
          <span className="name-last glitch" data-text="Laghari">Laghari</span>
        </h1>

        <div className="hero-role">
          <span className="typed-text">{typed}</span>
          <span className="cursor-bar" />
        </div>

        <p className="hero-desc">
          Crafting pixel-perfect, high-performance web experiences with
          cutting-edge technologies. I transform complex ideas into elegant
          digital realities that leave lasting impressions.
        </p>

        <div className="hero-actions">
          <button className="btn-primary hoverable" onClick={() => scrollTo('projects')}>
            <span>View Projects</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="btn-secondary hoverable" onClick={() => scrollTo('contact')}>
            Contact Me
          </button>
        </div>

        <div className="hero-scroll-hint">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </div>

      {/* Right decoration */}
      <div className="hero-deco">
        <div className="deco-ring deco-ring-1" />
        <div className="deco-ring deco-ring-2" />
        <div className="deco-ring deco-ring-3" />
        <div className="deco-dot" />
        <div className="deco-lines">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="deco-line" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
      </div>
    </section>
  );
}
