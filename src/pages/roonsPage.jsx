
import Banners from '../components/global/banners/banners'
import Bio from '../components/global/bio/bio'
import Roons from '../components/roons/roons'

const title = 'Reserve seu quarto'
const caption = 'Garanta sua estadia com conforto e praticidade'
const text = 'Escolha o quarto ideal para sua experiência à beira-mar. Pensamos em cada detalhe para oferecer o máximo de conforto, praticidade e tranquilidade durante sua hospedagem. Faça sua reserva agora e viva momentos inesquecíveis em nosso resort.'

const picture = '/assets/img/royale.jpg'

function roonsPage() {
    return (
        <>
            <Banners
                picture={picture}
                letter={'r'}
                title={'Quartos'}
                subTitle={'escola seu conforto'}
            />
            <Bio
                title={title}
                caption={caption}
                text={text}
                link={'#'}
                icon={'fa-regular fa-chess-rook'}
                name={'Reserve agora'}
            />

            <Roons />
        </>
    )
}

export default roonsPage