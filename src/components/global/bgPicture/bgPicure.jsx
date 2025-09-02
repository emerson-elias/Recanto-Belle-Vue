
import styles from './bgPiture.module.scss'

export default function BgPiture({ picture }) {
    return (
        <section className={styles.bgPicture_container}
            style={{ backgroundImage: `url(${picture})` }}
        >
        </section>
    )
}