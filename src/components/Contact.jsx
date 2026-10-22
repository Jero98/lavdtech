import { useState } from 'react'
import { getMailtoHref, hasRealContact, site } from '../config/site.js'
import Button from './Button.jsx'
import './Contact.css'

function FieldValue({ value, href, prefix = '' }) {
  if (!value) {
    return <span className="pending">{site.contact.pendingLabel}</span>
  }
  if (href) {
    return <a href={href}>{prefix}{value}</a>
  }
  return <span>{prefix}{value}</span>
}

export default function Contact() {
  const data = site.demo
  const contact = site.contact
  const [status, setStatus] = useState('')

  function onSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const payload = {
      name: form.get('name'),
      company: form.get('company'),
      fleet: form.get('fleet'),
      message: form.get('message'),
    }

    if (contact.calendarUrl) {
      window.location.href = contact.calendarUrl
      return
    }

    const mailto = getMailtoHref(payload)
    if (!mailto) {
      setStatus(data.form.hintPending)
      return
    }

    window.location.href = mailto
  }

  return (
    <section
      className="section contact"
      id={data.id}
      style={{ '--contact-image': `url("${site.images.hero}")` }}
    >
      <div className="container contact__grid">
        <div className="contact__copy">
          <p className="eyebrow">{data.eyebrow}</p>
          <h2 className="section-title">{data.title}</h2>
          <p className="section-lead">{data.body}</p>
          <div className="contact__channels">
            <p>
              Correo:{' '}
              <FieldValue value={contact.email} href={contact.email ? `mailto:${contact.email}` : ''} />
            </p>
            <p>
              Teléfono:{' '}
              <FieldValue value={contact.phone} href={contact.phone ? `tel:${contact.phone}` : ''} />
            </p>
            <p>
              WhatsApp:{' '}
              <FieldValue value={contact.whatsapp} href={contact.whatsapp || ''} />
            </p>
            <p>
              Dirección:{' '}
              <FieldValue value={contact.address} />
            </p>
            <p>
              Agenda:{' '}
              <FieldValue value={contact.calendarUrl} href={contact.calendarUrl || ''} />
            </p>
          </div>
        </div>
        <form className="contact__form" onSubmit={onSubmit}>
          <label>
            {data.form.name}
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            {data.form.company}
            <input name="company" type="text" autoComplete="organization" required />
          </label>
          <label>
            {data.form.fleet}
            <select name="fleet" defaultValue={data.form.fleetOptions[0]}>
              {data.form.fleetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            {data.form.message}
            <textarea name="message" required />
          </label>
          <Button type="submit" withArrow>
            {data.form.submit}
          </Button>
          <p className="form-note">{hasRealContact() ? data.form.hintWithEmail : data.form.hintPending}</p>
          {status ? <p className="form-note pending" role="status">{status}</p> : null}
        </form>
      </div>
    </section>
  )
}
