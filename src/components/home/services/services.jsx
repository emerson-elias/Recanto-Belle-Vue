import { Link } from 'react-router-dom'

import styles from './services.module.scss'

import adega from '/assets/img/beer.jpg'
import buffet from '/assets/img/buffet.jpg'
import services from '/assets/img/services.jpg'

import Circle from '../../global/svg/circle' /* AINDA PENSANDO ONDE IREI USAR ESSE SVG */

import Button from '../../global/button/button'

const service = [
    {
        id: 1,
        layer: 'layerOne',
        title: 'adega vinhedo: Valle dos Vinhos',
        description: 'Nossa adega oferece um ambiente sofisticado, com uma seleção especial de vinhos nacionais e importados. É o espaço ideal para quem deseja desfrutar de uma boa taça.',
        link: ' ',
        img: adega,
        alt: 'BANNER ADEGA',
    },
    {
        id: 2,
        layer: 'layerTwo',
        title: 'buffet: La Vue Gastronomia',
        description: 'Sabores únicos preparados com ingredientes frescos e regionais. Nosso buffet oferece uma verdadeira experiência gastronômica em um ambiente acolhedor.',
        link: ' ',
        img: buffet,
        alt: 'BANNER BUFFET',
    },
    {
        id: 3,
        layer: 'layerThere',
        title: 'serviço de quarto: Refúgio à Mesa',
        description: 'Do atendimento personalizado às atividades de lazer, nossa pousada oferece serviços que transformam sua estadia em momentos inesquecíveis.',
        link: ' ',
        img: services,
        alt: 'BANNER SERVIÇOS',
    }
]

function Services() {
    return (
        <section className={styles.services_container}>

            {service.map(({ id, layer, title, description, link, img, alt }) => (

                <div key={id} className={styles[layer]}>
                    <div className={styles.boxOne}>
                        <h1>{title}</h1>
                        <p>{description}</p>

                        <Button link={link} />
                    </div>

                    <div className={styles.boxTwo}>
                        <img src={img} alt={alt} />
                    </div>
                    {/* <Circle name={title}/> */}
                </div>
            ))}

        </section>
    )
}

export default Services