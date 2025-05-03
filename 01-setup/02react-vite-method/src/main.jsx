import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Rudra from './Rudra.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Rudra/>
  </StrictMode>,
)
