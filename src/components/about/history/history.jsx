
import Button from '../../global/button/button'
import styles from './history.module.scss'

import img from '/assets/img/pexels-1.jpg'

export default function History() {
    return (
        <section className={styles.history_container}>

            <div className={styles.boxOne} style={{ backgroundImage: `url(${img})` }}> </div>

            <div className={styles.boxTwo}>
                <h1>Nossa história: refúgio da rotina</h1>
                <span>Um pouco sobre nós</span>
                <p>Nascemos do sonho de criar um refúgio à beira-mar, unindo conforto, lazer e contato com a natureza. Fundado por quem queria oferecer experiências únicas, o resort foi planejado para que cada detalhe – das suítes à vista do mar às áreas de lazer – proporcionasse bem-estar e tranquilidade. Hoje, o Recanto Belle Vue é um lugar onde hóspedes vivem momentos inesquecíveis, aproveitando o melhor da vida à beira da praia.</p>

                <Button name={'Escolha relaxar'} link={'/suites'} icon={'fa-regular fa-bookmark'} />
            </div>

        </section>
    )
}