import Title from '../../../global/title/title'

import styles from './cardTwo.module.scss'

export default function CardTwo({ gallery }) {
    const classNames = ['cardTwo_1', 'cardTwo_2', 'cardTwo_3', 'cardTwo_4']

    return (
        <section className={styles.cardTwo_container}>
            <Title
                title={gallery.titleCardTwo}
                text={gallery.textCardTwo}
                row={'row'}
            />

            <div className={styles.box}>
                {gallery.cardTwo.slice(0, 4).map((el, index) => (
                    <div className={`${styles.layer} ${styles[classNames[index]]}`} key={index}>
                        <img src={el} alt={gallery.id} />
                    </div>
                ))}
            </div>

        </section>
    )
}
