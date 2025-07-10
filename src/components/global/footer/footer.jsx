
import { Link } from 'react-router-dom'

import styles from './footer.module.scss'

function Footer() {
    return (
        <section id='contatos' className={styles.footer_container}>

            <div className={styles.title}>
                <span className={styles.line}></span>

                <div className={styles.logo}>
                    <i>r</i>
                    <span>Recanto Belle Vue</span>
                </div>

                <span className={styles.line}></span>
            </div>

            <div className={styles.box}>

                <div className={styles.layerOne}>
                    <h2>Book</h2>


                    <div className={styles.small}>
                        <i>small</i>
                        <i>luxury</i>
                        <i>hotels</i>
                        <p>of the world</p>
                    </div>

                    <span>Pequenos hotéis de luxo do mundo</span>
                </div>

                <div className={styles.layerTwo}>
                    <h2>contatos</h2>
                    <span>+11 94002-8922</span>
                    <span>emersonees707@gmail.com</span>
                    <span>seja social</span>

                    <div className={styles.social}>
                        <a href=""> <i className="fa-brands fa-facebook-f"></i> </a>
                        <a href=""> <i className="fa-brands fa-instagram"></i> </a>
                        <a href=""> <i className="fa-brands fa-linkedin-in"></i> </a>
                    </div>
                </div>

                <div className={styles.layerThere}>
                    <h2>Informações</h2>
                    <Link to={' '} > Sobre</Link>
                    <Link to={' '} > Suíes</Link>
                    <Link to={' '} > Experiências</Link>
                    <Link to={' '} > Galeria</Link>
                </div>

                <form className={styles.layerFour}>
                    <h2>Envie-me um email</h2>
                    <input type="text" placeholder='Nome' />
                    <input type="text" placeholder='E-mail' />
                    <button>Enviar</button>
                </form>

            </div>

            <div className={styles.rodape}>
                <a href='https://github.com/emerson-elias' target='_blank' rel='noopener noreferrer'>&copy; 2025 - by emerson elias</a>
                <a href='https://www.instagram.com/emersoneliass_/' target='_blank' rel='noopener noreferrer'>facebook / instagram</a>
                <a href="">Creditos dos Assets</a>

            </div>
        </section>
    )
}

export default Footer