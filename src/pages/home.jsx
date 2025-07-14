import Banner from '../components/home/banner/banner'
import Bio from '../components/global/bio/bio'
import Video from '../components/home/video/video'
import Roons from '../components/home/roons/roons'
import Experience from '../components/home/experience/experience'
import Services from '../components/home/services/services'
import Reviews from '../components/home/reviews/reviews'
import Others from '../components/home/others/others'
import FAQ from '../components/global/faq/faq'

const title = 'Sejam bem vindos'
const caption = 'Conforto refinado, experiência inesquecível'
const text = 'Envolva-se em uma experiência onde o encanto encontra o aconchego. Cada detalhe foi pensado para que você descanse com tranquilidade, sinta - se em casa e viva momentos únicos em um ambiente acolhedor e inspirador. Aqui, o tempo desacelera e o bem - estar é prioridade.'

import picture from '/assets/img/villa-real.jpg'

const textFaq = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ex animi provident eos harum veniam rerum itaque eaque maiores velit dicta enim molestias, quidem temporibus eveniet quisquam aut fuga nesciunt?'
const titleFaq = 'Dúvidas? tire conosco'
const subTitle = 'agora voce pode tirar suas dúvidas'

function Home() {
    return (
        <>
            <Banner />
            <Bio title={title} caption={caption} text={text}/>
            <Video />
            <Roons />
            <Services />
            <Experience />
            <Reviews />
            <Others />
            <FAQ picture={picture} text={textFaq} title={titleFaq} subTitle={subTitle}/>
        </>
    )
}

export default Home