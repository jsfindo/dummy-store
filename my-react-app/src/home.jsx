import './home.css'

export default function Home(){

return(
    
    
    <div>

    <div>
        <div className="navbar">

            <h1>Practice store!</h1>
        <nav>
            <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
        </nav>    
            
    </div>    


    



  
  <section class="hero">
    <div class="hero-text">
      <p class="hero-eyebrow">New collection — Summer 2026</p>
      <h1 class="hero-title">
        Goods made to <em>last</em>
      </h1>
      <p class="hero-subtitle">
        Thoughtfully crafted products for everyday life. No shortcuts,
        no excess — just things worth owning.
      </p>
      <a class="btn-primary" href="#shop">Shop Now</a>
    </div>

    <div class="hero-visual" aria-hidden="true">
      
      <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M200 480 C200 480 40 340 60 180 C80 60 180 20 200 20 C220 20 320 60 340 180 C360 340 200 480 200 480Z" fill="white"/>
        <path d="M200 480 L200 20" stroke="white" stroke-width="2"/>
        <path d="M200 200 C160 160 100 150 80 120" stroke="white" stroke-width="1.2"/>
        <path d="M200 260 C240 220 300 210 320 180" stroke="white" stroke-width="1.2"/>
        <path d="M200 320 C155 285 110 275 90 248" stroke="white" stroke-width="1.2"/>
        <path d="M200 380 C245 348 285 338 308 312" stroke="white" stroke-width="1.2"/>
      </svg>
      <div class="hero-visual-inner">
        <p class="hero-visual-tagline">Grown with intention</p>
      </div>
    </div>
  </section>

  
  <section id="about">
    <div class="about-label" aria-hidden="true">
      <span>About</span>
    </div>
    <div class="about-content">
      <p class="section-eyebrow">Who we are</p>
      <h2 class="section-title">A small shop with a long view</h2>
      <p class="section-body">
        Verdant started at a kitchen table with a simple question: why is it so hard to find
        everyday goods that are well-made and honestly priced? We source every product with
        care, work directly with makers, and only carry things we'd use ourselves.
      </p>
      <p class="section-body">
        We're a team of six — designers, makers, and chronic over-researchers who believe
        that the objects around you shape the quality of your days.
      </p>
    </div>
  </section>

  
  <section id="mission">
    <div class="mission-header">
      <p class="mission-eyebrow">Our Mission</p>
      <h2 class="mission-title">Better things, used longer</h2>
    </div>
    <div class="mission-pillars">
      <div class="pillar">
        <p class="pillar-title">Honest Materials</p>
        <p class="pillar-body">Every material is named and sourced transparently. If we can't tell you where it came from, we don't carry it.</p>
      </div>
      <div class="pillar">
        <p class="pillar-title">Fair Trade</p>
        <p class="pillar-body">We pay makers a living wage and share their stories. Good work deserves fair compensation — full stop.</p>
      </div>
      <div class="pillar">
        <p class="pillar-title">Built to Endure</p>
        <p class="pillar-body">We repair what we sell. Every product comes with a lifetime repair guarantee so it stays out of landfill.</p>
      </div>
    </div>
  </section>

  
  <section class="cta-banner" id="shop">
    <h2>Ready to find something worth keeping?</h2>
    <p>Browse the full collection — from kitchen tools to everyday carry, each piece chosen to earn a permanent place in your home.</p>
    <a class="btn-primary" href="#">Shop Now</a>
  </section>

  
  <footer>
    <span>© 2026 Verdant</span>
    <span><a href="#">Contact</a>  <a href="#">Returns</a>  <a href="#">Privacy</a></span>
  </footer>






    </div>
    
</ div>
)

}