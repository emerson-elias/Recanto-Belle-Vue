import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { experiences } from '../components/experience/data/data'

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
        </>
    )
}

export default ExperiencePage