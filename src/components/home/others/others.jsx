import { useEffect, useRef } from 'react'
import { useLoading } from '../../../context/loadingContext' // ajuste o caminho se necessário

import styles from './others.module.scss'
import video from '/assets/video/screen.mp4'

function Others() {
    const videoRef = useRef(null)
    const { addLoadingTask, removeLoadingTask } = useLoading()

    // IDs personalizados para rastrear esse vídeo no contexto
    const videoLoadingIdRef = useRef(Symbol('video-loading'))

    useEffect(() => {
        const videoElement = videoRef.current
        const loadingId = videoLoadingIdRef.current

        if (!videoElement) return

        addLoadingTask(loadingId)

        const canPlayThrough = () => {
            removeLoadingTask(loadingId)
        }

        const error = () => {
            removeLoadingTask(loadingId)
        }

        videoElement.addEventListener('canplaythrough', canPlayThrough)
        videoElement.addEventListener('error', error)

        return () => {
            videoElement.removeEventListener('canplaythrough', canPlayThrough)
            videoElement.removeEventListener('error', error)
        }
    }, [addLoadingTask, removeLoadingTask])

    return (
        <section className={styles.others_container}>
            <div className={styles.boxOne}>
                <span>❝ Deixe o peso cair,</span>
                <span>abrace o instante como ele é.</span>
                <span>Respire, você estará onde precisa...❞</span>
            </div>

            <video
                ref={videoRef}
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