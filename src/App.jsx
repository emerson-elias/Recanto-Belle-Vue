import { Routes, Route } from 'react-router-dom'

import './global.scss'

import Home from './pages/home'
import AboutPage from './pages/aboutPage'
import MainLayout from './layout/layout'
import DoubtsPage from './pages/doubtsPage'
import ContactPage from './pages/contactPage'
import SuitesPage from './pages/suitesPage'
import SuitesStart from './pages/suitesStart'

function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<AboutPage />} />
                <Route path="/duvidas" element={<DoubtsPage />} />
                <Route path="/contatos" element={<ContactPage />} />
                <Route path="/suites" element={<SuitesStart />} />  {/* ROTA PADRÃO PARA PODER SER USADO COM ANCORA */}
                <Route path="/suites/:id" element={<SuitesPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes