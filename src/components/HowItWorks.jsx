import { site } from '../config/site.js'
import Icon from './Icon.jsx'
import './HowItWorks.css'

export default function HowItWorks() {
  const data = site.how
  return (
    <section className="section section--white" id={data.id}>
      <div className="container">
        <div className="how__head">
          <p className="eyebrow">{data.eyebrow}</p>
          <h2 className="section-title">{data.title}</h2>
          <p className="section-lead">{data.intro}</p>
        </div>
        <div className="how__items">
          {data.items.map((item) => (
            <article className="how__item" key={item.step}>
              <span className="how__step">{item.step}</span>
              <div className="icon-badge">
                <Icon name={item.icon} />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <ul className="how__sensors">
          {data.sensors.map((sensor) => (
            <li key={sensor.label}>
              <Icon name={sensor.icon} />
              {sensor.label}
            </li>
          ))}
        </ul>
        <aside className="how__aside">
          <img src={site.images.hardware} alt="Placa electrónica de procesamiento, referencia visual de hardware embebido." />
          <p>
            El núcleo de procesamiento ESP32-S3 concentra visión, radar Doppler, IMU y GNSS en un dispositivo de
            montaje posterior, con alimentación solar independiente del vehículo.
          </p>
        </aside>
      </div>
    </section>
  )
}
