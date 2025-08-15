import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { suites } from '../components/suites/data/data'

import Banners from '../components/global/banners/banners'
import Bio from '../components/global/bio/bio'
import Cards from '../components/suites/cards/cards'
import Suites from '../components/suites/container/suites'
import Gallery from '../components/suites/gallery/gallery'
import Footer from '../components/global/footer/footer'
import Extras from '../components/suites/extras/extras'
import Description from '../components/suites/description/description'
import Icons from '../components/suites/bar/icons'
import Reviews from '../components/global/reviews/reviews'
import CalendarSuites from '../components/suites/calendar/calendar'

function SuitesPage() {
    const { id } = useParams()
    const [activeSuite, setActiveSuite] = useState(null)

    useEffect(() => {
        const found = suites.find(suite => suite.id === id)
        setActiveSuite(found || suites[0])
    }, [id])

    if (!activeSuite) return

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
            <Description suite={activeSuite} />
            <Icons suite={activeSuite} />
            <CalendarSuites suites={activeSuite}/>
            <Gallery suite={activeSuite} />
            <Extras suites={activeSuite} />

            <Reviews
                name={activeSuite.categoria}
                text={activeSuite.description}
            />

            <Cards suites={suites} onSelect={setActiveSuite} />
            <Footer picture={activeSuite.banner} />
        </>
    )
}

export default SuitesPage