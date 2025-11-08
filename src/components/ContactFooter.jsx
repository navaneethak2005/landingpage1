import React from "react";

export default function ContactFooter(){
  return (
    <>
      <section id="contact" className="contact panel container">
        <div style={{flex:"1 1 320px"}}>
          <h3 style={{margin:0, color:"var(--accent-text)"}}>Request a Demo</h3>
          <p style={{color:"var(--muted)"}}>Tell us a bit about your mission and we'll arrange a demo and capability briefing.</p>
        </div>

        <form className="form" onSubmit={(e)=>{ e.preventDefault(); alert('Demo request submitted (mock).'); }}>
          <input className="input" placeholder="Full name" required />
          <input className="input" placeholder="Email" type="email" required />
          <textarea className="input" placeholder="Message" rows="4"></textarea>
          <div style={{display:"flex", gap:10}}>
            <button type="submit" className="btn">Submit</button>
            <a href="mailto:info@vyomgarud.example" className="btn-ghost" style={{display:"inline-flex",alignItems:"center",textDecoration:"none"}}>Contact Sales</a>
          </div>
        </form>
      </section>

      <footer className="footer container">
        <div>© 2025 VyomGarud</div>
        <div style={{display:"flex", gap:12}}>
          <a href="#" style={{color:"var(--muted)", textDecoration:"none"}}>Privacy</a>
          <a href="#" style={{color:"var(--muted)", textDecoration:"none"}}>Terms</a>
          <a href="mailto:info@vyomgarud.example" style={{color:"var(--muted)", textDecoration:"none"}}>info@vyomgarud.example</a>
        </div>
      </footer>
    </>
  );
}
