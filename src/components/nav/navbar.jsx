import { useState } from 'react';
import './navbar.scss';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <section className='nav_container'>
            <nav className='navbar'>
                <div className='box_1'>
                    <li>home</li>
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
                        <li>home</li>
                        <li>sobre</li>
                        <li>suites</li>
                        <li>localização</li>
                        <li>contatos</li>
                    </ul>

                    <div className='social'>
                        <span>facebook</span>
                        <span>whatsapp</span>
                        <span>instagram</span>
                    </div>
                </section>
            </nav>
        </section>
    );
}