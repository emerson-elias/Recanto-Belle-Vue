import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { services } from '../components/services/data/data'

import Footer from "../components/global/footer/footer"
import BannerVideo from '../components/global/bannerVideo/bannerVideo'
import Bio from '../components/global/bio/bio'
import Container from '../components/services/container/container'
import Package from '../components/services/package/package'

function ServicesPage({ }) {

    const { id } = useParams()
    const [activeService, setActiveService] = useState(null)

    useEffect(() => {
        const found = services.find(service => service.id === id)
        setActiveService(found || services[0])
    }, [id])

    if (!activeService) return null

    return (
        <>
            <BannerVideo
                key={id}
                letter={activeService.letter}
                title={activeService.titleBanner}
                subTitle={activeService.subTitleBanner}
                video={activeService.videoOne}
            />

            <Bio
                title={activeService.title}
                caption={activeService.caption}
                text={activeService.textBio}
                link={activeService.link}
                icon={activeService.icon}
                name={activeService.btnName}
            />

            <Container services={activeService} />
            <Package information={activeService} />
            <Footer picture={activeService.footerImage} />
        </>
    )
}

export default ServicesPage