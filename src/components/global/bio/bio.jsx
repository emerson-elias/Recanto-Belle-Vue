
import Button from '../button/button'
import Circle from '../svg/circle'
import styles from './bio.module.scss'

function Bio({
    title,
    caption,
    text,
    link,
    icon,
    name,
    imgOne,
    imgTwo
}) {
    return (
        <section className={styles.bio_container}>

            <div className={styles.title}>
                <h1>{title}</h1>
                <h1>{caption}</h1>
            </div>

            <div className={styles.row}>

                <div className={styles.boxOne}>
                    <p>{text}</p>
                    <Button link={link} icon={icon} name={name} />
                </div>

                <div className={styles.boxTwo}>
                    <div className={styles.imgOne}
                        style={{ backgroundImage: `url(${imgOne})` }}
                    ></div>

                    <div className={styles.imgTwo}
                        style={{ backgroundImage: `url(${imgTwo})` }}
                    ></div>

                </div>

                <Circle name={'bem vindos'} />
            </div>

        </section>
    )
}

export default Bio