import { useEffect, useRef, useState } from 'react'
import { useLoading } from '../../../context/loadingContext'

import styles from './others.module.scss'
import video from '/assets/video/screen.mp4'
import Title from '../../global/title/title'

function Others() {
    const videoRef = useRef(null)
    const { addLoadingTask, removeLoadingTask } = useLoading()
    const [isVideoReady, setIsVideoReady] = useState(false)

    // ID único para controlar o loading no contexto
    const videoLoadingIdRef = useRef(Symbol('video-loading'))

    useEffect(() => {
        const videoElement = videoRef.current
        const loadingId = videoLoadingIdRef.current

        if (!videoElement) return

        // Inicia o loading global
        addLoadingTask(loadingId)

        const handleVideoReady = () => {
            setIsVideoReady(true)
            removeLoadingTask(loadingId)
        }

        const handleVideoError = () => {
            console.error('Erro ao carregar o vídeo.')
            setIsVideoReady(true) // Mostra mesmo que tenha erro
            removeLoadingTask(loadingId)
        }

        // Escuta tanto "loadeddata" (primeiro frame pronto) quanto "canplaythrough" (buffer completo)
        videoElement.addEventListener('loadeddata', handleVideoReady)
        videoElement.addEventListener('canplaythrough', handleVideoReady)
        videoElement.addEventListener('error', handleVideoError)

        return () => {
            if (!videoElement) return
            videoElement.removeEventListener('loadeddata', handleVideoReady)
            videoElement.removeEventListener('canplaythrough', handleVideoReady)
            videoElement.removeEventListener('error', handleVideoError)
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
                <p>
                    Entre as experiências oferecidas pelo nosso resort, está um mergulho inesquecível para explorar a rica vida marinha e os belíssimos corais da região.
                </p>
            </div>

            <div className={styles.videoBox}>
                <video
                    preload="auto"
                    ref={videoRef}
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ visibility: isVideoReady ? 'visible' : 'hidden' }}
                />
            </div>

        </section>
    )
}

export default Others