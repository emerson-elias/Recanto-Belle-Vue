import { Link } from 'react-router-dom'

import styles from './footer.module.scss'

export default function Footer({ picture }) {

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
        const body = 'Olá,\n\n vim pelo seu projeto Recanto Belle Vue, gostaria de mais informações sobre seu trabalho.\n\nAtenciosamente:\n---- Seu Nome ----'
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.open(mailtoLink, '_self')
    }

    return (
        <footer id='contatos' className={styles.footer_container} style={{ backgroundImage: `url(${picture})` }}>
            <div className={styles.layer}>
                <div className={styles.box}>

                    <div className={styles.boxOne}>
                        <div className={styles.title}>
                            <i>r</i>
                            <Link to={'/'} >Recanto Belle Vue</Link>
                        </div>
                        <span>Pequenos Hosteis de luxo</span>
                        <div className={styles.small}>
                            <i>small</i>
                            <i>luxury</i>
                            <i>hotels</i>
                            <p>of the world</p>
                        </div>
                    </div>

                    <div className={styles.boxTwo}>
                        <div className={styles.row}>

                            <div className={styles.midia}>
                                <a>Contate-me</a>
                                <a onClick={redirectToWhatsApp}>WhatsApp</a>
                                <a onClick={Call}>Telefone</a>
                                <a href='https://www.instagram.com/emersoneliass_/' target='_blank' rel='noopener noreferrer'>Instagram</a>
                                <a href='https://www.google.com/maps?q=Marabá,+PA' target='_blank' rel='noopener noreferrer'>Localização</a>
                            </div>

                            <div className={styles.links}>
                                <Link to={'/sobre'} > Sobre</Link>
                                <Link to={'/suites'} > Suítes</Link>
                                <Link to={' '} > Serviços</Link>
                                <Link to={'/duvidas'} > Dúvidas</Link>
                                <Link to={' '} > Experiências</Link>
                            </div>
                        </div>

                        <div className={styles.contactEmail} onClick={EmailClick}>
                            <span>Vamos, seja social</span>
                            <i>Mande-me um email</i>

                            <div className={styles.input}>
                                <i className="fa-solid fa-at"></i>
                                <span>enviar</span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={styles.rodape}>
                    <a href='https://github.com/emerson-elias' target='_blank' rel='noopener noreferrer'>&copy; 2025 emerson elias - projeto pessoal para fins de exibição</a>
                    <a href="">Créditos</a>
                </div>
            </div>
        </footer>
    )
}