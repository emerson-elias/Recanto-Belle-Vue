import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"

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
                    <Link to={"/home"}><li>início</li></Link>
                    <li><i className="fa-solid fa-phone"></i> +55 11 94002-8922</li>
                </div>

                <div className='box_2'>
                   <Link to={'/home'}><h1>r</h1></Link> 
                </div>

                <div className='box_3'>
                    <div className='min'>
                        <Link><li>suítes</li></Link>  
                        <Link><li>Reservar</li></Link> 
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
