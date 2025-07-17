
import Logo from '../logo/logo'
import styles from './banners.module.scss'

function Banners ({ picture, letter, title, subTitle }){
    return(
        <section className={styles.banners_container}
          style={{ backgroundImage: `url(${picture})` }}>
            <Logo letter={letter} title={title} subTitle={subTitle}/>
        </section>
    )
}

export default Banners