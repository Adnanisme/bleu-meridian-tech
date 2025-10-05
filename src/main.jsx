import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// Determine basename based on environment and location
const getBasename = () => {
  // Check if we're on GitHub Pages
  if (window.location.hostname === 'adnanisme.github.io' && window.location.pathname.includes('/bleu-meridian-tech')) {
    return '/bleu-meridian-tech'
  }
  // For production builds that will be deployed to GitHub Pages
  if (import.meta.env.PROD && import.meta.env.MODE === 'production') {
    return '/bleu-meridian-tech'
  }
  // Default for local development and custom domains
  return '/'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={getBasename()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
