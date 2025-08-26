import styles from './offers.module.scss'

const offers = [
    {
        title: 'Suítes',
        titleTwo: 'Conforto',
        description: 'Reserve agora e aproveite 25% de desconto em todas as suítes',
        image: '/public/assets/img/pexels-7.jpg'
    },
    {
        title: 'Vida Marinha',
        titleTwo: 'Mergulhos Livres',
        description: 'Pacotes de mergulho com até 20% OFF neste mês',
        image: '/public/assets/img/m-2.jpg'
    },
    {
        title: 'Acorde com o Sol',
        titleTwo: 'Sol Nascente',
        description: 'Desconto especial para quem reserva o amanhecer antecipadamente',
        image: '/public/assets/img/s-5.jpg'
    },
    {
        title: 'Caminhos da Natureza',
        titleTwo: 'Trilha Ecologica',
        description: 'Trilhas guiadas com 15% de desconto no final de semana',
        image: '/public/assets/img/t-7.jpg'
    },
    {
        title: 'Entre Marés',
        titleTwo: 'Caminho das Ondas',
        description: 'Aulas de surf com valores promocionais para hóspedes',
        image: '/public/assets/img/sr-13.jpg'
    },
    {
        title: 'Refúgio do Pescador',
        titleTwo: 'Sossego do Mar',
        description: 'Relaxe à beira-mar com pacotes exclusivos neste feriado',
        image: '/public/assets/img/ds-4.jpg'
    }
]

export default function Offers() {

    return (
        <section className={styles.offers_container}>
            <div className={styles.title}>
                <h1>Aproveite <br /> nossas ofertas</h1>
                <p>Aproveite descontos imperdíveis e transforme cada momento em uma experiência única, com muito mais economia e benefícios especiais feitos para você</p>
            </div>
            
            <span>Promoções</span>

            <div className={styles.row}>
                {offers.map((offer, index) => (
                    <div key={index} className={styles.list}>
                        <div className={styles.ol}>
                            <h2>{offer.title}</h2>
                            <h2>{offer.titleTwo}</h2>
                        </div>

                        <p>{offer.description}</p>
                        <img src={offer.image} alt="OFERTAS" />
                    </div>
                ))}
            </div>
        </section>
    )
}
