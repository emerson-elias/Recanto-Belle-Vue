
import Button from '../button/button'
import styles from './bio.module.scss'

function Bio({ title, caption, text }) {
    return (
        <section className={styles.bio_container}>

            <div className={styles.title}>
                <h1>{title}:</h1>
                <h2>{caption}</h2>
            </div>

            <p>{text}</p>

            <Button link={'/sobre'} icon={'fa-solid fa-gem'} name={'Visite a essência'}/>

        </section>
    )
}

export default Bio