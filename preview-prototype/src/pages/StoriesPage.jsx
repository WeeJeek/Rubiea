import { useState } from "react";
import { fictionalStoryDemos, publishedMoments, showFictionalStoryDemos } from "../content.js";
import { HOME_PATH } from "../routes.js";

function DemoButtons({ locale, selectedId, onSelect }) {
  return fictionalStoryDemos.map((item) => {
    const demo = item[locale];
    return <button key={item.id} className={item.id === selectedId ? "is-selected" : ""} type="button" onClick={() => onSelect(item.id)}><span>{demo.title}</span><small>{demo.summary}</small></button>;
  });
}

export function StoriesPage({ text, locale, onNavigate }) {
  const stories = text.stories;
  const [selectedId, setSelectedId] = useState(fictionalStoryDemos[0].id);
  const selected = fictionalStoryDemos.find((demo) => demo.id === selectedId) ?? fictionalStoryDemos[0];
  const demo = selected[locale];
  const renderDemo = showFictionalStoryDemos && fictionalStoryDemos.length > 0;

  return <main id="main-content" tabIndex="-1" className="stories-page"><section className="stories-stage"><img src="/assets/rubiae-moments-rain-street-v2.png" alt="" aria-hidden="true" />{renderDemo ? <div className="stories-demo-layout"><nav className="stories-index" aria-label={stories.allDemos}><p className="eyebrow">{stories.demoLabel}</p><DemoButtons locale={locale} selectedId={selectedId} onSelect={setSelectedId} /></nav><details className="stories-index-mobile"><summary>{stories.allDemos}</summary><div><DemoButtons locale={locale} selectedId={selectedId} onSelect={setSelectedId} /></div></details><article className="stories-paper"><p className="eyebrow">{stories.label}</p><p className="stories-demo-boundary">{demo.boundary}</p><h1>{demo.title}</h1><p className="stories-demo-byline">{stories.demoByline}</p><p className="stories-intro">{demo.body}</p></article></div> : <div className="stories-paper"><p className="eyebrow">{stories.label}</p><h1>{stories.title}</h1><p className="stories-intro">{stories.intro}</p>{publishedMoments.length === 0 ? <section className="stories-empty"><h2>{stories.emptyTitle}</h2><p>{stories.emptyBody}</p><a className="text-link" href={HOME_PATH} onClick={(event) => onNavigate(event, HOME_PATH)}>{stories.back}</a></section> : null}</div>}</section></main>;
}
