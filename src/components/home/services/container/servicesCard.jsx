import { Link } from 'react-router-dom'

import styles from './servicesCard.module.scss'

function ServicesCard({
    title,
    content,
    description,
    link,
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

                <Link to={link}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 173 23.68"
                        width='70'
                        height='70'
                    >
                        <polygon fill="#fff" points="161.16 0 160.17 .99 170.32 11.14 0 11.14 0 12.54 170.32 12.54 160.17 22.69 161.16 23.68 173 11.84 161.16 0" />
                    </svg>

                </Link>
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