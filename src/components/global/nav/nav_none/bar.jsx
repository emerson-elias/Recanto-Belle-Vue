import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useMenu } from '../../../../context/menuContext'

import './bar.scss'

export default function Bar() {
    const { toggleMenu, isMenuOpen } = useMenu()
    const [isVisible, setIsVisible] = useState(true)
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        let lastScrollY = window.scrollY

        const scroll = () => {
            setHasScrolled(true)

            const currentScrollY = window.scrollY

            if (currentScrollY === 0) {
                setIsVisible(false)
                return
            }

            if (currentScrollY > lastScrollY) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            lastScrollY = currentScrollY
        }

        window.addEventListener('scroll', scroll)
        return () => window.removeEventListener('scroll', scroll)
    }, [])

    const Call = () => {
        const phoneNumber = '+5598988555038'
        window.open(`tel:${phoneNumber}`, '_self')
    }

    return (
        <section className={`bar_container ${hasScrolled && isVisible ? 'visible' : ''}`}>
            <nav className='bar'>
                <div className='box_1'>
                    <Link to={'/'}><li>início</li></Link>
                    <li onClick={Call}><i className='fa-solid fa-phone'></i> +55 98 98823-9695</li>
                </div>

                <div className='box_2'>
                    <Link to={'/'}><h1>r</h1></Link>
                </div>

                <div className='box_3'>
                    <div className='min'>
                        <Link to={''}><li>Suítes</li></Link>
                        <Link to={'/contatos'}><li>Contatos</li></Link>
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