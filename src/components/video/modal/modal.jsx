import { useEffect, useRef } from 'react'
import { useLoading } from '../../../loading/context/loadingContext'
import styles from './modal.module.scss'

export default function VideoModal({ show, onClose, videoSrc }) {
    const { addLoadingTask, removeLoadingTask, setForceOverflowHidden } = useLoading()
    const videoRef = useRef(null)

    useEffect(() => {
        if (show) {
            setForceOverflowHidden(true)

            const taskId = 'modalVideo'
            addLoadingTask(taskId)

            const video = videoRef.current
            if (video) {
                video.onloadeddata = () => removeLoadingTask(taskId)
                video.onerror = () => removeLoadingTask(taskId)
            }

            return () => {
                setForceOverflowHidden(false)

                if (videoRef.current) {
                    videoRef.current.pause()
                    videoRef.current.currentTime = 0
                }

                removeLoadingTask(taskId)
            }
        }
    }, [show, videoSrc])

    if (!show) return null

    return (
        <section className={`${styles.modal_container} ${show ? styles.show : ''}`}>
            <div className={styles.modal_overlay} onClick={onClose}></div>

            <div className={styles.modal_content}>
                <video
                    ref={videoRef}
                    src={videoSrc}
                    controls
                    autoPlay
                    className={styles.full_video}
                />
            </div>

            <button className={styles.close_button} onClick={onClose}>
                <i className="fa-solid fa-xmark"></i>
            </button>
        </section>
    )
}
