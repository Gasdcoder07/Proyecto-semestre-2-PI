import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import { toastContainerStyle, toastOptionsConfig } from './config/toastConfig.jsx'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <AuthProvider>
            <LanguageProvider>
                <Toaster
                    position='top-right'
                    containerStyle={toastContainerStyle}
                    toastOptions={toastOptionsConfig}/>
                <App />
            </LanguageProvider>
        </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
