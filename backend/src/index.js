import express from 'express'
import cors from 'cors'
import contactRouter from './routes/contact.js'

const app = express()
const port = process.env.PORT || 5000

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }))
app.use(express.json({ limit: '100kb' }))

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'gondwana-engineering-backend' })
})

app.use('/api/contact', contactRouter)

app.use('/api', (req, res) => {
  res.status(404).json({ message: 'API route not found.' })
})

app.listen(port, () => {
  console.log(`Gondwana Engineering backend running on http://localhost:${port}`)
})
