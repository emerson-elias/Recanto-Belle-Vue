
import styles from './services.module.scss'

import Circle from '../../global/svg/circle' /* AINDA PENSANDO ONDE IREI USAR ESSE SVG */

import Button from '../../global/button/button'
import Title from '../../global/title/title'

const service = [
    {
        id: 1,
        layer: 'layerOne',
        title: "tinto & branco: adega do valle",
        description: 'Nossa adega oferece um ambiente sofisticado, com uma seleção especial de vinhos nacionais e importados. É o espaço ideal para quem deseja desfrutar de uma boa taça.',
        link: ' ',
        icon: 'fa-solid fa-wine-bottle',
        img:  '/assets/img/beer.jpg',
        alt: 'BANNER ADEGA',
        btnName: 'Visite a essência'
    },
    {
        id: 2,
        layer: 'layerTwo',
        title: 'buffet: La Vue Gastronomia',
        description: 'Sabores únicos preparados com ingredientes frescos e regionais. Nosso buffet oferece uma verdadeira experiência gastronômica em um ambiente acolhedor.',
        link: ' ',
        icon: 'fa-solid fa-utensils',
        img: '/assets/img/buffet.jpg',
        alt: 'BANNER BUFFET',
        btnName: 'Visite a essência'
    },
    {
        id: 3,
        layer: 'layerThere',
        title: 'serviço de quarto: Refúgio à Mesa',
        description: 'Do atendimento personalizado às atividades de lazer, nossa pousada oferece serviços que transformam sua estadia em momentos inesquecíveis.',
        link: ' ',
        icon: "fa-solid fa-bell-concierge",
        img: '/assets/img/services.jpg',
        alt: 'BANNER SERVIÇOS',
        btnName: 'Visite a essência'
    }
]

function Services() {
    return (
        <section className={styles.services_container}>

            <Title
                title={'Serviços Oferecidos'}
                text={'Oferecemos serviços exclusivos para tornar sua experiência inesquecível'}
                row={'row'}
            />

            {service.map(({ id, layer, title, description, link, icon, img, btnName }) => (

                <div key={id} className={styles[layer]}>
                    <div className={styles.boxOne}>
                        <div className={styles.context}>
                            <h1>{title}</h1>
                            <p>{description}</p>

                            <Button link={link} icon={icon} name={btnName} />
                        </div>
                    </div>

                    <div className={styles.boxTwo} style={{ backgroundImage: `url(${img})` }} ></div>
                    {/* <Circle name={title}/> */}
                </div>
            ))}

        </section>
    )
}

export default Services