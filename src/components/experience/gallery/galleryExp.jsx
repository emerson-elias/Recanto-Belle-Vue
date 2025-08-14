
import CardFour from './cardFour/cardFour'
import CardOne from './cardOne/cardOne'
import CardThere from './cardThere/cardThere'
import CardTwo from './cardTwo/cardTwo'
import styles from './galleryExp.module.scss'

export default function GalleryExp({ gallery }) {
    return (
        <section className={styles.galleryExp_container}>
            <CardOne gallery={gallery} />
            <CardTwo gallery={gallery} />
            <CardThere gallery={gallery} />
            <CardFour gallery={gallery} />
        </section>
    )
}