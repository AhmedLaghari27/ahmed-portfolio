import { useEffect, useRef, useState } from 'react';
import './Cursor.css';

export default function Cursor() {
  const cursorRef = useRef(null);
  const trailRef  = useRef(null);
  const mouse     = useRef({ x: 0, y: 0 });
  const trail     = useRef({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onMove = e => { mouse.current = { x: e.clientX, y: e.clientY }; };

    const onOver = e => {
      const el = e.target;
      if (el.closest('a, button, .hoverable')) setHovering(true);
    };
    const onOut = e => {
      const el = e.target;
      if (el.closest('a, button, .hoverable')) setHovering(false);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    let raf;
    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = mouse.current.x + 'px';
        cursorRef.current.style.top  = mouse.current.y + 'px';
      }
      if (trailRef.current) {
        trail.current.x += (mouse.current.x - trail.current.x) * 0.12;
        trail.current.y += (mouse.current.y - trail.current.y) * 0.12;
        trailRef.current.style.left = trail.current.x + 'px';
        trailRef.current.style.top  = trail.current.y + 'px';
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`cursor ${hovering ? 'hovering' : ''}`} />
      <div ref={trailRef}  className="cursor-trail" />
    </>
  );
}
