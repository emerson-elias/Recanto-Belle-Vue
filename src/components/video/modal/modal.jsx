import { useEffect } from 'react'

import styles from './modal.module.scss'

export default function VideoModal({ show, onClose, videoSrc }) {

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [show])

    if (!show) return null

    return (
        <div className={`${styles.modal_container} ${show ? styles.show : ''}`}>
            <div className={styles.modal_overlay} onClick={onClose}></div>

            <div className={styles.modal_content}>
                <video src={videoSrc} controls autoPlay className={styles.full_video}></video>
            </div>

            <button className={styles.close_button} onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
        </div>
    )
}
