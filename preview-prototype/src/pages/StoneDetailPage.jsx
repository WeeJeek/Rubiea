import { useState } from "react";
import { previewStone } from "../content.js";

function FactList({ facts }) { return <dl className="stone-facts">{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>; }

export function StoneDetailPage({ text }) {
  const [open, setOpen] = useState(false);
  const stone = text.stone;
  return <main id="main-content" tabIndex="-1" className="stone-detail">
    <section className="stone-top"><figure className="stone-lifestyle"><img src={previewStone.images.lifestyle} alt="Preview illustration of a red gemstone held with tweezers by a rainy window" /></figure><div className="stone-rail"><p className="eyebrow">{stone.label}</p><h1>{stone.title}</h1><p className="stone-reference">{previewStone.id}</p><p className="stone-intro">{stone.intro}</p><section><h2>{stone.stoneInfo}</h2><FactList facts={stone.facts} /></section><section><h2>{stone.known}</h2><FactList facts={stone.knownFacts} /></section><p className="stone-preview-note">{stone.evidenceNote}</p></div></section>
    <section className="stone-evidence" aria-labelledby="evidence-title"><div className="evidence-heading"><h2 id="evidence-title">{stone.evidence}</h2><p>{stone.evidenceNote}</p></div><img src={previewStone.images.neutral} alt="Preview illustration of the gemstone on a neutral surface" /><img src={previewStone.images.macro} alt="Preview illustration of the gemstone in macro side view" /><button className="evidence-disclosure" type="button" aria-expanded={open} onClick={() => setOpen((current) => !current)}><span>{stone.furtherEvidence}</span><span>{open ? "−" : "+"}</span></button>{open && <div className="evidence-more">{stone.views.map(([label, key]) => <figure key={key}><img src={previewStone.images[key]} alt={`${label} preview illustration`} />{key === "video" && <span className="video-mark" aria-hidden="true">▷</span>}<figcaption>{label}</figcaption></figure>)}</div>}</section>
    <section className="stone-inquiry"><div><h2>{stone.inquiry}</h2><p>{stone.inquiryNote}</p></div><a className="inquiry-link" href="mailto:hello@rubiae.example">{stone.inquiryCta}<span aria-hidden="true">⟶</span></a></section>
  </main>;
}
