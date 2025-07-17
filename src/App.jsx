import { Routes, Route } from 'react-router-dom'

import './global.scss'

import Home from './pages/home'
import AboutPage from './pages/aboutPage'
import MainLayout from './layout/layout'
import DoubtsPage from './pages/doubtsPage'

function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<AboutPage />} />
                <Route path="/duvidas" element={<DoubtsPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes