import { useState } from 'react';

const wpSites = [
  {
    num: '01',
    title: 'Cybersecurity Website',
    desc: 'Developed a modern cybersecurity website focused on security awareness and digital protection services. The project highlights clean UI design, responsive development, and structured presentation of cybersecurity solutions.',
    img: '/src/assets/p1.png',
    tags: ['WordPress', 'Custom Theme', 'SEO'],
    accent: '#00ff87',
  },
  {
    num: '02',
    title: 'Web Design Agency Website',
    desc: 'Designed and developed a modern website for a web design agency to showcase its services, portfolio, and client solutions. The website features a clean layout, responsive design, and a professional user experience. Built to highlight creative design and strong web development skills. 🌐💻',
    img: '/src/assets/p2.png',
    tags: ['WordPress', 'WooCommerce', 'Elementor'],
    accent: '#00e5ff',
  },
  {
    num: '03',
    title: 'Plesk Hosting Platform Website',
    desc: 'Developed a website inspired by Plesk to present web hosting management features and server control solutions. The project focuses on a clean interface, responsive layout, and clear presentation of hosting tools. Built to demonstrate my ability to design modern, professional tech-focused websites.',
    img: '/src/assets/p3.png',
    tags: ['WordPress', 'ACF', 'GSAP'],
    accent: '#00ff87',
  },
  {
    num: '04',
    title: 'Automobile Services West Boca',
    desc: 'Designed and developed a professional website for an automobile services business in West Boca. The website highlights car repair services, maintenance solutions, and customer-friendly booking information with a clean and responsive design. Built to provide a smooth user experience and showcase automotive service offerings online. 🚗💻',
    img: '/src/assets/p4.png',
    tags: ['WordPress', 'Custom Plugin', 'Google Maps'],
    accent: '#00e5ff',
  },
  {
    num: '05',
    title: 'Pivot Solution Website',
    desc: 'Developed a professional website for Pivot Solutions to present its business services and digital solutions. The website features a clean, modern layout with responsive design and clear service sections. Built to ensure a smooth user experience while highlighting the company’s expertise and offerings. 🌐💼',
    img: '/src/assets/p5.jpeg',
    tags: ['WordPress', 'Elementor', 'Mailchimp'],
    accent: '#00ff87',
  },
  {
    num: '06',
    title: 'SimpleCyber',
    desc: 'Developed a cybersecurity services website that showcases a range of digital security solutions including threat protection, security assessments, and consulting services. The website features a clean, modern design with a focus on clarity and user experience. Built to effectively present cybersecurity services and build trust with potential clients. 🔐💻',
    img: '/src/assets/p6.jpeg',
    tags: ['WordPress', 'Gutenberg', 'OpenTable'],
    accent: '#00e5ff',
  },
  
];

