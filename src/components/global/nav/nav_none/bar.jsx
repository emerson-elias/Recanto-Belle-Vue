import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useMenu } from '../../../../context/menuContext'
import './bar.scss'

export default function Bar() {
    const { toggleMenu, isMenuOpen } = useMenu()
    const [isVisible, setIsVisible] = useState(false)
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        let lastScrollY = window.scrollY
        let ticking = false

        const updateScroll = () => {
            const currentScrollY = window.scrollY
            setHasScrolled(true)

            if (currentScrollY === 0 || currentScrollY > lastScrollY) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            lastScrollY = currentScrollY
            ticking = false
        }

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScroll)
                ticking = true
            }
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const Call = () => {
        const phoneNumber = '+5598988555038'
        window.open(`tel:${phoneNumber}`, '_self')
    }

    return (
        <section className={`bar_container ${(hasScrolled && isVisible && !isMenuOpen) ? 'visible' : ''}`}>
            <nav className='bar'>
                <div className='box_1'>
                    <Link to='/'><li>início</li></Link>
                    <li onClick={Call}>
                        <i className='fa-solid fa-phone'></i> +55 98 98823-9695
                    </li>
                </div>

                <div className='box_2'>
                    <Link to='/'><h1>r</h1></Link>
                </div>

                <div className='box_3'>
                    <div className='min'>
                        <Link to='/suites'><li>Suítes</li></Link>
                        <Link to='/contatos'><li>Contatos</li></Link>
                    </div>

                    <button className='btn_menu_drop' onClick={toggleMenu} aria-label="Abrir menu">
                        <span className={isMenuOpen ? 'open' : ''}></span>
                        <span className={isMenuOpen ? 'open' : ''}></span>
                        <span className={isMenuOpen ? 'open' : ''}></span>
                    </button>
                </div>
            </nav>
        </section>
    )
}