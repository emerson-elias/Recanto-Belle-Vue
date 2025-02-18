import { useState } from 'react'

import './global.scss'
import Navbar from './components/nav/navbar'
import Banner from './components/banner/banner'
import Cursor from './components/cursor/cursor'

function App() {

  return (
    <>
      <Cursor />
      <Navbar />
      <Banner />
    </>
  )
}

export default App
