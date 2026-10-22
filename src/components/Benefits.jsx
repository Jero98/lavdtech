import { site } from '../config/site.js'
import Icon from './Icon.jsx'
import './Benefits.css'

export default function Benefits() {
  const data = site.benefits
  return (
    <section className="section section--light" id={data.id}>
      <div className="container">
        <p className="eyebrow">{data.eyebrow}</p>
        <h2 className="section-title">{data.title}</h2>
        <div className="benefits__grid">
          {data.items.map((item) => (
            <article key={item.title}>
              <div className="icon-badge">
                <Icon name={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
