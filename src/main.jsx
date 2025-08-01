import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { MenuProvider } from './context/menuContext.jsx'
import { LoadingProvider } from './context/loadingContext.jsx'

import AppRoutes from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <LoadingProvider>
                <MenuProvider>
                    <AppRoutes />
                </MenuProvider>
            </LoadingProvider>
        </BrowserRouter>
    </React.StrictMode>
)