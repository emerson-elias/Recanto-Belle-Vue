
import styles from './title.module.scss'

function Title ({ title, text, row }){
    return(     
        <section className={`${styles.title_container} ${row ? styles[row] : ''}`}>
            <h1>{title}</h1>
            <p>{text}</p>
        </section>
    )
}

export default Title