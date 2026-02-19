import { useState } from 'react';
import './Contact.css';

const socials = [
  { icon: '💼', label: 'LinkedIn',  href: '#', color: '#00e5ff', href: "https://www.linkedin.com/in/ahmed-laghari-863b05250" },
  { icon: '🐙', label: 'GitHub',   href: '#', color: '#00ff87',href:"https://github.com/AhmedLaghari27" },

];

export default function Contact() {
  const [form, setForm]   = useState({ name: '', email: '', message: '' });
  const [sent, setSent]   = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="section-wrapper contact-section" id="contact">
      <div className="contact-inner">
        {/* Left: info */}
        <div className="contact-info">
          <p className="section-label reveal">// get in touch</p>
          <h2 className="section-title reveal">
            Let's <span>Connect</span>
          </h2>
          <p className="contact-tagline reveal">
            Have a project in mind or want to collaborate? I'm always open
            to exciting opportunities and creative challenges.
          </p>

          <div className="contact-email reveal">
            <span className="contact-email-label">Email</span>
            <a href="mailto:ahmedlaghari27@email.com" className="contact-email-addr">
              ahmedlaghari27@email.com
            </a>
          </div>

          <div className="contact-socials reveal">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                className="social-card hoverable"
                style={{ '--accent': s.color }}
              >
                <span className="social-icon">{s.icon}</span>
                <span className="social-label">{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="contact-form-wrapper reveal">
          <div className="form-header">
            <span className="form-dot" />
            <span className="form-dot" style={{ background: 'var(--cyan)' }} />
            <span className="form-dot" style={{ background: 'var(--pink)', boxShadow: 'var(--glow-pink)' }} />
            <span className="form-title">Send a Message</span>
          </div>

          {sent && (
            <div className="form-success">
              ✅ Message sent! I'll get back to you soon.
            </div>
          )}
          {error && <div className="form-error">⚠️ {error}</div>}

          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-input form-textarea"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="form-submit hoverable">
              <span>Send Message</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
