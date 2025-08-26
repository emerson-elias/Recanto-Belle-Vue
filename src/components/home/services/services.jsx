import { services } from '../../services/data/data'

import styles from './services.module.scss'

import ServicesCard from './container/servicesCard'

function Services() {
    return (
        <section className={styles.services_container}>

            <div className={styles.title}>
                <h1>Instalações inclusas: <br/>Serviçõs, alimentos e Bebidas</h1>
                <p>
                    Nosso resort oferece uma experiência gastronômica completa,
                    com restaurantes que unem sabores regionais e internacionais,
                    uma adega selecionada com rótulos exclusivos e um serviço de
                    quarto disponível para levar conforto e requinte diretamente até você.
                    Cada detalhe foi pensado para transformar cada refeição em um momento especial.
                </p>
            </div>

            {services.map(({
                id,
                layer,
                title,
                content,
                description,
                videoOne,
                imgOne,
                titleBanner
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
                                videoOne={videoOne}
                                imgOne={imgOne}
                                row={layer === 'layerTwo' ? 'row_reverse' : ''}
                                titleBanner={titleBanner}
                            />
                        </div>
                    </div>
                )
            })}

        </section>
    )
}

export default Services