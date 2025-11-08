import React from "react";

const items = [
  { title:"VG-Scout", role:"Reconnaissance", desc:"Lightweight rapid-deploy platform for short-range ISR and observation." },
  { title:"VG-Hawk", role:"Tactical Endurance", desc:"Medium-range UAV with extended loiter time and encrypted comms." },
  { title:"VG-Guardian", role:"Heavy Payload", desc:"Large platform for payload delivery, EW support, and extended surveillance." },
  { title:"VG-Core", role:"Autonomy Suite", desc:"AI navigation, swarm coordination and mission planning software." }
];

export default function Products(){
  return (
    <section id="products" className="products">
      <div className="section-title">Capabilities & Products</div>
      <div className="grid">
        {items.map(it => (
          <article className="card" key={it.title}>
            <div className="role">{it.role}</div>
            <h4>{it.title}</h4>
            <p>{it.desc}</p>
            <div style={{marginTop:12}}>
              <a href="#contact" style={{color:"var(--orange)", textDecoration:"none", fontWeight:700}}>Request specs →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
