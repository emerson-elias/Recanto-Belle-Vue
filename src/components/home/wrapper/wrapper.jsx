// components/Wrapper/Wrapper.jsx (ou onde ele estiver)
import { useState, useRef, useEffect, useCallback } from 'react'
import { gsap } from 'gsap'

import styles from './wrapper.module.scss'

import { useLoading } from '../../../context/loadingContext.jsx'

import videoOne from '/assets/video/scree.mp4'
import videoTwo from '/assets/video/screen.mp4'

export default function Wrapper() {
    const videoPlayer1Ref = useRef(null)
    const videoPlayer2Ref = useRef(null)

    const { addLoadingTask, removeLoadingTask } = useLoading()

    const [player1Source, setPlayer1Source] = useState(videoOne)
    const [player2Source, setPlayer2Source] = useState(videoTwo)

    const [isPlayer1Active, setIsPlayer1Active] = useState(true)

    const transitionDuration = 0.6

    const videoOneLoadTaskId = useRef('wrapperVideoOneLoad')
    const videoTwoLoadTaskId = useRef('wrapperVideoTwoLoad')

    const isVideoOneTaskCompleted = useRef(false)
    const isVideoTwoTaskCompleted = useRef(false)

    const handleVideoCanPlayThrough = useCallback((videoSrc) => {
        let taskId
        let isTaskCompletedRef

        if (videoSrc === videoOne) {
            taskId = videoOneLoadTaskId.current
            isTaskCompletedRef = isVideoOneTaskCompleted
        } else if (videoSrc === videoTwo) {
            taskId = videoTwoLoadTaskId.current
            isTaskCompletedRef = isVideoTwoTaskCompleted
        } else {
            return
        }

        if (!isTaskCompletedRef.current) {
            removeLoadingTask(taskId)
            isTaskCompletedRef.current = true
        }
    }, [removeLoadingTask])


    const handleVideoChange = (targetVideoSrc) => {
        const activePlayerRef = isPlayer1Active ? videoPlayer1Ref : videoPlayer2Ref
        const hiddenPlayerRef = isPlayer1Active ? videoPlayer2Ref : videoPlayer1Ref
        const currentVisibleSrc = isPlayer1Active ? player1Source : player2Source

        if (currentVisibleSrc === targetVideoSrc) {
            return
        }

        if (isPlayer1Active) {
            setPlayer2Source(targetVideoSrc)
        } else {
            setPlayer1Source(targetVideoSrc)
        }

        if (hiddenPlayerRef.current) {
            hiddenPlayerRef.current.load()
            hiddenPlayerRef.current.play()
        }

        const tl = gsap.timeline()

        tl.to(activePlayerRef.current, {
            opacity: 0,
            duration: transitionDuration,
            ease: "power2.inOut",
            onComplete: () => {
                if (activePlayerRef.current) {
                    activePlayerRef.current.pause()

                    if (isPlayer1Active) {
                        setPlayer1Source(targetVideoSrc)
                    } else {
                        setPlayer2Source(targetVideoSrc)
                    }
                }
            }
        }, 0)
            .to(hiddenPlayerRef.current, {
                opacity: 1,
                duration: transitionDuration,
                ease: "power2.inOut",
            }, 0)

        tl.then(() => {
            setIsPlayer1Active(!isPlayer1Active)
        })
    }
  
    useEffect(() => {
        addLoadingTask(videoOneLoadTaskId.current)
        addLoadingTask(videoTwoLoadTaskId.current)

        if (videoPlayer1Ref.current) {
            
            gsap.fromTo(
                videoPlayer1Ref.current, { 
                    opacity: 0 
                }, { 
                    opacity: 1, 
                    duration: 1, 
                    ease: "power2.inOut"
                }
            )
        }

        return () => {

            if (!isVideoOneTaskCompleted.current) {
                removeLoadingTask(videoOneLoadTaskId.current)
            }
            if (!isVideoTwoTaskCompleted.current) {
                removeLoadingTask(videoTwoLoadTaskId.current)
            }
        }
    }, [addLoadingTask, removeLoadingTask])

    return (
        <section className={styles.warpper_container}>
            <video
                ref={videoPlayer1Ref}
                autoPlay
                loop
                muted
                playsInline
                className={styles.video_box}
                onCanPlayThrough={() => handleVideoCanPlayThrough(player1Source)}
            >
                <source src={player1Source} type='video/mp4' />
            </video>

            <video
                ref={videoPlayer2Ref}
                autoPlay
                loop
                muted
                playsInline
                className={styles.video_box}
                onCanPlayThrough={() => handleVideoCanPlayThrough(player2Source)}
            >
                <source src={player2Source} type='video/mp4' />
            </video>

            <div
                className={styles.layerOne}
                onMouseEnter={() => handleVideoChange(videoOne)}
            >
                <div></div>
                <div></div>
            </div>

            <div
                className={styles.layerTwo}
                onMouseEnter={() => handleVideoChange(videoTwo)}
            >
                <div></div>
                <div></div>
            </div>
        </section>
    )
}