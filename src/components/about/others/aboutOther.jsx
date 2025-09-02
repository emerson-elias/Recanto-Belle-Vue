import imgOne from '/assets/img/kalus.jpg'
import imgTwo from '/assets/img/kalus-2.jpg'

import styles from './aboutOther.module.scss'

export default function AboutOther() {
    return (
        <section className={styles.aboutOther_container}>
            <div className={styles.columnOne}>
                <h1>Primeiros passos - 1998</h1>
                <p>Tivemos nossa primeira iniciativa começou em 1998, quando escolhemos uma pequena e tranquila localidade à beira-mar para dar vida ao nosso sonho. Cercados pela natureza exuberante, construímos um espaço simples, mas cheio de encanto, onde cada detalhe refletia nosso desejo de receber bem e proporcionar momentos únicos</p>
                <div
                    className={styles.imgOne}
                    style={{ backgroundImage: `url(${imgOne})` }}
                />
            </div>

            <div className={styles.columnTwo}>
                <h1>Crescimento - 2019</h1>
                <p>Com o passar dos anos e o reconhecimento de nossos hóspedes, sentimos a necessidade de ampliar nossa pousada. Planejamos cada nova estrutura com cuidado, sempre respeitando o ambiente ao redor, para transformar nosso refúgio em um resort completo, capaz de oferecer mais conforto, serviços diferenciados e experiências inesquecíveis à beira-mar</p>
                < div
                    className={styles.imgTwo}
                    style={{ backgroundImage: `url(${imgTwo})` }}
                />
            </div>
        </section>
    )
}