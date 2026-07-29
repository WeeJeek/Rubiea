import { PreviewNotice } from "../components/PreviewNotice.jsx";
import { StoneCard } from "../components/StoneCard.jsx";

export function StonesPage({ stones, locale, text }) {
  return (
    <main id="main-content" tabIndex="-1">
      <section className="catalogue-page section-light" aria-labelledby="stones-title">
        <div className="catalogue-heading">
          <p className="eyebrow">{text.eyebrow}</p>
          <h1 id="stones-title">{text.heading}</h1>
          <p>{text.intro}</p>
          <PreviewNotice>{text.previewNote}</PreviewNotice>
        </div>
        <div className="stone-grid">
          {stones.map((stone) => <StoneCard key={stone.id} stone={stone} locale={locale} text={text} />)}
        </div>
      </section>
    </main>
  );
}
