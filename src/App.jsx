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


function HomePage() {
    return (
        <>
            <Cursor />
            <Topo />
            <Banner />
            <Bio />
            <Video />
        </>
    )
}

function AboutPage() {
    return (
        <>
            <Cursor />
            <About_Banner />
        </>
    )
}

function App() {
    return (
        <>
            <Navbar />
            <Bar />
            <Drop />
            <LoadingGlobal />

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
        </>
    )
}

export default App