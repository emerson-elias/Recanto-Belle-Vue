import { useEffect, useRef } from 'react'
import { useLoading } from '../../../context/loadingContext'

import styles from './others.module.scss'
import video from '/assets/video/screen.mp4'
import Title from '../../global/title/title'

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

            <Title
                title={'Mergulhos Inesquecíveis'}
                text={'Explore as profundezas cristalinas e descubra a magia da vida marinha em praias paradisíacas'}
                row={''}
            />

            <div className={styles.box}>
                <p>Entre as experiências oferecidas pelo nosso resort, está um mergulho inesquecível para explorar a rica vida marinha e os belíssimos corais da região.</p>
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