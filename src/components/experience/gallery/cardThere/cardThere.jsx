import Title from '../../../global/title/title'

import styles from './cardThere.module.scss'

export default function CardThere({ gallery }) {
    const classNames = ['cardThere_1', 'cardThere_2', 'cardThere_3', 'cardThere_4']

    return (
        <section className={styles.cardThere_container}>
            <Title
                title={gallery.titleCardThere}
                text={gallery.textCardThere}
            />

            <div className={styles.box}>
                {gallery.cardThere.map((el, index) => (
                    <div className={`${styles.layer} ${styles[classNames[index]]}`} key={index}>
                        <img src={el} alt={gallery.id} />
                    </div>
                ))}
            </div>

        </section>
    )
}
