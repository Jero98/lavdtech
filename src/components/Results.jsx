import { site } from '../config/site.js'
import './Results.css'

export default function Results() {
  const data = site.results
  return (
    <section className="section section--darker" id={data.id}>
      <div className="container">
        <div className="results__head">
          <p className="eyebrow">{data.eyebrow}</p>
          <h2 className="section-title">{data.title}</h2>
          <p className="results__disclaimer">{data.disclaimer}</p>
        </div>
        <div className="results__grid">
          {data.stats.map((stat) => (
            <article className="stat" key={stat.context}>
              <p className="stat__context">{stat.context}</p>
              <p className="stat__value">{stat.value}</p>
              <p>{stat.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
