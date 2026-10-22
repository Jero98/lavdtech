import { getDemoHref, site } from '../config/site.js'
import Button from './Button.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__media" aria-hidden="true">
        <img src={site.images.hero} alt="" />
        <div className="hero__shade" />
      </div>
      <div className="container hero__grid">
        <div>
          <p className="eyebrow">{site.hero.eyebrow}</p>
          <h1>{site.hero.title}</h1>
          <p className="hero__lead">{site.hero.lead}</p>
          <div className="hero__actions">
            <Button href={getDemoHref()} withArrow>
              {site.cta.label}
            </Button>
            <Button href={site.cta.secondaryHref} variant="ghost">
              {site.cta.secondaryLabel}
            </Button>
          </div>
          <ul className="hero__meta">
            {site.hero.meta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="hud" aria-hidden="true">
          <img src={site.images.fleet} alt="" />
          <div className="hud__overlay" />
          <div className="hud__frame">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="hud__box" />
          <div className="hud__radar" />
          <div className="hud__chip">TTC · RADAR 24 GHz</div>
        </div>
      </div>
    </section>
  )
}
