import Button from '../../global/button/button'
import Title from '../../global/title/title'

import styles from './package.module.scss'

export default function Package({ information }) {
    
    const packs = [
        {
            name: information.namePackOne,
            img: information.packImgOne,
            description: information.descriptionPackOne,
            includes: information.includePackOne,
            icon: 'fa-regular fa-gem',
        },
        {
            name: information.namePackTwo,
            img: information.packImgTwo,
            description: information.descriptionPackTwo,
            includes: information.includePackTwo,
            icon: 'fa-regular fa-heart',
        }
    ]

    return (
        <section className={styles.package_container}>

            <Title
                title="Pacotes exclusivos"
                text="Temos opções únicas de pacotes para deixar sua experiência ainda melhor"
            />

            <div className={styles.row}>
                {packs.map((pack, index) => (
                    <div key={index} className={index === 0 ? styles.boxOne : styles.boxTwo}>
                        <div className={styles.boxImg} style={{ backgroundImage: `url(${pack.img})` }} />

                        <div className={styles.boxInfor}>
                            <h2>{pack.name}</h2>
                            <p>{pack.description}</p>

                            <ul>
                                {pack.includes.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            <Button
                                link="#"
                                icon={pack.icon}
                                name="escolher este"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}