const styles = `
  .wp-section {
    padding: 120px 60px;
    position: relative;
  }

  .wp-section::before {
    content: '';
    position: absolute;
    top: 0; left: 60px; right: 60px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0,255,135,0.2), transparent);
  }

  .wp-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  /* last item centered if 7 cards */
  .wp-card:last-child:nth-child(3n+1) {
    grid-column: 2;
  }

  .wp-card {
    border: 1px solid rgba(0,255,135,0.1);
    background: linear-gradient(135deg, #0d1421, #080d14);
    overflow: hidden;
    position: relative;
    cursor: none;
    transition: transform 0.4s cubic-bezier(0.16,1,0.3,1),
                border-color 0.3s ease,
                box-shadow 0.4s ease;
    group: true;
  }

  .wp-card:hover {
    transform: translateY(-10px);
    border-color: rgba(0,255,135,0.4);
    box-shadow: 0 24px 60px rgba(0,0,0,0.5), 0 0 30px rgba(0,255,135,0.08);
  }

  /* Corner accents */
  .wp-card::before,
  .wp-card::after {
    content: '';
    position: absolute;
    width: 16px; height: 16px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 3;
  }
  .wp-card::before {
    top: 0; left: 0;
    border-top: 2px solid var(--card-accent, #00ff87);
    border-left: 2px solid var(--card-accent, #00ff87);
  }
  .wp-card::after {
    bottom: 0; right: 0;
    border-bottom: 2px solid var(--card-accent, #00ff87);
    border-right: 2px solid var(--card-accent, #00ff87);
  }
  .wp-card:hover::before,
  .wp-card:hover::after { opacity: 1; }

  /* Screenshot */
  .wp-screenshot-wrap {
    position: relative;
    width: 100%;
    height: 220px;
    overflow: hidden;
  }

  .wp-screenshot {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    display: block;
    transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
    filter: brightness(0.85) saturate(0.9);
  }

  .wp-card:hover .wp-screenshot {
    transform: scale(1.06) translateY(-4px);
    filter: brightness(1) saturate(1.1);
  }

  /* Overlay on screenshot */
  .wp-screenshot-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 40%, #080d14 100%);
    z-index: 1;
  }

  /* Live badge */
  .wp-live-badge {
    position: absolute;
    top: 14px; right: 14px;
    z-index: 2;
    display: flex; align-items: center; gap: 6px;
    padding: 4px 12px;
    background: rgba(2,4,9,0.85);
    border: 1px solid rgba(0,255,135,0.3);
    backdrop-filter: blur(6px);
    font-family: 'Orbitron', monospace;
    font-size: 0.6rem;
    letter-spacing: 2px;
    color: #00ff87;
    text-transform: uppercase;
  }
  .wp-live-dot {
    width: 5px; height: 5px;
    background: #00ff87;
    border-radius: 50%;
    box-shadow: 0 0 8px #00ff87;
    animation: pulse 2s infinite;
  }

  /* Card info */
  .wp-info {
    padding: 24px;
    position: relative;
  }

  .wp-num {
    font-family: 'Orbitron', monospace;
    font-size: 0.6rem;
    letter-spacing: 3px;
    opacity: 0.4;
    margin-bottom: 8px;
  }

  .wp-title {
    font-family: 'Orbitron', monospace;
    font-weight: 700;
    font-size: 1rem;
    color: #fff;
    margin-bottom: 10px;
    transition: color 0.3s;
  }
  .wp-card:hover .wp-title { color: var(--card-accent, #00ff87); }

  .wp-desc {
    font-size: 0.82rem;
    color: rgba(200,214,232,0.55);
    line-height: 1.7;
    margin-bottom: 18px;
  }

  .wp-tags {
    display: flex; flex-wrap: wrap; gap: 8px;
    margin-bottom: 20px;
  }
  .wp-tag {
    font-size: 0.68rem;
    letter-spacing: 1px;
    padding: 4px 10px;
    border: 1px solid rgba(0,255,135,0.2);
    color: rgba(200,214,232,0.6);
    background: rgba(0,255,135,0.04);
    clip-path: polygon(4px 0%,100% 0%,calc(100% - 4px) 100%,0% 100%);
    transition: all 0.25s;
  }
  .wp-card:hover .wp-tag {
    border-color: rgba(0,255,135,0.35);
    color: rgba(200,214,232,0.9);
  }

  /* Bottom hover line */
  .wp-hover-line {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .wp-card:hover .wp-hover-line { opacity: 1; }

  /* View site link */
  .wp-view-link {
    font-family: 'Orbitron', monospace;
    font-size: 0.65rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    padding-bottom: 2px;
    border-bottom: 1px solid rgba(0,255,135,0.3);
    transition: all 0.2s;
    display: inline-block;
  }
  .wp-view-link:hover {
    border-color: var(--card-accent, #00ff87);
    text-shadow: 0 0 20px var(--card-accent, #00ff87);
  }

  /* Lightbox */
  .wp-lightbox {
    position: fixed; inset: 0;
    background: rgba(2,4,9,0.95);
    z-index: 1000;
    display: flex; align-items: center; justify-content: center;
    backdrop-filter: blur(12px);
    animation: fadeIn 0.2s ease;
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .wp-lightbox-img {
    max-width: 85vw;
    max-height: 85vh;
    object-fit: contain;
    border: 1px solid rgba(0,255,135,0.2);
    box-shadow: 0 0 80px rgba(0,255,135,0.1);
  }

  .wp-lightbox-close {
    position: absolute;
    top: 30px; right: 40px;
    font-family: 'Orbitron', monospace;
    font-size: 0.7rem;
    letter-spacing: 3px;
    color: rgba(200,214,232,0.5);
    background: none;
    border: 1px solid rgba(200,214,232,0.15);
    padding: 8px 18px;
    cursor: none;
    text-transform: uppercase;
    transition: all 0.2s;
  }
  .wp-lightbox-close:hover {
    color: #00ff87;
    border-color: rgba(0,255,135,0.4);
  }

  .wp-lightbox-title {
    position: absolute;
    bottom: 40px;
    font-family: 'Orbitron', monospace;
    font-size: 0.8rem;
    letter-spacing: 3px;
    color: #00ff87;
    text-shadow: 0 0 20px #00ff8766;
    text-transform: uppercase;
  }

  @media (max-width: 1024px) {
    .wp-grid { grid-template-columns: repeat(2, 1fr); }
    .wp-card:last-child:nth-child(3n+1) { grid-column: auto; }
  }

  @media (max-width: 640px) {
    .wp-section { padding: 80px 24px; }
    .wp-grid { grid-template-columns: 1fr; }
    .wp-section::before { left: 24px; right: 24px; }
  }
`;

