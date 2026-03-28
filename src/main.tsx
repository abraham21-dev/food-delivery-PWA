import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18n'  // <--- THIS MUST BE ABOVE APP
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)