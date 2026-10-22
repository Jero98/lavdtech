import { site } from '../config/site.js'
import Icon from './Icon.jsx'
import './Solution.css'

export default function Solution() {
  const data = site.solution
  return (
    <section className="section section--dark" id={data.id}>
      <div className="grid-bg" aria-hidden="true" />
      <div className="container">
        <div className="solution__intro">
          <div>
            <p className="eyebrow">{data.eyebrow}</p>
            <h2 className="section-title">{data.title}</h2>
            <p className="section-lead">{data.body}</p>
          </div>
          <div className="solution__photo">
            <img src={site.images.solution} alt="Camión de carga en operación de flota comercial." />
          </div>
        </div>
        <div className="solution__pillars">
          {data.pillars.map((pillar) => (
            <article key={pillar.title}>
              <div className="icon-badge">
                <Icon name={pillar.icon} />
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
