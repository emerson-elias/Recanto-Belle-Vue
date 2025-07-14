
import Button from '../button/button'
import styles from './faq.module.scss'

function FAQ({ picture, text, title, subTitle }) {
    return (
        <section className={styles.faq_container}>

            <div className={styles.boxOne}>
                <img src={picture} alt="IMAGEM" />
            </div>

            <div className={styles.boxTwo}>
                <h1>{title}</h1>
                <span>{subTitle}</span>
                <p>{text}</p>

                <Button link={' '} icon={'fa-regular fa-circle-question'} name={' Tire suas Dúvidas '}/>
            </div>

        </section>
    )
}

export default FAQ