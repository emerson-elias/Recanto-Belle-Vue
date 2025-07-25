import { useNavigate } from 'react-router-dom'

import styles from './gallery.module.scss'
import Title from '../../global/title/title'

function Gallery({ suite }) {
    const navigate = useNavigate()

    const select = () => {
        navigate(`/suites/${suite.id}`)
    }

    return (
        <section className={styles.gallery_container}>
            <Title
                title={`Galleria ${suite.categoria}`}
                text={'Explore os momentos, ambientes e experiências que tornam nosso resort inesquecível.'}
            />

            <div className={styles.box_gallery}>
                {suite?.gallery?.map((img, index) => (
                    <div key={index}
                        className={`${styles.item} ${index === 0 ? styles.destaque : ''}`}
                        onClick={select}
                    >
                        <img src={img} alt={`${suite.title} ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery