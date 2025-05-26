import { Link, useLocation } from "react-router-dom"

import styles from './bio.module.scss'

export default function Bio() {
    return (
        <section className={styles.bio_container}>
            <h1>Repouse em um encanto e aconchego</h1>

            <p>Envolva-se em uma experiência onde o encanto encontra o aconchego.
                Cada detalhe foi pensado para que você descanse com tranquilidade,
                sinta-se em casa e viva momentos únicos em um ambiente acolhedor e inspirador.
                Aqui, o tempo desacelera e o bem-estar é prioridade.</p>

            <div className={styles.btn}>
                <Link to={"/about"}><i className="fa-regular fa-gem"></i> Nos Conheça</Link>
            </div>

        </section>
    )
}