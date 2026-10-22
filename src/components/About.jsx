import { site } from '../config/site.js'
import './About.css'

export default function About() {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="container about__grid">
        <h2 id="about-title">{site.about.title}</h2>
        <div>
          <p>{site.about.body}</p>
          <p>{site.about.mission}</p>
        </div>
      </div>
    </section>
  )
}
