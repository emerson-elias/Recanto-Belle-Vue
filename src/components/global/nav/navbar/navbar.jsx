import { Link } from 'react-router-dom'
import { useMenu } from '../../../../context/menuContext'

import './navbar.scss'

export default function Navbar() {
    const { toggleMenu, isMenuOpen } = useMenu();

    return (
        <section className='nav_container'>
            <nav className='navbar'>
                <div className='box_1'>
                    <Link to={'/'}><li>início</li></Link>
                    <li><i className='fa-solid fa-phone'></i> +55 11 94002-8922</li>
                </div>

                <div className='box_2'>
                    <div className='min'>
                        <Link to={'/'}><li>Suítes</li></Link>
                        <Link to={'/'}><li>Contatos</li></Link>
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