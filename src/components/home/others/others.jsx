import styles from './others.module.scss'
import video from '/assets/video/screen.mp4'

function Others() {
    return (
        <section className={styles.others_container}>

            <div className={styles.boxOne}>
                <span>pare com tudo,</span>
                <span>para vivenciar a harmonia.</span>
                <span>permita-se sentir...</span>
            </div>

            <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className={styles.videoBox}
            />
        </section>
    )
}

export default Others