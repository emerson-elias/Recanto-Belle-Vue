
import Button from '../button/button'
import styles from './bio.module.scss'

function Bio({ title, caption, text, link, icon, name}) {
    return (
        <section className={styles.bio_container}>

            <div className={styles.title}>
                <h1>{title}</h1>
                <h2>{caption}</h2>
            </div>

            <p>{text}</p>

            <Button link={link} icon={icon} name={name}/>

        </section>
    )
}

export default Bio