export default function WordpressShowcase() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <style>{styles}</style>

      <section className="wp-section" id="wordpress">
        {/* Section Header */}
        <p className="section-label reveal">// wordpress builds</p>
        <h2 className="section-title reveal">
          Web Design <span>Showcase</span>
        </h2>

        {/* Grid */}
        <div className="wp-grid">
          {wpSites.map((site, i) => (
            <div
              key={site.num}
              className="wp-card reveal"
              style={{
                '--card-accent': site.accent,
                transitionDelay: `${(i % 3) * 0.1}s`,
              }}
            >
              {/* Screenshot */}
              <div
                className="wp-screenshot-wrap"
                onClick={() => setLightbox(site)}
                style={{ cursor: 'zoom-in' }}
                title="Click to enlarge"
              >
                <img
                  src={site.img}
                  alt={site.title}
                  className="wp-screenshot"
                  onError={e => {
                    // fallback placeholder if image missing
                    e.target.style.display = 'none';
                    e.target.parentNode.style.background =
                      'linear-gradient(135deg, #0d1421, #041a2e)';
                    e.target.parentNode.innerHTML += `
                      <div style="display:flex;align-items:center;justify-content:center;height:100%;font-family:Orbitron,monospace;font-size:0.65rem;letter-spacing:3px;color:rgba(0,255,135,0.3);text-transform:uppercase;">
                        ${site.num} — ${site.title}
                      </div>`;
                  }}
                />
                <div className="wp-screenshot-overlay" />
                <div className="wp-live-badge">
                  <span className="wp-live-dot" />
                  WordPress
                </div>
              </div>

              {/* Info */}
              <div className="wp-info">
                <div className="wp-num" style={{ color: site.accent }}>
                  {site.num} / 06
                </div>
                <h3 className="wp-title">{site.title}</h3>
                <p className="wp-desc">{site.desc}</p>

                <div className="wp-tags">
                  {site.tags.map(t => (
                    <span className="wp-tag" key={t}>{t}</span>
                  ))}
                </div>

                <a
                  href="#"
                  className="wp-view-link"
                  style={{ color: site.accent }}
                >
                  View Site →
                </a>
              </div>

              {/* Bottom glow line on hover */}
              <div
                className="wp-hover-line"
                style={{
                  background: `linear-gradient(90deg, transparent, ${site.accent}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="wp-lightbox" onClick={() => setLightbox(null)}>
          <img
            src={lightbox.img}
            alt={lightbox.title}
            className="wp-lightbox-img"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="wp-lightbox-close"
            onClick={() => setLightbox(null)}
          >
            ✕ Close
          </button>
          <div className="wp-lightbox-title">{lightbox.title}</div>
        </div>
      )}
    </>
  );
}