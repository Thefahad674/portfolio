import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


{/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
      Fahad
    </span> */}