import { useState, useEffect } from 'react'

import './bar.scss'

export default function Bar({ toggleMenu, isMenuOpen }) {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY <= 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section className={`bar_container ${!isVisible ? 'hidden' : ''}`}>
            <nav className='bar'>
                <div className='box_1'>
                    <li>início</li>
                    <li><i className="fa-solid fa-phone"></i> +55 11 94002-8922</li>
                </div>

                <div className='box_2'>
                    <h1>R</h1>
                </div>

                <div className='box_3'>
                    <div className='min'>
                        <li>suítes</li>
                        <li>Reservar</li>
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
