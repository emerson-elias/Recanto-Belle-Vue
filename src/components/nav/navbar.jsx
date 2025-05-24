import { useState } from 'react'

import './navbar.scss'

export default function Navbar({ toggleMenu, isMenuOpen }) {
    return (
        <section className='nav_container'>
            <nav className='navbar'>
                <div className='box_1'>             
                    <li>início</li>
                    <li><i className="fa-solid fa-phone"></i> +55 11 94002-8922</li>
                </div>

                <div className='box_2'>
                    <h1>r</h1>
                    <span>Recanto Belle Vue</span>
                    <p>Requinte e Beleza</p>
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
