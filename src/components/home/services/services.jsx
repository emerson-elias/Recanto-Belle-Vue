import { services } from '../../services/data/data'

import styles from './services.module.scss'

import Title from '../../global/title/title'
import ServicesCard from './container/servicesCard'

function Services() {
    return (
        <section className={styles.services_container}>

            <Title
                title={'Serviços de Alimentos e Bebidas'}
                text={'Nosso resort oferece uma estrutura completa com restaurantes, adega e serviço de quarto.'}
                row={'row'}
            />

            {services.map(({
                id,
                layer,
                title,
                content,
                description,
                icon,
                btnName,
                videoOne
            }, index) => {
                const linkId = services[index]?.id

                return (
                    <div key={id} className={styles[layer]}>
                        <div className={styles.context}>
                            <ServicesCard
                                title={title}
                                content={content}
                                description={description}
                                link={`/services/${linkId}`}
                                icon={icon}
                                btnName={btnName}
                                videoOne={videoOne}
                                row={layer === 'layerTwo' ? 'row_reverse' : ''}
                            />
                        </div>
                    </div>
                )
            })}

        </section>
    )
}

export default Services