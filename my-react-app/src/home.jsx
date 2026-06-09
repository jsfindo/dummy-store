


import { Link } from 'react-router-dom';
import './home.css'

export default function Home() {
  // 1. We define the function here inside the component
  const scrollToShop = (e) => {
    e.preventDefault();
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">New collection — Summer 2026</p>
          <h1 className="hero-title">
            Goods made to <em>last</em>
          </h1>
          <p className="hero-subtitle">
            Thoughtfully crafted products for everyday life. No shortcuts,
            no excess — just things worth owning.
          </p>
          {/* 2. Now this onClick call will find the function above perfectly */}
          <button className="btn-primary" onClick={scrollToShop} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            Shop Now
          </button>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M200 480 C200 480 40 340 60 180 C80 60 180 20 200 20 C220 20 320 60 340 180 C360 340 200 480 200 480Z" fill="white"/>
            <path d="M200 480 L200 20" stroke="white" strokeWidth="2"/>
            <path d="M200 200 C160 160 100 150 80 120" stroke="white" strokeWidth="1.2"/>
            <path d="M200 260 C240 220 300 210 320 180" stroke="white" strokeWidth="1.2"/>
            <path d="M200 320 C155 285 110 275 90 248" stroke="white" strokeWidth="1.2"/>
            <path d="M200 380 C245 348 285 338 308 312" stroke="white" strokeWidth="1.2"/>
          </svg>
          <div className="hero-visual-inner">
            <p className="hero-visual-tagline">Grown with intention</p>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="about-label" aria-hidden="true">
          <span>About</span>
        </div>
        <div className="about-content">
          <p className="section-eyebrow">Who we are</p>
          <h2 className="section-title">A small shop with a long view</h2>
          <p className="section-body">
            Verdant started at a kitchen table with a simple question: why is it so hard to find
            everyday goods that are well-made and honestly priced? We source every product with
            care, work directly with makers, and only carry things we'd use ourselves.
          </p>
          <p className="section-body">
            We're a team of six — designers, makers, and chronic over-researchers who believe
            that the objects around you shape the quality of your days.
          </p>
        </div>
      </section>

      <section id="mission">
        <div className="mission-header">
          <p className="mission-eyebrow">Our Mission</p>
          <h2 className="mission-title">Better things, used longer</h2>
        </div>
        <div className="mission-pillars">
          <div className="pillar">
            <p className="pillar-title">Honest Materials</p>
            <p className="pillar-body">Every material is named and sourced transparently. If we can't tell you where it came from, we don't carry it.</p>
          </div>
          <div className="pillar">
            <p className="pillar-title">Fair Trade</p>
            <p className="pillar-body">We pay makers a living wage and share their stories. Good work deserves fair compensation — full stop.</p>
          </div>
          <div className="pillar">
            <p className="pillar-title">Built to Endure</p>
            <p className="pillar-body">We repair what we sell. Every product comes with a lifetime repair guarantee so it stays out of landfill.</p>
          </div>
        </div>
      </section>

      <section className="cta-banner" id="shop">
        <h2>Ready to find something worth keeping?</h2>
        <p>Browse the full collection — from kitchen tools to everyday carry, each piece chosen to earn a permanent place in your home.</p>
        <Link className="btn-primary" to="/shop">Shop Now</Link>
      </section>

      <footer>
        <span>© 2026 Verdant</span>
        <span>
          <Link to="/contact">Contact</Link> · <Link to="/returns">Returns</Link> · <Link to="/privacy">Privacy</Link>
        </span>
      </footer>
    </div>
  );
}