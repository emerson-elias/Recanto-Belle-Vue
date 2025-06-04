import { Link } from 'react-router-dom';

import styles from './services.module.scss';

const servicesData = [
    {
        id: '1',
        logo: '/assets/img/logoAdega.png',
        image: '/assets/img/banner_adega.jpg',
        name: 'Adega D’Ouro',
        text: 'Cada garrafa é um tesouro. Descubra uma seleção exclusiva de vinhos que unem tradição, sabor e sofisticação.',
        link: '#'
    },
    {
        id: '2',
        logo: '/assets/img/logoBuffet.png',
        image: '/assets/img/banner_buffet.jpg',
        name: 'Vue Buffet',
        text: 'Uma experiência gastronômica completa, pratos selecionados, requinte no atendimento com um toque especial.',
        link: '#'
    },
    {
        id: '3',
        logo: '/assets/img/logoServiceRoom.png',
        image: '/assets/img/banner_service_room.jpg',
        name: 'L’Essence',
        text: 'Nosso serviço de quarto oferece praticidade, sofisticação e atenção aos detalhes — tudo para tornar a experiência única',
        link: '#'
    },
]

function ServiceCard({ image, logo, title, text, linkTo, reverseOrder }) {
    const containerClasses = `${styles.service_item} ${reverseOrder ? styles.reverse_layout : ''}`;

    return (
        <>
            <div className={containerClasses}>

                <section className={styles.layerOne}>
                    <img src={image} alt={title} />
                    <div className={styles.logo}>
                        <img src={logo} alt={`Logo ${title}`} />
                    </div>
                </section>

                <section className={styles.layerTwo}>
                    <div className={styles.box}>
                        <span>{title}</span>
                        <p>{text}</p>
                        <div className={styles.btn_services}>
                            <Link to={linkTo}>Visite a Essência</Link>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default function Services() {
    return (
        <section className={styles.services_container}>

            {servicesData.map((service, index) => (
                <ServiceCard
                    key={service.id}
                    logo={service.logo}
                    image={service.image}
                    title={service.name}
                    text={service.text}
                    linkTo={service.link}
                    reverseOrder={index === 1}
                />
            ))}

        </section>
    )
}