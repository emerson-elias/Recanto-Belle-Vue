import React from 'react'

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { MenuProvider } from './context/menuContext.jsx'
import { LoadingProvider } from './context/loadingContext.jsx'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <LoadingProvider>
                <MenuProvider>
                    <App />
                </MenuProvider>
            </LoadingProvider>
        </BrowserRouter>
    </React.StrictMode>
)