import { useEffect, useRef } from 'react'
import { useLoading } from '../../../../context/loadingContext'

import styles from './modal.module.scss'

export default function VideoModal({ show, onClose, videoSrc }) {
    const { setOverflowHidden } = useLoading()
    const videoRef = useRef(null)

    useEffect(() => {
        if (show) {
            setOverflowHidden(true)
            videoRef.current?.play().catch(() => { })
        } else {
            setOverflowHidden(false)
            if (videoRef.current) {
                videoRef.current.pause()
                videoRef.current.currentTime = 0
            }
        }
    }, [show, setOverflowHidden])

    useEffect(() => {
        return () => setOverflowHidden(false)
    }, [setOverflowHidden])

    if (!show) return null

    return (
        <main className={`${styles.modal_container} ${show ? styles.show : ''}`}>
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
                <i className='fa-solid fa-xmark'></i>
            </button>
        </main>
    )
}