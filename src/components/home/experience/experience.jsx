import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './experience.module.scss'

const experinceCategories = [
    {
        name: 'Brisa do Mar',
        image: '/assets/img/brisa-do-mar.jpg',
        description: 'A brisa atravessa as janelas trazendo o perfume do mar'
    },
    {
        name: 'Sol Nascente',
        image: '/assets/img/sol-nascente.jpg',
        description: 'A magia dos primeiros raios dourados no horizonte'
    },
    {
        name: 'Areia Dourada',
        image: '/assets/img/areia-dourada.jpg',
        description: 'Pés descalços tocam o chão com a mesma leveza que caminham pela areia'
    },
    {
        name: 'Ondas Crescente',
        image: '/assets/img/ondas-crescente.jpg',
        description: 'Cada detalhe remete ao movimento constante das marés'
    },
    {
        name: 'Refúgio do Pescador',
        image: '/assets/img/refugio-pescador.jpg',
        description: 'Um abrigo onde o tempo parece desacelerar'
    },
]

export default function Roons() {
    const [currentImage, setCurrentImage] = useState(experinceCategories[0].image)
    const [currentDescription, setCurrentDescription] = useState(experinceCategories[0].description)

    const imageRef = useRef(null)
    const descriptionRef = useRef(null)
    const animationTimelineRef = useRef(null)

    useEffect(() => {
        if (imageRef.current && descriptionRef.current) {
            animationTimelineRef.current = gsap.timeline({ paused: true })

            gsap.fromTo([imageRef.current, descriptionRef.current],
                {
                    opacity: 0,
                    y: 20
                }, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out'
            }
            )
        }

        return () => {
            if (animationTimelineRef.current) {
                animationTimelineRef.current.kill()
            }
            gsap.killTweensOf([imageRef.current, descriptionRef.current])
        }
    }, [])

    const mouseEnter = (newImageSrc, newDescription) => {
        if (newImageSrc === currentImage) return

        if (animationTimelineRef.current) {
            animationTimelineRef.current.kill()
            animationTimelineRef.current = null
        }

        animationTimelineRef.current = gsap.timeline()
        animationTimelineRef.current.to([imageRef.current, descriptionRef.current], {
            opacity: 0,
            y: -20,
            duration: 0.1,
            ease: 'power2.in',
            onComplete: () => {
                setCurrentImage(newImageSrc)
                setCurrentDescription(newDescription)
            },
        })

        animationTimelineRef.current.fromTo([imageRef.current, descriptionRef.current],
            {
                opacity: 0,
                y: 20
            }, 
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power2.out'
            }
        )
    }

    return (
        <section className={styles.experince_container}>
            <div className={styles.box_1}>
                <h1>Experiências</h1>

                <p>Cada detalhe te convida ao descanso, à contemplação e à conexão com a natureza.</p>

                <div className={styles.cat_experince}>
                    {experinceCategories.map((experince, index) => (
                        <span
                            key={index}
                            onMouseEnter={() => mouseEnter(experince.image, experince.description)}
                        >
                            {experince.name}
                        </span>
                    ))}
                </div>

                {/*
                <div className={styles.svg}>
                    <svg width="240" height="240" viewBox="0 0 320 320">
                        <defs>
                            <path id="circlePath" d="M 160, 160 m -140, 0 a 140,140 0 1,0 280,0 a 140,140 0 1,0 -280,0" />
                        </defs>
                        <text fill="currentColor">
                            <textPath href="#circlePath" startOffset="0">
                                ㅤRecanto Belle Vue º Recanto Belle Vue º Recanto Belle Vue º  Recanto Belle Vue
                            </textPath>
                        </text>
                    </svg>
                </div> */}
            </div>

            <div className={styles.box_2}>
                <img
                    ref={imageRef}
                    src={currentImage}
                    alt="Quartos"
                />
                <div ref={descriptionRef} className={styles.description}>
                    <p>{currentDescription}</p>
                </div>
            </div>
        </section>
    )
}