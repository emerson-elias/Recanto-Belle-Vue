import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import './global.scss'

import { useLoading } from './context/loadingContext'
import { LoadingGlobal } from './components/global/loading/loadingGlobal'

import Navbar from './components/global/nav/navbar/navbar'
import Bar from './components/global/nav/nav_none/bar'
import Drop from './components/global/nav/menu_drop/drop'
import Cursor from './components/global/cursor/cursor'
import Topo from './components/global/topo/topo'
import Footer from './components/global/footer/footer'

import Banner from './components/home/banner/banner'
import Bio from './components/home/bio/bio'
import Video from './components/home/video/video'
import Experience from './components/home/experience/experience'
import Roons from './components/home/roons/roons'
import Services from './components/home/services/services'
import Reviews from './components/home/reviews/reviews'
import Phrase from './components/home/phrase/phrase'

import About_Banner from './components/about/banner_about/about'
import Serv from './components/home/services/serv'

function HomePage() {
    return (
        <>
            <Banner />
            <Bio />
            <Video />
            <Roons />
            <Reviews />
            <Experience />

            <Phrase />
        </>
    )
}

function AboutPage() {
    return (
        <>
            <About_Banner />
        </>
    )
}

function Layout() {
    const location = useLocation()
    const { startRouteLoading, endRouteLoading } = useLoading()

    useEffect(() => {
        startRouteLoading()

        const timeout = setTimeout(() => {
            endRouteLoading()
        }, 2500)

        return () => clearTimeout(timeout)
    }, [location.pathname, startRouteLoading, endRouteLoading])

    return (
        <>
            <Cursor />
            <Navbar />
            <Bar />
            <Drop />
            <Topo />
            <LoadingGlobal />
            <Outlet />
            <Footer />
        </>
    )
}

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
            </Route>
        </Routes>
    )
}

export default App