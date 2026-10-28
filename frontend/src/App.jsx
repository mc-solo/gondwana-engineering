import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'

function NotFound() {
  return (
    <main className="section">
      <div className="container narrow">
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist on this demo site.</p>
        <a className="button button-primary" href="/">Return home</a>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
