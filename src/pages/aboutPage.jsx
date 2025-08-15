import History from "../components/about/history/history"
import Banners from "../components/global/banners/banners"
import Bio from "../components/global/bio/bio"
import Footer from "../components/global/footer/footer"

const title = 'Recanto belle vue'
const caption = 'Onde o luxo e o descanço se encontram'
const text = 'Bem-vindos(a), um refúgio exclusivo onde o luxo encontra a natureza. Localizado em um cenário paradisíaco, nosso resort oferece uma experiência única de conforto, lazer e bem-estar. Com uma ampla gama de atividades, gastronomia de alta qualidade e um ambiente acolhedor, garantimos que cada momento seja inesquecível. Descubra o equilíbrio perfeito entre tranquilidade e aventura no Recanto Belle Vue'

function AboutPage() {
    return (
        <>
            <Banners
                letter={'s'}
                title={'Sobre o Resort'}
                subTitle={'Um pouco sobre nós'}
                picture={'/assets/img/praia.jpg'}
            />

            <Bio
                title={title}
                caption={caption}
                text={text}
                link={'/suites'}
                icon={'fa-regular fa-bookmark'}
                name={' Reserve agora '}
            />

            <History />
            <Footer picture={'/assets/img/praia.jpg'} />
        </>
    )
}

export default AboutPage