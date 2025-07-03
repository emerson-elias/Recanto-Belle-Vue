import { Link } from 'react-router-dom'

import styles from './services.module.scss'

import adega from '/assets/img/beer.jpg'
import buffet from '/assets/img/buffet.jpg'
import services from '/assets/img/services.jpg'

import Circle from '../../global/svg/circle'

const service = [
    {
        id: 1,
        layer: 'layerOne',
        title: 'adega vinhedo',
        name: 'Valle dos Vinhos',
        description: 'Nossa adega oferece um ambiente sofisticado, com uma seleção especial de vinhos nacionais e importados. É o espaço ideal para quem deseja desfrutar de uma boa taça.',
        btnClass: 'btn',
        img: adega,
        alt: 'BANNER ADEGA',
    },
    {
        id: 2,
        layer: 'layerTwo',
        title: 'self service',
        name: 'La Vue Gastronomia',
        description: 'Sabores únicos preparados com ingredientes frescos e regionais. Nosso buffet oferece uma verdadeira experiência gastronômica em um ambiente acolhedor.',
        btnClass: 'btn',
        img: buffet,
        alt: 'BANNER BUFFET',
    },
    {
        id: 3,
        layer: 'layerThere',
        title: 'serviço de quarto',
        name: 'Refúgio à Mesa',
        description: 'Do atendimento personalizado às atividades de lazer, nossa pousada oferece serviços que transformam sua estadia em momentos inesquecíveis.',
        btnClass: 'btn',
        img: services,
        alt: 'BANNER SERVIÇOS',
    }
]

function Services() {
    return (
        <section className={styles.services_container}>

            {service.map(({ id, layer, name, title, description, btnClass, img, alt }) => (

                <div key={id} className={styles[layer]}>
                    <div className={styles.boxOne}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <div className={styles[btnClass]}>
                            <Link>Visite a Essência</Link>
                        </div>
                    </div>

                    <div className={styles.boxTwo}>
                        <h1>{name}</h1>
                        <img src={img} alt={alt} />
                    </div>

                    {/* <Circle name={title}/> */}
                </div>
            ))}

        </section>
    )
}

export default Services