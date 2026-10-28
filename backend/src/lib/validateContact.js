export function validateContact(input = {}) {
  const errors = {}
  const name = typeof input.name === 'string' ? input.name.trim() : ''
  const email = typeof input.email === 'string' ? input.email.trim() : ''
  const subject = typeof input.subject === 'string' ? input.subject.trim() : ''
  const message = typeof input.message === 'string' ? input.message.trim() : ''

  if (name.length < 2) errors.name = 'Please enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email address.'
  if (subject.length < 3) errors.subject = 'Please enter a short subject.'
  if (message.length < 10) errors.message = 'Please write at least 10 characters.'
  if (message.length > 2000) errors.message = 'Please keep your message under 2,000 characters.'

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
    value: { name, email, subject, message }
  }
}
