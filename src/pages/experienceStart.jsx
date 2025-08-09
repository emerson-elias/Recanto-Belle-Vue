import { experiences } from '../components/experience/data/data'

import BannerVideo from "../components/global/bannerVideo/bannerVideo"
import Bio from '../components/global/bio/bio'
import Footer from '../components/global/footer/footer'

function ExperienceStart({ }) {

    return (
        <>
            <BannerVideo
                letter={'e'}
                title={'Experiências'}
                subTitle={'Permita-se vivenciá-las'}
                video={'/assets/video/banner-4.mp4'}
            />
            <Bio
                title={'Experiências Inesquecíveis'}
                caption={'Momentos que vão além do descanso'}
                text={'Cada canto do nosso resort foi pensado para despertar sentidos, criar memórias e oferecer experiências únicas. Do nascer ao pôr do sol, você encontra refúgio, aventura, sabores e momentos que marcam a alma. Permita-se viver tudo isso intensamente.'}
                link={'/suites'}
                icon={'fa-regular fa-chess-rook'}
                name={'reserve agora'}
            />

            <Footer picture={'/assets/img/praia.jpg'} />
        </>
    )
}

export default ExperienceStart