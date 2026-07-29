import { withLocalePath } from "../routes.js";

function LegalPage({ page, text }) {
  const fields = page === "privacy" ? [...Object.values(text.sections), text.version] : [text.choice, text.change, text.version];

  return (
    <main id="main-content" className="editorial-page" tabIndex="-1">
      <article className="editorial-copy">
        <h1>{text.title}</h1>
        <p>{text.intro}</p>
        <p className="legal-launch-note" aria-live="polite">{text.launchRequirement}</p>
        {fields.map((field) => <p key={field}>{field}</p>)}
      </article>
    </main>
  );
}

export function EditorialPage({ page, locale, text }) {
  if (page === "privacy" || page === "cookies") return <LegalPage page={page} text={text} />;

  if (page === "stories") {
    return (
      <main id="main-content" className="editorial-page" tabIndex="-1">
        <article className="editorial-copy">
          <p className="eyebrow">{text.eyebrow}</p>
          <h1>{text.heading}</h1>
          <p>{text.intro}</p>
          <p className="editorial-empty" aria-live="polite">{text.emptyState}</p>
        </article>
      </main>
    );
  }

  const isHowToChoose = page === "how-to-choose";
  const isForTrade = page === "for-trade";
  const paragraphs = isHowToChoose ? [] : text.paragraphs || [];

  return (
    <main id="main-content" className="editorial-page" tabIndex="-1">
      <article className="editorial-copy">
        <p className="eyebrow">{text.eyebrow}</p>
        <h1>{text.heading}</h1>
        {text.intro && <p>{text.intro}</p>}
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {isHowToChoose && <ol className="editorial-sections">{text.sections.map((section) => <li key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></li>)}</ol>}
        {isForTrade && <><h2>{text.focusHeading}</h2><ul>{text.focusItems.map((item) => <li key={item}>{item}</li>)}</ul><h2>{text.processHeading}</h2><p>{text.processBody}</p></>}
        <a className="text-link" href={withLocalePath(isForTrade ? "/contact" : "/stones", locale)}>{text.cta}</a>
      </article>
    </main>
  );
}
