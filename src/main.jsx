import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { LoadingProvider } from './loading/context/loadingContext.jsx' // ajuste o caminho se necessário

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </StrictMode>
)