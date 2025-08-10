
import styles from './experiences.module.scss'

export default function Experiences({ experiences }) {

    if (!experiences) return null

    return (
        <section className={styles.experiences_container}>

            {experiences.map((element, id) => (

                <div className={styles.box} key={id}>
                    <div className={styles.boxOne}>
                        <img src={element.imgOne} alt="" />
                    </div>

                    <div className={styles.boxTwo}>
                        <img src={element.imgTwo} alt="" />
                    </div>
                </div>
            ))}

        </section>
    )
}