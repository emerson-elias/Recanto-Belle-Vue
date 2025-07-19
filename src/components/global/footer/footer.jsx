
import { Link } from 'react-router-dom'

import styles from './footer.module.scss'

function Footer() {

    const Call = () => {
        const phoneNumber = '+5598988239695'
        window.open(`tel:${phoneNumber}`, '_self')
    }

    const redirectToWhatsApp = () => {
        const phoneNumber = '+5598988239695'
        const message = encodeURIComponent('Olá, vim pelo site, quero saber mais informações sobre seu trabalho.')
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
        window.open(whatsappUrl, '_blank')
    }

    const EmailClick = () => {
        const email = 'emersonees707@gmail.com'
        const subject = 'Trabalho'
        const body = 'Olá,\n\n vim pelo site, gostaria de mais informações sobre seu trabalho.\n\nAtenciosamente:\n---- Seu Nome ----'
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.open(mailtoLink, '_self')
    }

    return (
        <footer id='contatos' className={styles.footer_container}>

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
                    <h2>Reserve agora</h2>

                    <div className={styles.small}>
                        <i>small</i>
                        <i>luxury</i>
                        <i>hotels</i>
                        <p>of the world</p>
                    </div>
                </div>

                <div className={styles.layerTwo}>
                    <h2>contate-me</h2>

                    <a onClick={redirectToWhatsApp}><i className="fa-brands fa-whatsapp"></i> +55 98 98823-9695</a>
                    <a onClick={Call}><i className="fa-solid fa-phone"></i> +55 94 99117-1807</a>
                    <a href='https://www.instagram.com/emersoneliass_/' target='_blank' rel='noopener noreferrer'> <i className="fa-brands fa-instagram"></i> emersoneliass_</a>
                    <a href='https://www.google.com/maps?q=Marabá,+PA' target='_blank' rel='noopener noreferrer'><i className="fa-solid fa-location-dot"></i> Marabá - PA</a>
                    <a onClick={EmailClick}><i className="fa-solid fa-envelope"></i> emersonees707@gmail.com</a>
                </div>

                <div className={styles.layerThere}>
                    <h2>Informações</h2>
                    <Link to={'/sobre'} > Sobre</Link>
                    <Link to={'/suites'} > Suítes</Link>
                    <Link to={' '} > Serviços</Link>
                    <Link to={'/duvidas'} > Dúvidas</Link>
                    <Link to={' '} > Experiências</Link>
                </div>

                <div className={styles.layerFour}>
                    <h2>Sobre</h2>

                    <p>Com carinho e atenção aos detalhes, busquei traduzir a essência de um resort à beira-mar em uma experiência digital leve e envolvente.</p>
                    <div className={styles.social}>
                        <a href='https://github.com/emerson-elias' target='_blank' rel='noopener noreferrer'> <i className="fa-brands fa-github-alt"></i> </a>
                        <a href='https://emerson-elias.vercel.app/' target='_blank' rel='noopener noreferrer'> <i className="fa-regular fa-newspaper"></i></a>
                        <a href="https://www.linkedin.com/in/emerson-elias-9b2894228/" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-linkedin-in"></i> </a>
                    </div>
                </div>
            </div>

            <div className={styles.rodape}>
                <a href='https://github.com/emerson-elias' target='_blank' rel='noopener noreferrer'>&copy; 2025 emerson elias - projeto pessoal para fins de exibição</a>
                <a href="">Créditos</a>
            </div>
        </footer>
    )
}

export default Footer