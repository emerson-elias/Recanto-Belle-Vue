import styles from './container.module.scss'

export default function Container({ services }) {
    const sections = [
        {
            layerClass: styles.layerOne,
            title: services.titleBoxOne,
            description: services.descriptionBoxOne,
            img1: services.pictureOneBoxOne,
            img2: services.pictureTwoBoxOne
        },
        {
            layerClass: styles.layerTwo,
            title: services.titleBoxTwo,
            description: services.descriptionBoxTwo,
            img1: services.pictureOneBoxTwo,
            img2: null
        },
        {
            layerClass: styles.layerThere,
            title: services.titleBoxThere,
            description: services.descriptionBoxThere,
            img1: services.pictureOneBoxThere,
            img2: services.pictureTwoBoxThere
        },
        {
            layerClass: styles.layerFour,
            title: services.titleBoxFour,
            description: services.descriptionBoxFour,
            img1: services.pictureOneBoxFour,
            img2: services.pictureTwoBoxFour
        },
    ]

    return (
        <section className={styles.main_container}>

            {sections.map((section, index) => (
                <div key={index} className={section.layerClass}>
                    <div
                        className={styles.boxOne}
                        style={{ backgroundImage: `url(${section.img1})` }}
                    >
                        
                    </div>

                    <div className={styles.boxTwo}>
                        <div className={styles.infor}>
                            <h1>{section.title}</h1>
                            <p>{section.description}</p>
                        </div>

                        {section.img2 && (
                            <div
                                className={styles.twoImg}
                                style={{ backgroundImage: `url(${section.img2})` }}
                            ></div>
                        )}
                    </div>
                </div>
            ))}
            
        </section>
    )
}
