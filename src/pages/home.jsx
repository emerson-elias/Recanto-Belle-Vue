import Carousel from '../components/home/carousel/carousel'
import Bio from '../components/global/bio/bio'
import Video from '../components/home/video/video'
import Roons from '../components/home/roons/roons'
import Experience from '../components/home/experience/experience'
import Services from '../components/home/services/services'
import Reviews from '../components/global/reviews/reviews'
import Summary from '../components/home/summary/summary'
import Differences from '../components/home/differences/differences'
import Footer from '../components/global/footer/footer'
import Others from '../components/home/others/others'

const picture = '/assets/img/pexels-1.jpg'
const title = 'Sejam bem vindos'
const caption = 'Conforto refinado, experiência inesquecível'
const text = 'Envolva-se em uma experiência onde o encanto encontra o aconchego. Cada detalhe foi pensado para que você descanse com tranquilidade, sinta - se em casa e viva momentos únicos em um ambiente acolhedor e inspirador. Aqui, o tempo desacelera e o bem - estar é prioridade.'

function Home() {
    return (
        <>
            <Carousel />

            <Bio
                title={title}
                caption={caption}
                text={text}
                link={'/sobre'}
                icon={'fa-regular fa-gem'}
                name={' visite a essência '}
            />

            <Video />
            <Roons />
            <Services />
            <Experience />

            <Reviews
                name={'O resort'}
                text={'Cada hóspede leva consigo uma história única vivida aqui. Conheça as experiências reais de quem encontrou descanso, aconchego e conexão em nosso refúgio natural.'}
            />
      
            <Differences />
            <Summary />
            <Footer picture={picture} />
        </>
    )
}

export default Home