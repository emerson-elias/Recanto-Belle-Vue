import Logo from '../logo/logo'

import styles from './bannerVideo.module.scss'

function bannerVideo({ letter, title, subTitle, video}) {
    return (
        <section className={styles.bannerVideo_container}>

            <Logo letter={letter} title={title} subTitle={subTitle} />

            <video
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={video} type='video/mp4' />
            </video>
        </section>
    )
}

export default bannerVideo