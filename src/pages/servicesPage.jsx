import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { services } from '../components/services/data/data'

import Footer from "../components/global/footer/footer"
import BannerVideo from '../components/global/bannerVideo/bannerVideo'

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
                video={activeService.videoTwo}
            />
            
            <Footer picture={activeService.image}/>
        </>
    )
}

export default ServicesPage