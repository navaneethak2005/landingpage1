import React from "react";

export default function Hero(){
  return (
    <>
      <header className="header">
        <div className="logo">VyomGarud</div>
        <nav className="nav">
          <a href="#products">Products</a>
          <a href="#highlights">Highlights</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-left">
          <h1 className="h-title">Precision. Power. Autonomy.</h1>
          <p className="h-sub">Advanced UAV systems engineered for mission-critical operations — hardened for harsh environments, optimized for endurance, and driven by autonomous decisioning.</p>

          <div className="cta-row">
            <button className="btn" onClick={()=>document.getElementById("products").scrollIntoView({behavior:"smooth"})}>Explore Our Systems</button>
            <button className="btn-ghost" onClick={()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"})}>Request Demo</button>
          </div>

          <div style={{marginTop:14, color:"var(--muted)", fontSize:13}}>Contact: +91 8881444693 • info@vyomgarud.example</div>
        </div>

        <div className="hero-right">
          <div className="visual-card panel">
            <img src="/drone.svg" alt="Drone silhouette" style={{width:"100%", opacity:0.9}} />
          </div>
        </div>
      </section>
    </>
  );
}
