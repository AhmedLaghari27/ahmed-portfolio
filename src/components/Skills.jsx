import './Skills.css';

const categories = [
  {
    icon: '⚡',
    title: 'Core Languages',
    color: 'neon',
    tags: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3','Php'],
  },
  {
    icon: '⚛️',
    title: 'Frameworks & Libraries',
    color: 'cyan',
    tags: ['React.js', 'Next.js', 'Redux Toolkit', 'Framer Motion', 'GSAP'],
  },
  {
    icon: '🎨',
    title: 'Styling',
    color: 'pink',
    tags: ['Tailwind CSS', 'Mantine UI', 'Styled Components', 'SCSS / Sass'],
  },
  {
    icon: '🛠️',
    title: 'Tools & Platforms',
    color: 'neon',
    tags: ['Git & GitHub', 'Figma', 'Vite', 'Vercel', 'Firebase'],
  },
  {
    icon: '📦',
    title: 'State Management',
    color: 'cyan',
    tags: ['Redux', 'Zustand', 'React Query', 'Context API'],
  },
  {
    icon: '🧪',
    title: 'Testing & Quality',
    color: 'pink',
    tags: ['Jest', 'React Testing Library', 'ESLint', 'Prettier'],
  },
];

export default function Skills() {
  return (
    <section className="section-wrapper skills-section" id="skills">
      <p className="section-label reveal">// tech stack</p>
      <h2 className="section-title reveal">
        My <span>Skills</span>
      </h2>

      <div className="skills-grid">
        {categories.map((cat, i) => (
          <div
            className={`skill-card reveal skill-card--${cat.color} hoverable`}
            key={cat.title}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="skill-card-header">
              <span className="skill-icon">{cat.icon}</span>
              <span className="skill-cat-title">{cat.title}</span>
            </div>
            <div className="skill-tags">
              {cat.tags.map(tag => (
                <span className="skill-tag" key={tag}>{tag}</span>
              ))}
            </div>
            <div className="skill-card-corner" />
          </div>
        ))}
      </div>
    </section>
  );
}
