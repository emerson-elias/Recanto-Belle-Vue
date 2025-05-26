import { gsap } from 'gsap'

import { useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'

import { useMenu } from '../../../../context/menuContext'

import './drop.scss'

import img1 from '/assets/img/pexels-1.jpg'
import img2 from '/assets/img/sobre.jpg'
import img3 from '/assets/img/suites.jpg'
import img4 from '/assets/img/experiencias.jpg'
import img5 from '/assets/img/contato.jpg'

export default function Drop() {
    const { isMenuOpen, closeMenu } = useMenu()
    const images = [img1, img2, img3, img4, img5]
    const imgRefs = useRef([])
    const boxRefs = useRef([])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

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

    const memoizedHandleMouseMove = useCallback((index, event) => {
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
    }, [])

    useEffect(() => {      
        const handlers = []

        boxRefs.current.forEach((box, index) => {
            if (box) {           
                const handler = (event) => memoizedHandleMouseMove(index, event)
                box.addEventListener('mousemove', handler)
                handlers.push({ box, handler })
            }
        })

        return () => {
            handlers.forEach(({ box, handler }) => {
                if (box) {
                    box.removeEventListener('mousemove', handler)
                }
            })
        }
    }, [memoizedHandleMouseMove])

    return (
        <section className={`menu_drop ${isMenuOpen ? 'open' : 'closed'}`}>
            <div className='btn_menu_drop' onClick={closeMenu}>
                <span className={isMenuOpen ? 'open' : ''}></span>
                <span className={isMenuOpen ? 'open' : ''}></span>
                <span className={isMenuOpen ? 'open' : ''}></span>
            </div>

            <ul>
                {['início', 'sobre', 'suítes', 'experiências', 'contatos'].map((item, index) => {
                    const paths = ['/', '/about', '', '', '']

                    return (
                        <div
                            key={index}
                            className='box_li'
                            ref={(el) => (boxRefs.current[index] = el)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <li><Link to={paths[index]} onClick={closeMenu}>{item}</Link></li>

                            <img
                                ref={(el) => (imgRefs.current[index] = el)}
                                src={images[index]}
                                alt={item}
                            />
                        </div>
                    )
                })}
            </ul>

            <div className='social'>
                <span>© 2025 Recanto Belle Vue</span>
                <span>
                    <a href='https://www.instagram.com/emersoneliass_/' target='_blank' rel='noopener noreferrer'>
                        facebook / instagram
                    </a>
                </span>
                <span>© By Emerson Elias</span>
            </div>
        </section>
    )
}