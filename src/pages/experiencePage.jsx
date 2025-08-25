import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { experiences } from '../components/experience/data/data'

import Footer from '../components/global/footer/footer'
import BannerVideo from '../components/global/bannerVideo/bannerVideo'
import Bio from '../components/global/bio/bio'
import GalleryExp from '../components/experience/gallery/galleryExp'

function ExperiencePage({ }) {

    const { id } = useParams()
    const [activeExperience, setActiveExperience] = useState(null)

    useEffect(() => {
        const found = experiences.find(experience => experience.id === id)
        setActiveExperience(found || experiences[0])
    }, [id])

    if (!activeExperience) return null

    return (
        <>
            <BannerVideo
                letter={activeExperience.letter}
                title={activeExperience.bannerTitle}
                subTitle={activeExperience.bannerSubTitle}
                video={activeExperience.bannerVideo}
            />

            <Bio
                title={activeExperience.title}
                caption={activeExperience.caption}
                text={activeExperience.textBio}
                link={''}
                icon={'fa-regular fa-bookmark'}
                name={'Reserve agora'}
                imgOne={activeExperience.imgOne}
                imgTwo={activeExperience.imgTwo}
            />
            
            <GalleryExp gallery={activeExperience} />
            <Footer picture={activeExperience.imgOne} />
        </>
    )
}

export default ExperiencePage