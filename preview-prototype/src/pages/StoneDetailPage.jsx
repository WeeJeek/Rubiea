import { useState } from "react";
import { previewStone } from "../content.js";

function FactList({ facts }) {
  return <dl className="stone-facts">{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>;
}

function EvidenceView({ alt, image, label }) {
  return <figure className="evidence-view"><img src={image} alt={alt} /><figcaption>{label}</figcaption></figure>;
}

export function StoneDetailPage({ text }) {
  const [evidenceOpen, setEvidenceOpen] = useState(false);
  const stone = text.stone;
  return <main id="main-content" tabIndex="-1" className="stone-detail">
    <section className="stone-detail-hero">
      <figure className="stone-lifestyle"><img src={previewStone.images.lifestyle} alt={stone.imageAlts.lifestyle} /></figure>
      <div className="stone-identity"><h1>{stone.title}</h1><p className="stone-reference">{previewStone.id}</p></div>
      <div className="stone-fact-rail"><section><h2>{stone.stoneInfo}</h2><FactList facts={stone.facts} /></section><section><h2>{stone.known}</h2><FactList facts={stone.knownFacts} /></section><p className="stone-preview-notice">{stone.previewNotice}</p><p className="stone-preview-note">{stone.evidenceNote}</p></div>
    </section>
    <section className="stone-evidence" aria-labelledby="evidence-title">
      <div className="evidence-heading"><h2 id="evidence-title">{stone.evidence}</h2><p>{stone.evidenceIntro}</p></div>
      {stone.evidenceViews.map(([label, key]) => <EvidenceView key={key} image={previewStone.images[key]} alt={stone.imageAlts[key]} label={label} />)}
      <button className="evidence-disclosure" type="button" aria-expanded={evidenceOpen} aria-controls="stone-supporting-evidence" onClick={() => setEvidenceOpen((current) => !current)}><span>{stone.furtherEvidence}</span><small>{evidenceOpen ? stone.closeEvidence : stone.openEvidence}</small></button>
      {evidenceOpen && <div className="evidence-more" id="stone-supporting-evidence">{stone.views.map(([label, key]) => <EvidenceView key={key} image={previewStone.images[key]} alt={stone.imageAlts[key]} label={label} />)}</div>}
    </section>
    <section className="stone-inquiry"><div><h2>{stone.inquiry}</h2><p>{stone.inquiryNote}</p></div><a className="inquiry-link" href="mailto:hello@rubiae.example">{stone.inquiryCta}</a></section>
  </main>;
}
