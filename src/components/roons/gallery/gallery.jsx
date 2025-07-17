
import styles from './gallery.module.scss'

import img from '/assets/img/villa-real.jpg'

export default function Gallery() {

    return (
        <section className={styles.gallery_container}>

            <div className={styles.title_gallery}>
                <h1>Galeria</h1>
                <p>Explore os momentos, ambientes e experiências que tornam nossa pousada inesquecível.</p>
                <span>Belle Vue</span>
            </div>

            <div className={styles.box_gallery}>
                <div className={`${styles.item} ${styles.destaque}`}>
                    <img src={img} alt="destaque" />
                </div>
                <div className={styles.item}><img src={img} alt="img2" /></div>
                <div className={styles.item}><img src={img} alt="img3" /></div>
                <div className={styles.item}><img src={img} alt="img4" /></div>
                <div className={styles.item}><img src={img} alt="img5" /></div>
            </div>

        </section>
    )
}