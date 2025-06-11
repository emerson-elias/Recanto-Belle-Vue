
import styles from './phrase.module.scss'

export default function Phrase() {
    return (
        <section className={styles.phrase_container}>

            <section className={styles.text_linear}>
                <span>☆ Recanto Belle Vue</span>
                <span>☆ Recanto Belle Vue</span>
            </section>

            <h1>Seu refúgio está aqui</h1>

            <p>Na nossa pousada, cada detalhe é pensado para que você se sinta em casa — com conforto, charme e tranquilidade.</p>
            <p>Seja para descansar, viver momentos especiais ou apenas desacelerar, estamos prontos para te receber com carinho.</p>

            <div className={styles.btn_phrase}>
                <a> Reserve agora</a>
            </div>
        </section>
    )
}