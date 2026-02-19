import './About.css';

const stats = [
  { num: '15+', label: 'Projects Shipped' },
  { num: '2+',  label: 'Years Experience' },
  { num: '10+', label: 'Happy Clients'    },
  { num: '99%', label: 'Satisfaction Rate'},
];

export default function About() {
  return (
    <section className="section-wrapper" id="about">
      <p className="section-label reveal">// about me</p>
      <h2 className="section-title reveal">
        Who Am <span>I?</span>
      </h2>

      <div className="about-grid">
        {/* Text */}
        <div className="about-text reveal">
          <p>
            Hey, I'm <strong>Ahmed Laghari</strong> — a results-driven Full Stack Developer with expertise in React and WordPress development.
          </p>
          <p>
            I specialize in building modern, scalable, and business-focused web applications that not only look great but perform exceptionally.
          </p>
          <p>
            From frontend experiences to backend logic, I turn ideas into powerful digital products that make an impact.
          </p>

          <div className="about-tags">
            {['Problem Solver', 'Detail Oriented', 'Team Player', 'Fast Learner'].map(tag => (
              <span key={tag} className="about-tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats">
          {stats.map((s, i) => (
            <div
              className="stat-card reveal hoverable"
              key={s.label}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="stat-number">{s.num}</span>
              <span className="stat-label">{s.label}</span>
              <div className="stat-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
