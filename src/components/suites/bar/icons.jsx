
import styles from './icons.module.scss'

export default function Icons({ suite }) {

    if (!suite) return null

    return (
        <section className={styles.icons_container}>

            <div className={styles.box}>

                <ul className={styles.icons}>
                    {suite.icons.map((icon) => (
                        <li key={icon.name} className="icon-item">
                            <img src={icon.src} alt={icon.name} className="icon-img" loading="lazy" />
                            <i className="icon-name">{icon.name}</i>
                        </li>
                    ))}
                </ul>

            </div>

        </section>
    )
}