import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    num: '01',
    title: 'Mantix Dashboard',
    desc: 'Mantix Admin Dashboard A sleek, fully responsive admin dashboard built with React and Mantine UI. Features real-time data tables, interactive charts, role-based navigation, and a clean dark-mode interface — designed for managing complex data with simplicity and speed.',
    techs: ['React', 'TypeScript', 'Node.js', 'KeyCloak','Recharts'],
    emoji: '🛒',
    gradient: 'linear-gradient(135deg, #020409 0%, #0a1628 100%)',
    accent: '#00ff87',
    github: 'https://github.com/AhmedLaghari27/Mantix-Admin-Dashboard.git',
  },
  {
    num: '02',
    title: 'Credit Check App',
    desc: 'Real-time analytics dashboard featuring live WebSocket charts, heatmaps, and intelligent data visualization. Dark-mode first with fully responsive layout.',
    techs: ['React', 'Typescript', 'python', 'fastapi', 'openAi'],
    emoji: '💰',
    gradient: 'linear-gradient(135deg, #020409 0%, #041a1a 100%)',
    accent: '#00e5ff',
    github: 'https://github.com/AhmedLaghari27/Loan-Predictor.git',
  },
  {
    num: '03',
    title: 'Iqra Universdity Chatbot',
    desc: 'Developed an interactive chatbot for Iqra University to assist students with quick information about admissions, programs, and university services. The chatbot provides automated responses and improves user engagement by making information easily accessible. Built to demonstrate practical implementation of conversational AI solutions.',
    techs: ['React', 'ollama', 'python', 'fastapi', 'OpenUI API'],
    emoji: '🤖',
    gradient: 'linear-gradient(135deg, #020409 0%, #1a041a 100%)',
    accent: '#ff006e',
    live: '#',
    github: '#',
  },
  // {
  //   num: '04',
  //   title: 'MotionUI Library',
  //   desc: 'An open-source collection of animated React components with zero dependencies. Includes 40+ ready-to-use components with Framer Motion under the hood.',
  //   techs: ['React', 'TypeScript', 'Framer Motion', 'Rollup', 'NPM'],
  //   emoji: '✨',
  //   gradient: 'linear-gradient(135deg, #020409 0%, #141a04 100%)',
  //   accent: '#00ff87',
  //   live: '#',
  //   github: '#',
  // },
  // {
  //   num: '05',
  //   title: 'TaskFlow Pro',
  //   desc: 'Kanban-based project management tool with drag-and-drop, real-time collaboration, Slack integration, and detailed analytics reports.',
  //   techs: ['React', 'Mantine UI', 'DnD Kit', 'Supabase', 'Zustand'],
  //   emoji: '📋',
  //   gradient: 'linear-gradient(135deg, #020409 0%, #041428 100%)',
  //   accent: '#00e5ff',
  //   live: '#',
  //   github: '#',
  // },
  // {
  //   num: '06',
  //   title: 'DevBlog CMS',
  //   desc: 'A blazing-fast headless CMS and blog platform with MDX support, syntax highlighting, comment system, and SEO optimization baked in.',
  //   techs: ['Next.js', 'MDX', 'Contentful', 'Vercel', 'TypeScript'],
  //   emoji: '✍️',
  //   gradient: 'linear-gradient(135deg, #020409 0%, #1a0a04 100%)',
  //   accent: '#ff006e',
  //   live: '#',
  //   github: '#',
  // },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="section-wrapper" id="projects">
      <p className="section-label reveal">// selected work</p>
      <h2 className="section-title reveal">
        Featured <span>Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            className="project-card reveal hoverable"
            key={p.num}
            style={{ transitionDelay: `${(i % 3) * 0.12}s` }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Top image area */}
            <div className="project-visual" style={{ background: p.gradient }}>
              <span
                className="project-emoji"
                style={{ filter: `drop-shadow(0 0 24px ${p.accent}88)` }}
              >
                {p.emoji}
              </span>
              <div
                className="project-visual-glow"
                style={{ background: `radial-gradient(circle, ${p.accent}22, transparent 70%)` }}
              />
            </div>

            {/* Corner accent */}
            <div className="project-corner-tl" style={{ borderColor: `${p.accent}66` }} />
            <div className="project-corner-br" style={{ borderColor: `${p.accent}66` }} />

            {/* Info */}
            <div className="project-info">
              <div className="project-num" style={{ color: p.accent }}>
                {p.num} <span style={{ opacity: 0.3 }}>/ 06</span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              <div className="project-techs">
                {p.techs.map(t => (
                  <span
                    className="project-tech"
                    key={t}
                    style={{ borderColor: `${p.accent}33`, color: p.accent }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={p.live}   className="project-link" style={{ color: p.accent }}>
                  Live Demo →
                </a>
                <a href={p.github} className="project-link" style={{ color: 'rgba(200,214,232,0.5)' }}>
                  GitHub →
                </a>
              </div>
            </div>

            {/* Hover line */}
            <div
              className="project-hover-line"
              style={{
                background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)`,
                opacity: hovered === i ? 1 : 0,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
