import { withLocalePath } from "../routes.js";

export function StoneCard({ stone, locale, text }) {
  return (
    <article className="stone-card">
      <img src="/assets/rubiae-facts-macro.png" alt={`Editorial preview of stone ${stone.id}; not product photography.`} loading="lazy" />
      <div className="stone-card-copy">
        <p className="eyebrow">{stone.id}</p>
        <p className="stone-status">{text.status}</p>
        <a className="text-link" href={withLocalePath(`/stones/${encodeURIComponent(stone.id)}`, locale)}>{text.cta}</a>
      </div>
    </article>
  );
}
