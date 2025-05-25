import { useState } from 'react'
import { Link, useLocation } from "react-router-dom"

import './navbar.scss'

export default function Navbar({ toggleMenu, isMenuOpen }) {
    return (
        <section className='nav_container'>
            <nav className='navbar'>
                <div className='box_1'>             
                    <Link to={"/home"}><li>início</li></Link>
                    <li><i className="fa-solid fa-phone"></i> +55 11 94002-8922</li>
                </div>

                <div className='box_2'>
                    <h1>r</h1>
                    <span>Recanto Belle Vue</span>
                    <p>Requinte e Beleza</p>
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
