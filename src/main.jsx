import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'
import { QueryProvider } from './lib/react-query/QueryProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>
)
