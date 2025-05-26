import { Routes, Route } from 'react-router-dom'

import './global.scss'

import { LoadingGlobal } from './components/loading/loadingGlobal'

import Navbar from './components/nav/navbar/navbar'
import Bar from './components/nav/nav_none/bar'
import Drop from './components/nav/menu_drop/drop'
import Cursor from './components/cursor/cursor'
import Banner from './components/banner/banner'
import Bio from './components/bio/bio'
import Topo from './components/topo/topo'
import Video from './components/video/video'


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
                <Route path='/home' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
        </>
    )
}

export default App