import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import MainLayout from './layout/layout'
import { LoadingGlobal } from './components/global/loading/loadingGlobal'

import './global.scss'

// Importe todos os seus componentes de página usando React.lazy
const Home = React.lazy(() => import('./pages/home'))
const AboutPage = React.lazy(() => import('./pages/aboutPage'))
const DoubtsPage = React.lazy(() => import('./pages/doubtsPage'))
const ContactPage = React.lazy(() => import('./pages/contactPage'))
const SuitesStart = React.lazy(() => import('./pages/suitesStart'))
const SuitesPage = React.lazy(() => import('./pages/suitesPage'))

function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                {/* Envolva cada rota com um componente Suspense */}
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<LoadingGlobal />}>
                            <Home />
                        </Suspense>
                    }
                />
                <Route
                    path="/sobre"
                    element={
                        <Suspense fallback={<LoadingGlobal />}>
                            <AboutPage />
                        </Suspense>
                    }
                />
                <Route
                    path="/duvidas"
                    element={
                        <Suspense fallback={<LoadingGlobal />}>
                            <DoubtsPage />
                        </Suspense>
                    }
                />
                <Route
                    path="/contatos"
                    element={
                        <Suspense fallback={<LoadingGlobal />}>
                            <ContactPage />
                        </Suspense>
                    }
                />
                <Route
                    path="/suites"
                    element={
                        <Suspense fallback={<LoadingGlobal />}>
                            <SuitesStart />
                        </Suspense>
                    }
                />
                <Route
                    path="/suites/:id"
                    element={
                        <Suspense fallback={<LoadingGlobal />}>
                            <SuitesPage />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    )
}

export default AppRoutes