import { Link } from 'react-router-dom'
import Button from '../../../global/button/button'
import styles from './servicesCard.module.scss'

function ServicesCard({
    title,
    content,
    description,
    link,
    icon,
    btnName,
    videoOne,
    row,
    titleBanner
}) {
    return (
        <section className={`${styles.servicesCard_container} ${row && styles[row]}`}>
            <span>{content}</span>

            <div className={styles.boxOne}>
                <h1>{title}</h1>
                <p>{description}</p>

                <Button link={link} icon={icon} name={btnName} />

            </div>

            <div className={styles.boxTwo} >

                <Link to={link}>{titleBanner}</Link>

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={videoOne} type='video/mp4' />
                </video>

            </div>
        </section>
    )
}

export default ServicesCard