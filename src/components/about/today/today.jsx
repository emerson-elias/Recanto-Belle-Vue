
import SlidesUp from '../../global/slidesUp/slidesUp'
import styles from './today.module.scss'

const carrousel = [
    {
        src: '/assets/img/pexels-1.jpg',
    },
    {
        src: '/assets/img/pexels-2.jpg',
    },
    {
        src: '/assets/img/ds-14.jpg',
    },
    {
        src: '/assets/img/pexels-8.jpg',
    },
    {
        src: '/assets/img/services-7.jpg',
    },
    {
        src: '/assets/img/s-8.jpg',
    },
    {
        src: '/assets/img/transporte.jpg',
    }
]

export default function Today() {
    return (
        <section className={styles.today_container}>

            <div className={styles.boxOne}>
                <h1>Prosperidade - 2025</h1>
                <span>Hoje</span>
                <p>Nos últimos anos, nosso resort tem um crescimento notável na área de hospedagem, refletindo a confiança crescente de nossos hóspedes e a qualidade de nossos serviços. O aumento constante na taxa de ocupação é resultado de investimentos contínuos em infraestrutura, melhorias nas acomodações, atendimento personalizado e experiências únicas para cada visitante. Hoje, recebemos mais hóspedes vindos de diferentes regiões do país e do mundo, fortalecendo nossa reputação como destino de excelência. Esse avanço reafirma nosso compromisso em oferecer conforto, sofisticação e momentos inesquecíveis</p>
            </div>

            <div className={styles.boxTwo}>
                <SlidesUp slides={carrousel} />
            </div>

        </section>
    )
}