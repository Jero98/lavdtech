import { site } from '../config/site.js'
import './Specs.css'

export default function Specs() {
  const data = site.specs
  return (
    <section className="section section--dark specs" id={data.id}>
      <div className="container">
        <p className="eyebrow">{data.eyebrow}</p>
        <h2 className="section-title">{data.title}</h2>
        <div className="specs__wrap">
          <table>
            <caption className="sr-only">Especificaciones técnicas del sistema LAVD</caption>
            <thead>
              <tr>
                <th scope="col">Módulo / componente</th>
                <th scope="col">Especificación tecnológica</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row) => (
                <tr key={row.module}>
                  <td>{row.module}</td>
                  <td>{row.spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
