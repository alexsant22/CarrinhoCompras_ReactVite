import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Renderização simplificada sem StrictMode para evitar dupla renderização
ReactDOM.createRoot(document.getElementById('root')).render(<App />)