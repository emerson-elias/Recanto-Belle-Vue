import { Routes, Route } from 'react-router-dom'

import './global.scss'

import Home from './pages/home'
import AboutPage from './pages/aboutPage'
import MainLayout from './layout/layout'
import DoubtsPage from './pages/doubtsPage'
import ContactPage from './pages/contactPage'
import RoonsPage from './pages/roonsPage'

function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<AboutPage />} />
                <Route path="/duvidas" element={<DoubtsPage />} />
                <Route path="/contatos" element={<ContactPage />} />
                <Route path="/quartos" element={<RoonsPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes