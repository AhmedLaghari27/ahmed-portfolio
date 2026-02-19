import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-left">
        <span className="footer-logo">AL<span>.</span></span>
        <span className="footer-copy">© {year} Ahmed Laghari. All rights reserved.</span>
      </div>
      <div className="footer-center">
        <div className="footer-status">
          <span className="status-dot" />
          All systems operational
        </div>
      </div>
      <div className="footer-right">
        <span className="footer-built">Built with React ⚡</span>
      </div>
    </footer>
  );
}
