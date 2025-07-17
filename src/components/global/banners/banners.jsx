
import Logo from '../logo/logo'
import styles from './banners.module.scss'

function Banners ({ picture, letter, title, subTitle }){
    return(
        <section className={styles.banners_container}>
            <Logo letter={letter} title={title} subTitle={subTitle}/>
            <img src={picture} alt="BANNER" />
        </section>
    )
}

export default Banners