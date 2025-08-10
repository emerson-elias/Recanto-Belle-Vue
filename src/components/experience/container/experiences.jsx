import { Link } from 'react-router-dom'
import styles from './experiences.module.scss'

export default function Experiences({ experiences }) {
    if (!experiences) return null

    return (
        <section className={styles.experiences_container}>
            {experiences.map((element, index) => (
                <div
                    className={`${styles.box} ${index % 2 !== 0 ? styles.row_reverse : ''}`}
                    key={index}
                >
                    <div className={styles.boxOne}>
                        <img src={element.imgOne} alt={element.id} />
                        <Link to={element.link}></Link>
                    </div>

                    <div className={styles.boxTwo}>
                        <img src={element.imgTwo} alt={element.id} />
                    </div>
                </div>
            ))}
        </section>
    )
}
