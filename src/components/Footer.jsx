import { site } from '../config/site.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <strong>{site.company.name}</strong>
          <p>{site.company.acronym}. {site.footer.note}</p>
          <small>© {year} {site.footer.copyrightName}. Contenido sujeto a configuración comercial.</small>
        </div>
        <p>{site.company.tagline}</p>
      </div>
    </footer>
  )
}
