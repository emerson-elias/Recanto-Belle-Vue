import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { useMenu } from '../../../../context/menuContext'

import './drop.scss'

const itensMenu = [
    { title: 'Suítes', img: '/assets/img/pexels-7.jpg', link: '/suites' },
    { title: 'Adega', img: '/assets/img/pexels-4.jpg', link: '/services/Valle-dos-Vinhos' },
    { title: 'Buffet', img: '/assets/img/pexels-3.jpg', link: '/services/La-Vue-Gastronomia' },
    { title: 'Serviços', img: '/assets/img/services.jpg', link: '/services/Refugio-a-Mesa' },
    { title: 'Início', img: '/assets/img/pexels-1.jpg', link: '/' },
    { title: 'Resort', img: '/assets/img/pexels-2.jpg', link: '/sobre' },
    { title: 'Experiências', img: '/assets/img/praia.jpg', link: '/experiencias' },
    { title: 'Dúvidas', img: '/assets/img/pexels-8.jpg', link: '/duvidas' },
    { title: 'Contatos', img: '/assets/img/contato.jpg', link: '/contatos' }
]

export default function Drop() {
    const { isMenuOpen, closeMenu } = useMenu()
    const imgRefs = useRef([])

    const containerRef = useRef(null)
    const tl = useRef(null)

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

    useEffect(() => {
        gsap.set(imgRefs.current, {
            opacity: 0,
            scale: 0.8
        })
    }, [])

    const enter = (index) => {
        gsap.to(imgRefs.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.4
        })

        gsap.to(imgRefs.current[index], {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out'
        })
    }

    const leave = () => {
        gsap.to(imgRefs.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            ease: 'power2.out'
        })
    }

    useEffect(() => {
        tl.current = gsap.timeline({ paused: true })

        tl.current.to(containerRef.current, {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 0.8,
            ease: 'power3.out'
        })
    }, [])

    useEffect(() => {
        if (isMenuOpen) {
            gsap.set(containerRef.current, {
                clipPath: 'inset(0% 0% 100% 0%)'
            })
            tl.current.play()
        } else {
            tl.current.reverse()
        }
    }, [isMenuOpen])

    return (
        <section className={`menu_container ${isMenuOpen ? 'open' : 'closed'}`}
            ref={containerRef}
            style={{ clipPath: 'inset(0% 0% 100% 0%)' }}
        >
            <div className='menu'>
                <Link to={'/'} onClick={closeMenu}>r</Link>
                <button className='btn_menu_drop' onClick={closeMenu} aria-label="Fechar menu">
                    <span className={isMenuOpen ? 'open' : ''}></span>
                    <span className={isMenuOpen ? 'open' : ''}></span>
                    <span className={isMenuOpen ? 'open' : ''}></span>
                </button>
            </div>

            <ul className='box'>
                <div className='boxOne'>
                    {itensMenu.slice(0, 4).map((item, index) => (
                        <li
                            key={item.title}
                            onMouseEnter={() => enter(index)}
                            onMouseLeave={leave}
                        >
                            <Link to={item.link} onClick={closeMenu}>{item.title}</Link>
                        </li>
                    ))}
                </div>

                <div className='boxTwo'>
                    {itensMenu.slice(4).map((item, index) => (
                        <li
                            key={item.title}
                            onMouseEnter={() => enter(index + 4)}
                            onMouseLeave={leave}
                        >
                            <Link to={item.link} onClick={closeMenu}>{item.title}</Link>
                        </li>
                    ))}
                </div>
            </ul>

            <div className='row'>
                <Link to={'/suites'} onClick={closeMenu}>Book</Link>
                <div className='social'>
                    <li><a href='https://github.com/emerson-elias' target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-github-alt"></i></a></li>
                    <li><a href='https://www.instagram.com/emersoneliass_/' target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href='https://emerson-elias.vercel.app/' target='_blank' rel='noopener noreferrer'><i className="fa-solid fa-user"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/emerson-elias-9b2894228/' target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-linkedin-in"></i></a></li>
                </div>
            </div>

            <div className='boxImg'>
                {itensMenu.map((item, index) => (
                    <img
                        key={index}
                        ref={el => imgRefs.current[index] = el}
                        src={item.img}
                    />
                ))}
            </div>
        </section>
    )
}