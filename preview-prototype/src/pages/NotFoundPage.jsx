import { withLocalePath } from "../routes.js";

export function NotFoundPage({ locale, text }) {
  return <main id="main-content" className="editorial-page" tabIndex="-1"><section className="editorial-copy"><h1>{text.heading}</h1><p>{text.body}</p><a className="text-link" href={withLocalePath("/", locale)}>{text.cta}</a></section></main>;
}
