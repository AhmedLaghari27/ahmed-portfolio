import { useEffect } from 'react';
import Cursor   from './components/Cursor';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import About    from './components/About';
import Skills   from './components/Skills';
import Projects from './components/Projects';
import Contact  from './components/Contact';
import Footer   from './components/Footer';
import { useReveal } from './hooks/useReveal';

export default function App() {
  // Activate scroll reveal for every section
  useReveal();

  // Re-run reveal when sections mount (after route-like navigation)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Animated neon cursor — hidden on touch devices via CSS */}
      <Cursor />

      {/* Fixed navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />

        <div className="neon-divider" />
        <About />

        <div className="neon-divider" />
        <Skills />

        <div className="neon-divider" />
        <Projects />

        <div className="neon-divider" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
