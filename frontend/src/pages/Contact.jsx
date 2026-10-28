import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Clock, Info, Mail, MapPin, Phone } from 'lucide-react'
import { images, site } from '../data/siteContent.js'
import { PageHero, SectionHeading } from '../components/ui.jsx'

const initialForm = { name: '', email: '', subject: '', message: '' }

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (values.subject.trim().length < 3) errors.subject = 'Please enter a short subject.'
  if (values.message.trim().length < 10) errors.message = 'Please write at least 10 characters so we can understand your enquiry.'
  if (values.message.length > 2000) errors.message = 'Please keep your message under 2,000 characters.'
  return errors
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState({ type: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const product = searchParams.get('product')
    if (product) {
      setForm((current) => ({
        ...current,
        subject: `Product enquiry: ${product}`,
        message: current.message || `Hello, I would like more information about ${product}.`
      }))
    }
  }, [searchParams])

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function blur(field) {
    setTouched((current) => ({ ...current, [field]: true }))
    setErrors(validate({ ...form, [field]: form[field] }))
  }

  async function submit(event) {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    setTouched({ name: true, email: true, subject: true, message: true })
    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields and try again.' })
      return
    }

    setSubmitting(true)
    setStatus({ type: '', message: '' })
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        setStatus({ type: 'error', message: data.message || 'The form could not be submitted. Please try again.' })
        if (data.errors) setErrors(data.errors)
        return
      }

      // The API is honest by design: in demo mode it does not send email.
      setStatus({
        type: data.emailSent ? 'success' : 'demo',
        message: data.message || 'Your enquiry was received.'
      })
      if (!data.emailSent) {
        // Keep the message visible so the user can copy it or use the
        // placeholder contact details until email is configured.
      } else {
        setForm(initialForm)
      }
    } catch {
      setStatus({ type: 'error', message: 'Could not reach the server. Please check that the backend is running and try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  const fieldError = (field) => touched[field] && errors[field]

  return (
    <main>
      <PageHero
        title="Contact Us"
        text="Send an enquiry about equipment, services or support. We will respond with the next steps."
        image={images.contactHero}
        imageAlt={images.contactHeroAlt}
      />

      <section className="section">
        <div className="container contact-layout">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Contact information"
              text="All contact details below are placeholders until the client confirms them."
            />
            <ul className="contact-details">
              <li><Mail size={20} aria-hidden="true" /><div><strong>Email</strong><span>{site.email}</span></div></li>
              <li><Phone size={20} aria-hidden="true" /><div><strong>Phone</strong><span>{site.phone}</span></div></li>
              <li><MapPin size={20} aria-hidden="true" /><div><strong>Address</strong><span>{site.address}</span></div></li>
              <li><Clock size={20} aria-hidden="true" /><div><strong>Working hours</strong><span>{site.workingHours}</span></div></li>
            </ul>
            <p className="notice notice-info">
              <Info size={18} aria-hidden="true" />
              <span><strong>Demo notice:</strong> email delivery is not configured yet. The form below validates your message and returns an honest demo response instead of pretending an email was sent.</span>
            </p>
          </div>

          <form className="contact-form" onSubmit={submit} noValidate aria-label="Contact form">
            <h2>Send a message</h2>

            {status.message && (
              <p className={`form-status ${status.type}`} role="status">{status.message}</p>
            )}

            <div className="form-field">
              <label htmlFor="contact-name">Full name</label>
              <input
                id="contact-name" type="text" autoComplete="name" value={form.name}
                onChange={(event) => update('name', event.target.value)}
                onBlur={() => blur('name')} aria-invalid={Boolean(fieldError('name'))}
                aria-describedby={fieldError('name') ? 'name-error' : undefined}
              />
              {fieldError('name') && <p className="field-error" id="name-error">{errors.name}</p>}
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email" type="email" autoComplete="email" value={form.email}
                onChange={(event) => update('email', event.target.value)}
                onBlur={() => blur('email')} aria-invalid={Boolean(fieldError('email'))}
                aria-describedby={fieldError('email') ? 'email-error' : undefined}
              />
              {fieldError('email') && <p className="field-error" id="email-error">{errors.email}</p>}
            </div>

            <div className="form-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject" type="text" value={form.subject}
                onChange={(event) => update('subject', event.target.value)}
                onBlur={() => blur('subject')} aria-invalid={Boolean(fieldError('subject'))}
                aria-describedby={fieldError('subject') ? 'subject-error' : undefined}
              />
              {fieldError('subject') && <p className="field-error" id="subject-error">{errors.subject}</p>}
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message" rows={6} value={form.message}
                onChange={(event) => update('message', event.target.value)}
                onBlur={() => blur('message')} aria-invalid={Boolean(fieldError('message'))}
                aria-describedby={fieldError('message') ? 'message-error' : undefined}
              />
              {fieldError('message') && <p className="field-error" id="message-error">{errors.message}</p>}
              <p className="char-count">{form.message.length} / 2,000 characters</p>
            </div>

            <button type="submit" className="button button-primary full-width" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send Message'}
            </button>
            <p className="form-note">Demo mode: no message is emailed until an email provider is configured on the backend.</p>
          </form>
        </div>
      </section>
    </main>
  )
}
