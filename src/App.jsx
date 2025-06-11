import { Routes, Route } from 'react-router-dom'

import './global.scss'

import { LoadingGlobal } from './components/global/loading/loadingGlobal'

import Navbar from './components/global/nav/navbar/navbar'
import Bar from './components/global/nav/nav_none/bar'
import Drop from './components/global/nav/menu_drop/drop'
import Cursor from './components/global/cursor/cursor'
import Banner from './components/home/banner/banner'
import Bio from './components/home/bio/bio'
import Topo from './components/global/topo/topo'
import Video from './components/home/video/video'
import About_Banner from './components/about/banner_about/about'
import Experince from './components/home/experince/experince'
import Roons from './components/home/roons/roons'
import Services from './components/home/services/services'
import Reviews from './components/home/reviews/reviews'
import Phrase from './components/home/phrase/phrase'
import Footer from './components/global/footer/footer'

function HomePage() {
    return (
        <>
            <Banner />
            <Bio />
            <Video />
            <Roons />
            <Services />
            <Experince />
            <Reviews />
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

function App() {
    return (
        <>
            <Cursor />
            <Navbar />
            <Bar />
            <Drop />
            <Topo />
            <LoadingGlobal />
            <Footer />

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
        </>
    )
}

export default App