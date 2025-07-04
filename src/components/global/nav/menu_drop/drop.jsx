import { gsap } from 'gsap'

import { useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useMenu } from '../../../../context/menuContext'

import './drop.scss'

import img1 from '/assets/img/brisa-do-mar.jpg'
import img2 from '/assets/img/pexels-1.jpg'
import img3 from '/assets/img/villa-real.jpg'
import img4 from '/assets/img/services.jpg'
import img5 from '/assets/img/ondas-crescente.jpg'
import img6 from '/assets/img/contato.jpg'

export default function Drop() {
    const { isMenuOpen, closeMenu } = useMenu()
    const images = [img1, img2, img3, img4, img5, img6]
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

    const mouseEnter = (index) => {
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

    const mouseLeave = (index) => {
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

    const mouseMove = useCallback((index, event) => {
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
                const handler = (event) => mouseMove(index, event)
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
    }, [mouseMove])

    const location = useLocation()

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash)
            if (el) {
                el.scrollIntoView()
            }
        }
    }, [location])

    return (
        <section className={`menu_drop ${isMenuOpen ? 'open' : 'closed'}`}>
            <div className='btn_menu_drop' onClick={closeMenu}>
                <span className={isMenuOpen ? 'open' : ''}></span>
                <span className={isMenuOpen ? 'open' : ''}></span>
                <span className={isMenuOpen ? 'open' : ''}></span>
            </div>

            <ul>
                {['início', 'sobre', 'suítes', 'serviços', 'experiências', 'contatos'].map((item, index) => {
                    const paths = ['/', '/sobre', '', '', '', '/#contatos']

                    return (
                        <div
                            key={index}
                            className='box_li'
                            ref={(el) => (boxRefs.current[index] = el)}
                            onMouseEnter={() => mouseEnter(index)}
                            onMouseLeave={() => mouseLeave(index)}
                        >
                            <li><Link to={paths[index]} onClick={closeMenu}>{item}</Link></li>

                            <section ref={(el) => (imgRefs.current[index] = el)}>
                                <img src={images[index]} alt={item} />
                            </section>
                        </div>
                    )
                })}
            </ul>

            <div className='social'>
                <a>&copy; 2025 Recanto Belle Vue</a>
                <a href='https://www.instagram.com/emersoneliass_/' target='_blank' rel='noopener noreferrer'>facebook / instagram</a>
                <a href='https://emerson-elias.vercel.app/' target='_blank' rel='noopener noreferrer'>&copy; By Emerson Elias</a>
            </div>

        </section>
    )
}