import { useNavigate } from 'react-router-dom'

import styles from './gallery.module.scss'

// Gallery.jsx
function Gallery({ suite }) {
    const navigate = useNavigate()

    const select = () => {
        onSelect && onSelect(suite)
        navigate(`/suites/${suite.id}`)
    }

    return (
        <section className={styles.gallery_container}>
            <div className={styles.title_gallery}>
                <h1>Galeria {suite.categoria}</h1>
                <p>Explore os momentos, ambientes e experiências que tornam nosso resort inesquecível.</p>
            </div>

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