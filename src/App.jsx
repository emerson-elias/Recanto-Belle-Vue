import { Routes, Route } from 'react-router-dom'

import './global.scss'

import Home from './pages/home'
import About from './pages/about'
import MainLayout from './layout/layout'

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
            </Route>
        </Routes>
    )
}