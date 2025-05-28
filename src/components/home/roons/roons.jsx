import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './roons.module.scss'

import roon1 from '/assets/img/pexels-1.jpg'
import roon2 from '/assets/img/sobre.jpg'
import roon3 from '/assets/img/suites.jpg'
import roon4 from '/assets/img/experiencias.jpg'
import roon5 from '/assets/img/contato.jpg'

const roomCategories = [
    { name: 'Brisa do Mar', image: roon1, description: 'A brisa salgada atravessa as janelas abertas, trazendo consigo o perfume do mar e o calor do sol no início do dia.' },
    { name: 'Sol Nascente', image: roon2, description: 'Um ambiente que captura a magia dos primeiros raios dourados no horizonte, pintando o céu com tons de fogo.' },
    { name: 'Areia Dourada', image: roon3, description: 'Um refúgio onde os pés descalços tocam o chão com a mesma leveza que caminham pela areia quente.' },
    { name: 'Ondas Azul', image: roon4, description: 'cada detalhe remete ao movimento constante das marés, trazendo equilíbrio.' },
    { name: 'Refúgio do Pescador', image: roon5, description: 'Um abrigo onde o tempo parece desacelerar com o cheiro de sal e o aconchego.' },
]

export default function Roons() {
    const [currentImage, setCurrentImage] = useState(roomCategories[0].image)
    const [currentDescription, setCurrentDescription] = useState(roomCategories[0].description)

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
                },{ opacity: 1, 
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

    const handleMouseEnter = (newImageSrc, newDescription) => {
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
            },{ 
                opacity: 1, 
                y: 0, 
                duration: 0.5, 
                ease: 'power2.out' 
            }
        )
    }

    return (
        <section className={styles.roons_container}>
            <div className={styles.box_1}>
                <h1>Confortos</h1>

                <p>Cada detalhe te convida ao descanso, à contemplação e à conexão com a natureza.</p>

                <div className={styles.cat_roons}>
                    {roomCategories.map((room, index) => (
                        <span
                            key={index}
                            onMouseEnter={() => handleMouseEnter(room.image, room.description)}
                        >
                            {room.name}
                        </span>
                    ))}
                </div>

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
                </div>
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