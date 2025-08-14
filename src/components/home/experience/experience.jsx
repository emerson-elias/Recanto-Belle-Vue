import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import { experiences } from '../../experience/data/data'

import styles from './experience.module.scss'
import Title from '../../global/title/title'

export default function Roons() {
    const [currentImage, setCurrentImage] = useState(experiences[0].image)
    const [currentDescription, setCurrentDescription] = useState(experiences[0].description)

    const imageRef = useRef(null)
    const descriptionRef = useRef(null)

    const mouseEnter = (newImageSrc, newDescription) => {
        if (newImageSrc === currentImage) return
        setCurrentImage(newImageSrc)
        setCurrentDescription(newDescription)
    }

    const imageLoad = () => {
        gsap.fromTo(
            [imageRef.current, descriptionRef.current],
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power2.out',
                clearProps: 'all'
            }
        )
    }

    useEffect(() => {
        experiences.forEach(item => {
            const img = new Image()
            img.src = item.image
        })
    }, [])

    useEffect(() => {
        if (imageRef.current && descriptionRef.current) {
            gsap.fromTo(
                [imageRef.current, descriptionRef.current],
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                    clearProps: 'all'
                }
            )
        }
    }, [currentImage, currentDescription])

    return (
        <section className={styles.experince_container}>
            <Title
                title={'Experiências infinitas'}
                text={'Presencie a essência de um lugar que jamais você irá esquecer'}
                row={''}
            />

            <div className={styles.box}>
                <div className={styles.boxOne}>
                    <h1>Vivencie: <br /> O Inesplicável</h1>

                    <p>Cada detalhe te convida ao descanso, à contemplação e à conexão com a natureza.</p>

                    <div className={styles.cat_experince}>
                        {experiences.map((experince, index) => (
                            <Link
                                key={index}
                                to={`/experiencias/${experince.id}`}
                                onMouseEnter={() => mouseEnter(experince.image, experince.description)}
                            >
                                {experince.nameOne}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={styles.boxTwo}>
                    <img
                        ref={imageRef}
                        src={currentImage}
                        alt="Quartos"
                        onLoad={imageLoad}
                    />

                    <div ref={descriptionRef} className={styles.description}>
                        <p>{currentDescription}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
