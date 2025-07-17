
import styles from './logo.module.scss'

function Logo({letter, title, subTitle}){
    return(
        <section className={styles.logo_container}>
                <h1>{letter}</h1>
                <span>{title}</span>
                <p>{subTitle}</p>
        </section>
    )
}

export default Logo