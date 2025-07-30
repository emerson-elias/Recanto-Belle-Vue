
import styles from './icons.module.scss'

export default function Icons({ suite }) {

    if (!suite) return null

    return (
        <section className={styles.icons_container}>

            <h1>Equipada</h1>
            <p>Para oferecer o máximo conforto e descanço</p>

            <ul className={styles.icons}>
                {suite.icons.map((icon) => (
                    <li key={icon.name} className={styles.item}>
                        <img src={icon.src} alt={icon.name} className={styles.icon_img} loading="lazy" />
                        <i className={styles.icon_name}>{icon.name}</i>
                    </li>
                ))}
            </ul>

        </section>
    )
}