import Title from '../../../global/title/title'

import styles from './cardOne.module.scss'

export default function CardOne({ gallery }) {
    const classNames = ['cadOne_1', 'cadOne_2', 'cadOne_3', 'cadOne_4']

    return (
        <section className={styles.cardOne_container}>
            <Title
                title={gallery.titleCardOne}
                text={gallery.textCardOne}
            />
            
            <div className={styles.box}>
                {gallery.cardOne.map((el, index) => (
                    <div className={`${styles.layer} ${styles[classNames[index]]}`} key={index}>
                        <img src={el} alt={gallery.id} />
                    </div>
                ))}
            </div>

        </section>
    )
}
