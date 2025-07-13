import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useMenu } from '../../../../context/menuContext'

import './navbar.scss'

export default function Navbar() {
    const { toggleMenu, isMenuOpen } = useMenu()

    const location = useLocation()

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash)
            if (el) {
                el.scrollIntoView({ behavior: 'auto' })
            }
        }
    }, [location])

    return (
        <section className='nav_container'>
            <nav className='navbar'>
                <div className='box_1'>
                    <Link to={'/'}><li>início</li></Link>
                    <li><i className='fa-solid fa-phone'></i> +55 98 98823-9695</li>
                </div>

                <div className='box_2'>
                    <div className='min'>
                        <Link to={'/'}><li>Suítes</li></Link>
                        <Link to={'/#contatos'}><li>Contatos</li></Link>
                    </div>

                    <div className='btn_menu_drop' onClick={toggleMenu}>
                        <span className={isMenuOpen ? 'open' : ''}></span>
                        <span className={isMenuOpen ? 'open' : ''}></span>
                        <span className={isMenuOpen ? 'open' : ''}></span>
                    </div>
                </div>
            </nav>
        </section>
    )
}