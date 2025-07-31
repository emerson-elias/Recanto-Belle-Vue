import styles from './services.module.scss'

import Title from '../../global/title/title'
import ServicesCard from './container/servicesCard'

const service = [
    {
        id: 1,
        layer: 'layerOne',
        title: 'Tinto & branco: adega do valle',
        content: 'Morgado',
        description: 'Nossa adega oferece um ambiente sofisticado, com uma seleção especial de vinhos nacionais e importados. É o espaço ideal para quem deseja desfrutar de uma boa taça.',
        link: '',
        icon: 'fa-solid fa-wine-bottle',
        videoOne: '/assets/video/vinho.mp4',
        btnName: 'Visite a essência'
    },
    {
        id: 2,
        layer: 'layerTwo',
        title: 'Buffet: La Vue Gastronomia',
        content: 'Manjares',
        description: 'Sabores únicos preparados com ingredientes frescos e regionais. Nosso buffet oferece uma verdadeira experiência gastronômica em um ambiente acolhedor.',
        link: '',
        icon: 'fa-solid fa-utensils',
        videoOne: '/assets/video/buffet.mp4',
        btnName: 'Visite a essência'
    },
    {
        id: 3,
        layer: 'layerThere',
        title: 'Serviço de quarto: Refúgio à Mesa',
        content: 'Conforto',
        description: 'Do atendimento personalizado às atividades de lazer, nossa pousada oferece serviços que transformam sua estadia em momentos inesquecíveis.',
        link: '',
        icon: 'fa-solid fa-bell-concierge',
        videoOne: '/assets/video/service.mp4',
        btnName: 'Visite a essência'
    }
]

function Services() {
    return (
        <section className={styles.services_container}>

            <Title
                title={'Serviços de Alimentos e Bebidas'}
                text={'Nosso resort oferece uma estrutura completa com restaurantes, adega e serviço de quarto.'}
                row={'row'}
            />

            {service.map(({ id,
                layer,
                title,
                content,
                description,
                link,
                icon,
                btnName,
                videoOne
            }) => (
                <div key={id} className={styles[layer]}>

                    <div className={styles.context}>
                        <ServicesCard
                            title={title}
                            content={content}
                            description={description}
                            link={link}
                            icon={icon}
                            btnName={btnName}
                            videoOne={videoOne}
                            row={layer === 'layerTwo' ? 'row_reverse' : ''}
                        />
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Services