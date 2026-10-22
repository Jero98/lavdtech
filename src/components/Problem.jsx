import { site } from '../config/site.js'
import './Problem.css'

export default function Problem() {
  const data = site.problem
  return (
    <section className="section section--light" id={data.id}>
      <div className="container problem__layout">
        <figure className="problem__photo">
          <img src={site.images.problem} alt="Tráfico denso en carretera, contexto de colisión por alcance." />
          <figcaption className="problem__caption">{data.consequence}</figcaption>
        </figure>
        <div>
          <p className="eyebrow">{data.eyebrow}</p>
          <h2 className="section-title">{data.title}</h2>
          <p className="section-lead">{data.body}</p>
          <div className="problem__points">
            {data.points.map((point) => (
              <article key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
