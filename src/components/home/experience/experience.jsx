import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

import styles from './experience.module.scss'
import Title from '../../global/title/title'

const experinceCategories = [
    {
        name: 'Vida Marinha',
        image: '/assets/img/m-1.jpg',
        description: 'Mergulhe no encanto das águas e descubra a riqueza da vida oceânica',
        link: '/vida-marinha',
    },
    {
        name: 'Sol Nascente',
        image: '/assets/img/s-1.jpg',
        description: 'Deixe-se envolver pela energia suave dos primeiros raios do dia',
        link: '/sol-nascente',
    },
    {
        name: 'Trilha Ecológica',
        image: '/assets/img/t-1.jpg',
        description: 'Caminhe entre aromas, sons e paisagens que revelam a alma da natureza',
        link: '/trilha-ecologica',
    },
    {
        name: 'Caminho das Ondas',
        image: '/assets/img/sr-1.jpg',
        description: 'Siga o compasso do mar e sinta a brisa guiando cada passo',
        link: '/caminho-das-ondas',
    },
    {
        name: 'Refúgio do Pescador',
        image: '/assets/img/ds-1.jpg',
        description: 'Encontre paz no simples, onde histórias e mar se encontram',
        link: '/refugio-do-pescador',
    }
]

export default function Roons() {
    const [currentImage, setCurrentImage] = useState(experinceCategories[0].image)
    const [currentDescription, setCurrentDescription] = useState(experinceCategories[0].description)

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
        experinceCategories.forEach(item => {
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
                        {experinceCategories.map((experince, index) => (
                            <Link
                                key={index}
                                to={experince.link}
                                onMouseEnter={() => mouseEnter(experince.image, experince.description)}
                            >
                                {experince.name}
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
