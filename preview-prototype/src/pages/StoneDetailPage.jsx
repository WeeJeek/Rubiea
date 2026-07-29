import { PreviewNotice } from "../components/PreviewNotice.jsx";
import { StoneFacts } from "../components/StoneFacts.jsx";
import { withLocalePath } from "../routes.js";

export function StoneDetailPage({ stoneId, stone, locale, text, notFound }) {
  if (!stone) {
    return (
      <main id="main-content" tabIndex="-1">
        <section className="catalogue-page section-light"><div className="catalogue-heading"><p className="eyebrow">{stoneId}</p><h1>{notFound.heading}</h1><p>{notFound.body}</p></div></section>
      </main>
    );
  }

  const heading = text.heading.replace("{{gemstone_name}}", stone.facts.material_type || text.unknown);
  const eyebrow = text.eyebrow.replace("{{stone_id}}", stone.id);
  const contactLabel = text.cta || (locale === "nl" ? "Vraag naar deze steen" : "Ask about this stone");
  const contactHref = withLocalePath(`/contact?stone_id=${encodeURIComponent(stone.id)}`, locale);

  return (
    <main id="main-content" tabIndex="-1">
      <section className="catalogue-page stone-detail section-light" aria-labelledby="stone-title">
        <div className="catalogue-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="stone-title">{heading}</h1>
          <p>{text.intro}</p>
          <PreviewNotice>{text.status}</PreviewNotice>
        </div>
        <div className="stone-detail-layout">
          <img className="stone-detail-image" src="/assets/rubiae-slow-look-pendant.png" alt={`Editorial preview for stone ${stone.id}; not product photography.`} loading="lazy" />
          <section aria-labelledby="facts-heading"><h2 id="facts-heading">{text.factsHeading}</h2><p>{text.factsBody}</p><StoneFacts facts={stone.facts} labels={text.fieldLabels} unknown={text.unknown} /><a className="solid-link" href={contactHref}>{contactLabel}</a></section>
        </div>
      </section>
    </main>
  );
}
