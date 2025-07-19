import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { suites } from '../components/suites/data/data'

import Banners from '../components/global/banners/banners'
import Bio from '../components/global/bio/bio'
import Cards from '../components/suites/cards/cards'
import Suites from '../components/suites/suites'

function SuitesPage() {
    const { id } = useParams()
    const [activeSuite, setActiveSuite] = useState(null)

    useEffect(() => {
        const found = suites.find(suite => suite.id === id)
        setActiveSuite(found || suites[0])
    }, [id])

    if (!activeSuite) return null

    return (
        <>
            <Banners
                picture={activeSuite.banner}
                letter={activeSuite.letter}
                title={activeSuite.categoria}
                subTitle={activeSuite.bannerSubtitle}
            />
            <Bio
                title={activeSuite.bioTitle}
                caption={activeSuite.bioCaption}
                text={activeSuite.bioText}
                link={'#'}
                icon={'fa-regular fa-chess-rook'}
                name={'Reserve agora'}
            />
            <Suites suite={activeSuite} />
            <Cards suites={suites} onSelect={setActiveSuite} />
        </>
    )
}

export default SuitesPage