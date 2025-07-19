import { useState } from 'react'
import { suites } from '../components/suites/data/data'

import Banners from '../components/global/banners/banners'
import Bio from '../components/global/bio/bio'

import Cards from '../components/suites/cards/cards'
import Suites from '../components/suites/suites'

const picture = '/assets/img/royale.jpg'
const title = 'Reserve seu conforto'
const caption = 'Garanta sua estadia com conforto e praticidade'
const text = 'Escolha o quarto ideal para sua experiência à beira-mar. Pensamos em cada detalhe para oferecer o máximo de conforto, praticidade e tranquilidade durante sua hospedagem. Faça sua reserva agora e viva momentos inesquecíveis em nosso resort.'

function suitesPage() {

    const [activeSuite, setActiveSuite] = useState(suites[0])

    return (
        <>
            <Banners
                picture={picture}
                letter={'r'}
                title={'Suítes'}
                subTitle={'Escolha seu conforto'}
            />
            <Bio
                title={title}
                caption={caption}
                text={text}
                link={'#'}
                icon={'fa-regular fa-chess-rook'}
                name={'Reserve agora'}
            />

            <Suites suite={activeSuite} />
            <Cards suites={suites} onSelect={setActiveSuite} />
        </>
    )
}

export default suitesPage