
import CardOne from './cardOne/cardOne'
import CardTwo from './cardTwo/cardTwo'
import styles from './galleryExp.module.scss'

export default function GalleryExp({ gallery }) {
    return (
        <section className={styles.galleryExp_container}>
            <CardOne gallery={gallery} />
            <CardTwo gallery={gallery} />
        </section>
    )
}