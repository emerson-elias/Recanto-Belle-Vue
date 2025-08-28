import { experiences } from '../components/experience/data/data'
import { suites } from '../components/suites/data/data'

import Carousel from '../components/home/carousel/carousel'
import Bio from '../components/global/bio/bio'
import Video from '../components/home/video/video'
import Roons from '../components/home/roons/roons'
import Services from '../components/home/services/services'
import Reviews from '../components/global/reviews/reviews'
import Summary from '../components/home/summary/summary'
import Differences from '../components/home/differences/differences'
import Footer from '../components/global/footer/footer'
import Experiences from '../components/home/experiences/experiences'
import Offers from '../components/home/offers/offers'
import Sustainability from '../components/home/sustainability/sustainability'

function Home() {
    return (
        <>
            <Carousel />

            <Bio
                title={'Sua estadia:'}
                caption={'Conforto refinado, experiência inesquecível em belle vue'}
                text={'Envolva-se em uma experiência onde o encanto encontra o aconchego. Cada detalhe foi pensado para que você descanse com tranquilidade, sinta - se em casa e viva momentos únicos em um ambiente acolhedor e inspirador. Aqui, o tempo desacelera e o bem - estar é prioridade.'}
                link={'/sobre'}
                icon={'fa-regular fa-gem'}
                name={' visite a essência '}
                imgOne={'/assets/img/pexels-1.jpg'}
                imgTwo={'/assets/img/pexels-2.jpg'}
            />

            <Video />
            <Roons suites={suites} />
            <Experiences experiences={experiences} />
            <Services />

            <Reviews
                name={'O resort'}
                text={'Cada hóspede leva consigo uma história única vivida aqui. Conheça as experiências reais de quem encontrou descanso, aconchego e conexão em nosso refúgio natural.'}
            />
            
            <Sustainability />
            <Offers />
            <Differences />
            <Summary />
            <Footer picture={'/assets/img/pexels-1.jpg'} />
        </>
    )
}

export default Home