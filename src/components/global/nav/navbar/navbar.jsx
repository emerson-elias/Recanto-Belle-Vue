import { Link } from 'react-router-dom'
import { useMenu } from '../../../../context/menuContext'
import './navbar.scss'

export default function Navbar() {
    const { toggleMenu, isMenuOpen } = useMenu()

    const Call = () => {
        const phoneNumber = '+5598988239695'
        window.open(`tel:${phoneNumber}`, '_self')
    }

    return (
        <section className='nav_container'>
            <nav className='navbar'>
                <div className='box_1'>
                    <Link to='/'><li>início</li></Link>
                    <li onClick={Call}>
                        <i className='fa-solid fa-phone'></i> +55 98 98823-9695
                    </li>
                </div>

                <div className='box_2'>
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