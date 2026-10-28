import { Router } from 'express'
import { validateContact } from '../lib/validateContact.js'
import { isEmailConfigured, sendContactEmail } from '../lib/email.js'

const router = Router()

router.get('/status', (req, res) => {
  res.json({
    emailConfigured: isEmailConfigured(),
    emailProvider: process.env.EMAIL_PROVIDER || null,
    message: isEmailConfigured()
      ? 'Email delivery is configured.'
      : 'Demo mode: email delivery is not configured. Contact messages are validated but not emailed.'
  })
})

router.post('/', async (req, res) => {
  const { errors, isValid, value } = validateContact(req.body)

  if (!isValid) {
    return res.status(400).json({
      message: 'Please fix the highlighted fields and try again.',
      errors
    })
  }

  // Demo mode: validate honestly, do not claim an email was sent.
  if (!isEmailConfigured()) {
    return res.status(200).json({
      status: 'received_demo',
      emailSent: false,
      message: 'Demo received: your message passed validation, but it was not emailed because email delivery is not configured yet. Please use the contact details on the Contact page until email is set up.'
    })
  }

  try {
    await sendContactEmail(value)
    return res.status(200).json({
      status: 'sent',
      emailSent: true,
      message: 'Thank you. Your message has been sent.'
    })
  } catch (error) {
    console.error('Contact email failed:', error)
    return res.status(502).json({
      status: 'delivery_failed',
      emailSent: false,
      message: 'Your message was valid, but email delivery failed. Please try again later or use the contact details on the Contact page.'
    })
  }
})

export default router
