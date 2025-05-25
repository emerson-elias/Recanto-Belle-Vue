import { useState, useEffect } from 'react'

import './global.scss'

import { LoadingProvider } from './loading/context/loadingContext'

import Navbar from './components/nav/navbar'
import Banner from './components/banner/banner'
import Cursor from './components/cursor/cursor'
import Bio from './components/bio/bio'
import Bar from './components/nav/nav_none/bar'
import Drop from './components/nav/menu_drop/drop'
import Topo from './components/topo/topo'
import Video from './components/video/video'
import { LoadingGlobal } from './loading/loadingGlobal'


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)
  const toggleMenu = () => setIsMenuOpen(prev => !prev)

  useEffect(() => {
    if (window.pageYOffset > 0) {
      window.scrollTo(0, 0);
    }
  }, [])

  return (
    <LoadingProvider>
      <LoadingGlobal />
      <Cursor />
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Drop isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      <Bar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Topo />
      <Banner />
      <Bio />
      <Video />
    </LoadingProvider>
  )
}

export default App
