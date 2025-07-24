import styles from './services.module.scss'

import Title from '../../global/title/title'
import ServicesCard from './container/servicesCard'

const service = [
    {
        id: 1,
        layer: 'layerOne',
        title: 'adega do valle',
        subTitle: 'tinto & branco',
        text: 'Vinhos selecionados para momentos especiais.',
        description: 'Nossa adega oferece um ambiente sofisticado, com uma seleção especial de vinhos nacionais e importados. É o espaço ideal para quem deseja desfrutar de uma boa taça.',
        link: '',
        icon: 'fa-solid fa-wine-bottle',
        videoOne: '/assets/video/vinho.mp4',
        videoTwo: '/assets/video/vinhoTwo.mp4',
        btnName: 'Visite a essência'
    },
    {
        id: 2,
        layer: 'layerTwo',
        title: 'La Vue Gastronomia',
        subTitle: 'Restaurante self-service',
        text: 'Sabor, variedade e aconchego em cada refeição.',
        description: 'Sabores únicos preparados com ingredientes frescos e regionais. Nosso buffet oferece uma verdadeira experiência gastronômica em um ambiente acolhedor.',
        link: '',
        icon: 'fa-solid fa-utensils',
        videoOne: '/assets/video/buffet.mp4',
        videoTwo: '/assets/video/buffetTwo.mp4',
        btnName: 'Visite a essência'
    },
    {
        id: 3,
        layer: 'layerThere',
        title: 'Refúgio à Mesa',
        subTitle: 'Serviço de quarto',
        text: 'Conforto e sabor direto até você.',
        description: 'Do atendimento personalizado às atividades de lazer, nossa pousada oferece serviços que transformam sua estadia em momentos inesquecíveis.',
        link: '',
        icon: 'fa-solid fa-bell-concierge',
        videoOne: '/assets/video/service.mp4',
        videoTwo: '/assets/video/serviceTwo.mp4',
        btnName: 'Visite a essência'
    }
]

function Services() {
    return (
        <section className={styles.services_container}>
            {service.map(({ id,
                layer,
                title,
                subTitle,
                text,
                description,
                link,
                icon,
                btnName,
                videoOne,
                videoTwo
            }) => (
                <div key={id} className={styles[layer]}>

                    <Title
                        title={subTitle}
                        text={text}
                        row={layer === 'layerTwo' ? '' : 'row'}
                    />

                    <div className={styles.context}>
                        <ServicesCard
                            title={title}
                            description={description}
                            link={link}
                            icon={icon}
                            btnName={btnName}
                            videoOne={videoOne}
                            videoTwo={videoTwo}
                            row={layer === 'layerTwo' ? 'row_reverse' : ''}
                        />
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Services