import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useMenu } from '../../../../context/menuContext'

import './bar.scss'

export default function Bar() {
    const { toggleMenu, isMenuOpen } = useMenu()
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY <= 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section className={`bar_container ${!isVisible ? 'hidden' : ''}`}>
            <nav className='bar'>
                <div className='box_1'>
                    <Link to={'/'}><li>início</li></Link>
                    <li><i className='fa-solid fa-phone'></i> +55 11 94002-8922</li>
                </div>

                <div className='box_2'>
                    <Link to={'/'}><h1>r</h1></Link>
                </div>

                <div className='box_3'>
                    <div className='min'>
                        <Link to={''}><li>Suítes</li></Link>
                        <Link to={''}><li>Contatos</li></Link>
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