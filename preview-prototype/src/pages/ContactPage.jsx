import { useState } from "react";
import { withLocalePath } from "../routes.js";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactPage({ locale, text }) {
  const [errors, setErrors] = useState({});
  const [launchConsent, setLaunchConsent] = useState(false);

  function validate(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors = {};
    if (!form.get("name")?.trim()) nextErrors.name = text.errors.name;
    if (!emailPattern.test(form.get("email")?.trim() || "")) nextErrors.email = text.errors.email;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    history.pushState({}, "", withLocalePath("/confirmation", locale));
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  return (
    <main id="main-content" className="contact-page editorial-page" tabIndex="-1">
      <section className="editorial-copy" aria-labelledby="contact-heading">
        <h1 id="contact-heading">{text.heading}</h1>
        <p>{text.intro}</p>
        <form noValidate onSubmit={validate} aria-describedby="contact-privacy">
          <div className="form-field">
            <label htmlFor="contact-name">{text.fieldLabels.name}</label>
            <input id="contact-name" name="name" type="text" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} />
            {errors.name && <p id="contact-name-error" className="field-error" aria-live="polite">{errors.name}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">{text.fieldLabels.email}</label>
            <input id="contact-email" name="email" type="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} />
            {errors.email && <p id="contact-email-error" className="field-error" aria-live="polite">{errors.email}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">{text.fieldLabels.message}</label>
            <textarea id="contact-message" name="message" rows="5" />
          </div>
          <label className="LaunchConsent"><input name="launch-consent" type="checkbox" checked={launchConsent} onChange={(event) => setLaunchConsent(event.target.checked)} /> {text.launchNotice}</label>
          <p id="contact-privacy">{text.privacyNote}</p>
          <button type="submit">{text.submit}</button>
        </form>
      </section>
    </main>
  );
}
