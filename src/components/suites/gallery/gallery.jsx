
import styles from './gallery.module.scss'
import Title from '../../global/title/title'

function Gallery({ suite }) {

    return (
        <section className={styles.gallery_container}>
            <Title
                title={`Galleria ${suite.categoria}`}
                text={'Explore os momentos, ambientes e experiências que tornam nosso resort inesquecível.'}
            />

            <div className={styles.box_gallery}>
                {suite?.gallery?.map((img, index) => {
                    let customClass = styles.item

                    if (index === 0) customClass += ` ${styles.destaqueTop}`
                    if (index === 9) customClass += ` ${styles.destaqueBottom}`

                    return (
                        <div key={index} className={customClass}>
                            <img src={img} alt={`${suite.title} ${index + 1}`} />
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default Gallery