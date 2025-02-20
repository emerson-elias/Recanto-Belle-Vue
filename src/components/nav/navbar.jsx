import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'

import './navbar.scss'

import img1 from '/assets/img/inicio.jpg'
import img2 from '/assets/img/sobre.jpg'
import img3 from '/assets/img/suites.jpg'
import img4 from '/assets/img/experiencias.jpg'
import img5 from '/assets/img/contato.jpg'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const images = [img1, img2, img3, img4, img5]
    const imgRefs = useRef([])
    const boxRefs = useRef([])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleMouseEnter = (index) => {
        const imgElement = imgRefs.current[index]
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

    const handleMouseMove = (index, event) => {
        const imgElement = imgRefs.current[index]
        const boxElement = boxRefs.current[index]

        if (imgElement && boxElement) {
            const rect = boxElement.getBoundingClientRect()
            const mouseX = event.clientX - rect.left
            const mouseY = event.clientY - rect.top

            const moveX = (mouseX - rect.width / 2) / 10
            const moveY = (mouseY - rect.height / 2) / 10

            gsap.to(imgElement, {
                x: moveX,
                y: moveY,
                duration: 0.3,
                ease: 'power2.out',
            })
        }
    }

    useEffect(() => {
        boxRefs.current.forEach((box, index) => {
            if (box) {
                box.addEventListener('mousemove', (event) => handleMouseMove(index, event))
            }
        })

        return () => {
            boxRefs.current.forEach((box, index) => {
                if (box) {
                    box.removeEventListener('mousemove', (event) => handleMouseMove(index, event))
                }
            })
        }
    }, [])

    return (
        <section className='nav_container'>
            <nav className='navbar'>
                <div className='box_1'>
                    <li>início</li>
                    <li><i className="fa-solid fa-phone"></i> +55 11 94002-8922</li>
                </div>

                <div className='box_2'>
                    <h1>R</h1>
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
                        {['início', 'sobre', 'suítes', 'experiências', 'contatos'].map((item, index) => (
                            <div
                                key={index}
                                className='box_li'
                                ref={(el) => (boxRefs.current[index] = el)}
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
    );
}