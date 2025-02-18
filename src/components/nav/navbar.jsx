import { useState, useRef } from 'react'
import { gsap } from 'gsap'

import './navbar.scss'

import img1 from '/assets/img/pexels.jpg'
import img2 from '/assets/img/pexels.jpg'
import img3 from '/assets/img/pexels.jpg'
import img4 from '/assets/img/pexels.jpg'
import img5 from '/assets/img/pexels.jpg'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const images = [img1, img2, img3, img4, img5]

    const imgRefs = useRef([])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleMouseEnter = (index) => {
        const imgElement = imgRefs.current[index];
        if (imgElement) {
            gsap.to(imgElement, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out',
            })
        }
    }

    const handleMouseLeave = (index) => {
        const imgElement = imgRefs.current[index]
        if (imgElement) {
            gsap.to(imgElement, {
                opacity: 0,
                scale: 0.8,
                duration: 0.3,
                ease: 'power2.out',
            })
        }
    }

    return (
        <section className='nav_container'>
            <nav className='navbar'>
                <div className='box_1'>
                    <li>início</li>
                    <li><i className="fa-solid fa-phone"></i> +55 11 94002-8922</li>
                </div>

                <div className='box_2'>
                    <h1>V</h1>
                    <span>Recanto Belle Vue</span>
                    <p>Requite e Beleza</p>
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

                <section className={`menu_drop ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        {['início', 'sobre', 'suítes', 'reservar', 'contatos'].map((item, index) => (
                            <div
                                key={index}
                                className='box_li'
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                            >
                                <li>{item}</li>

                                <img
                                    ref={(el) => (imgRefs.current[index] = el)}
                                    src={images[index]}
                                />
                            </div>
                        ))}
                    </ul>

                    <div className='social'>
                        <span>© 2025 Recanto Belle Vue</span>
                        <span>facebook / instagram</span>
                        <span>© By Emerson Elias</span>
                    </div>
                </section>
            </nav>
        </section>
    )
}