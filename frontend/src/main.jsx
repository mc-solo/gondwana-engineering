import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'

// Vite sets BASE_URL from the build base: '/' locally, '/gondwana-engineering/'
// for the GitHub Pages project site. Using it as the router basename keeps
// client-side routes working under either path.
const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={routerBasename || undefined}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
