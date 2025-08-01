import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { services } from '../components/services/data/data'

import Footer from "../components/global/footer/footer"

function ServicesPage({ }) {

    const { id } = useParams()
    const [activeService, setActiveService] = useState(null)

    useEffect(() => {
        const found = services.find(service => service.id === id)
        setActiveService(found || services[0])
    }, [id])

    if (!activeService) return
    
    return (
        <>
            <Footer />
        </>
    )
}

export default ServicesPage