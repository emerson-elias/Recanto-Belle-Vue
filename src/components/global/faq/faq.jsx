
import Button from '../button/button'
import styles from './faq.module.scss'

function FAQ({ picture, text, title, subTitle }) {
    return (
        <section className={styles.faq_container}>

            <div className={styles.boxOne}>
                <img src={picture} alt="IMAGEM" />
            </div>

            <div className={styles.boxTwo}>
                <h2>{subTitle}</h2>
                <h1>{title}</h1>
                <p>{text}</p>

                <Button link={' '} icon={' '} />
            </div>

        </section>
    )
}

export default FAQ