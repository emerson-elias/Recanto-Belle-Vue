import Title from '../../../global/title/title'

import styles from './cardOne.module.scss'

export default function CardOne({ gallery }) {

    return (
        <section className={styles.cardOne_container}>
            <Title
                title={gallery.titleCardOne}
                text={gallery.textCardOne}
            />

            <div className={styles.box}>
                <div className={`${styles.layer} ${styles.cadOne_1}`}>
                    <img src={gallery.cardOne[0]} alt={gallery.id} />
                </div>
             
                <div className={styles.col2_top}>
                    <div className={`${styles.layer} ${styles.cadOne_2}`}>
                        <img src={gallery.cardOne[1]} alt={gallery.id} />
                    </div>
                    <div className={`${styles.layer} ${styles.cadOne_3}`}>
                        <img src={gallery.cardOne[2]} alt={gallery.id} />
                    </div>
                </div>

                <div className={styles.col2_bottom}>
                    <div className={`${styles.layer} ${styles.cadOne_4}`}>
                        <img src={gallery.cardOne[3]} alt={gallery.id} />
                    </div>
                </div>
            </div>
        </section>
    )
}
