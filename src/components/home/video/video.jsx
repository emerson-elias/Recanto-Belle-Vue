import { useState, useEffect, useRef } from 'react'
import { useLoading } from '../../../context/loadingContext.jsx'

import styles from './video.module.scss'
import VideoModal from './modal/modal.jsx'

import preview from '/assets/video/prev.mp4'
import full from '/assets/video/full.mp4'

let videoHasLoaded = false
const TASK_ID = 'previewVideoLoad'

export default function Video() {
    const [showModal, setShowModal] = useState(false)
    const { addLoadingTask, removeLoadingTask } = useLoading()
    const previewVideoRef = useRef(null)

    useEffect(() => {
        const videoElement = previewVideoRef.current
        if (!videoElement) return

        let hasTaskBeenRemoved = false

        if (!videoHasLoaded) {
            addLoadingTask(TASK_ID)
        }

        const loadedData = () => {
            if (!videoHasLoaded) {
                videoHasLoaded = true
                if (!hasTaskBeenRemoved) {
                    removeLoadingTask(TASK_ID)
                    hasTaskBeenRemoved = true
                }
            }
        }

        const error = () => {
            if (!videoHasLoaded && !hasTaskBeenRemoved) {
                removeLoadingTask(TASK_ID)
                hasTaskBeenRemoved = true
            }
        }

        videoElement.addEventListener('loadeddata', loadedData)
        videoElement.addEventListener('error', error)

        if (videoElement.readyState >= 2) {
            loadedData()
        } else if (videoElement.networkState === videoElement.NETWORK_EMPTY) {
            videoElement.load()
        }

        return () => {
            videoElement.removeEventListener('loadeddata', loadedData)
            videoElement.removeEventListener('error', error)

            if (!hasTaskBeenRemoved && !videoHasLoaded) {
                removeLoadingTask(TASK_ID)
            }
        }
    }, [addLoadingTask, removeLoadingTask])

    return (
        <section className={styles.video_container}>

            <div className={styles.box_video}  onClick={() => setShowModal(true)}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='512'
                    height='512'
                    viewBox='0 0 48 48'
                >
                    <circle
                        cx='24'
                        cy='24'
                        r='21.5'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1'
                    />
                    <path
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M20.407 35L33.14 24L20.407 13'
                        strokeWidth='1'
                    />
                </svg>

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    ref={previewVideoRef}
                >
                    <source src={preview} type='video/mp4' />
                </video>
            </div>

            <div className={styles.box_text}>
                <h1>Descubra:<br /> Recanto Belle Vue</h1>

                <span>Um mar de experiências, uma promessa de bem-estar, uma homenagem à calma.</span>
                <p>
                    Desperte com o som das ondas e uma vista incrível do oceano. Na Recanto
                    Belle Vue, você encontra conforto, charme e tranquilidade em um ambiente acolhedor.
                    Ideal para relaxar, curtir a natureza e viver momentos inesquecíveis.
                </p>
                <div className={styles.box_detals}>
                    <i>Refúgio</i>
                    <i>Encanto</i>
                    <i>Requinte</i>
                </div>
            </div>

            {showModal && (
                <VideoModal
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    videoSrc={full}
                />
            )}
        </section>
    )
}
