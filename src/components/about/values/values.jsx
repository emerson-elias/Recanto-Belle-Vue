import Title from '../../global/title/title'
import Circle from '../../global/svg/circle'

import imgOne from '/assets/img/ds-8.jpg'
import imgTwo from '/assets/img/ds-9.jpg'

import styles from './values.module.scss'

export default function Values() {
    return (
        <section className={styles.values_container}>

            <Title
                title={'Nossos valores nos definem'}
                text={'Assim como princípios definem o ser humano, com as empresas não são diferentes'}
            />

            <div className={styles.row}>

                <div className={styles.boxOne}>
                    <span>Visão - futuro</span>
                    <p>Oferecer experiências únicas de lazer e conforto, proporcionando momentos inesquecíveis aos nossos hóspedes, com atendimento de excelência e respeito ao meio ambiente</p>

                    <span>Missão - qualidade</span>
                    <p>Ser reconhecido como o resort de referência na região, destacando-se pela qualidade, inovação e sustentabilidade em todos os serviços oferecidos</p>

                    <span>Valores - respeito</span>
                    <p>Compromisso com a satisfação do hóspede, ética, transparência, sustentabilidade, cuidado com a equipe e promoção de experiências memoráveis</p>
                </div>

                <div className={styles.boxTwo}>
                    <div className={styles.imgOne} style={{ backgroundImage: `url(${imgOne})` }}></div>
                    <div className={styles.imgTwo} style={{ backgroundImage: `url(${imgTwo})` }}></div>
                </div>

                <Circle name={'Valores valores'} />

            </div>
        </section>
    )
}
