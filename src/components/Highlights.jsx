import React from "react";

const bullets = [
  { title:"Autonomous Navigation", desc:"Robust GNSS-denied navigation and AI-based path planning." },
  { title:"Secure Communications", desc:"Encrypted, anti-jam communications with layered fallback." },
  { title:"Field-Proven Reliability", desc:"Designed and tested for harsh environments and extended ops." }
];

export default function Highlights(){
  return (
    <section id="highlights" className="highlights">
      {bullets.map(b => (
        <div className="hl panel" key={b.title}>
          <h5>{b.title}</h5>
          <p>{b.desc}</p>
        </div>
      ))}
    </section>
  );
}
