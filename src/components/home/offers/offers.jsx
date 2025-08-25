import styles from './offers.module.scss'

const offers = [
    {
        title: 'Suítes',
        description: 'Reserve agora e aproveite 25% de desconto em todas as suítes',
        image: '/public/assets/img/adega-1.jpg'
    },
    {
        title: 'Vida Marinha',
        description: 'Pacotes de mergulho com até 20% OFF neste mês',
        image: '/public/assets/img/adega-1.jpg'
    },
    {
        title: 'Acorde com o Sol',
        description: 'Desconto especial para quem reserva o amanhecer antecipadamente',
        image: '/public/assets/img/adega-1.jpg'
    },
    {
        title: 'Caminhos da Natureza',
        description: 'Trilhas guiadas com 15% de desconto no final de semana',
        image: '/public/assets/img/adega-1.jpg'
    },
    {
        title: 'Entre Marés',
        description: 'Aulas de surf com valores promocionais para hóspedes',
        image: '/public/assets/img/adega-1.jpg'
    },
    {
        title: 'Refúgio do Pescador',
        description: 'Relaxe à beira-mar com pacotes exclusivos neste feriado',
        image: '/public/assets/img/adega-1.jpg'
    },
]

export default function Offers() {

    return (
        <section className={styles.offers_container}>
            <div className={styles.title}>
                <h1>Nossas <br /> ofertas</h1>
                <p>Descontos imperdíveis para você aproveitar cada momento</p>
            </div>

            <div className={styles.row}>
                {offers.map((offer, index) => (
                    <div key={index} className={styles.card}>
                        <h2>{offer.title}</h2>
                        <p>{offer.description}</p>
                        <img src={offer.image} alt="OFERTAS" />
                    </div>
                ))}
            </div>
        </section>
    )
}
