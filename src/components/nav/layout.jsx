// Layout.jsc

/*
import { Outlet } from 'react-router-dom'

import Navbar from '../nav/navbar/navbar'
import Bar from '../nav/nav_none/bar'
import Drop from '../nav/menu_drop/drop'

import { useMenu } from '../../context/menuContext'

export default function Layout() {
    const { isMenuOpen, toggleMenu, closeMenu } = useMenu();

    return (
        <div>
            <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            <Bar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            <Drop isMenuOpen={isMenuOpen} closeMenu={closeMenu} />

            <Outlet />
        </div>
    )
}*/