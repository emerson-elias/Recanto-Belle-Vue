import Title from '../../../global/title/title'
import styles from './cardFour.module.scss'

function CardFour({ gallery }) {
    return (
        <section className={styles.cardFour_container}>

            <Title
                title={gallery.titleCardFour}
                text={gallery.textCardFour}
                row={'row'}
            />

            <div className={styles.box_video}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={gallery.videoCardFour} type='video/mp4' />
                </video>
            </div>

        </section>
    )
}

export default CardFour