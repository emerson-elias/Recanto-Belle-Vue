import History from "../components/about/history/history"
import Values from "../components/about/values/values"
import Banners from "../components/global/banners/banners"
import Bio from "../components/global/bio/bio"
import Footer from "../components/global/footer/footer"

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
                title={'Recanto belle vue'}
                caption={'Onde o luxo e o descanço se encontram, permita-se'}
                text={'Bem-vindos(a), um refúgio exclusivo onde o luxo encontra a natureza. Localizado em um cenário paradisíaco, nosso resort oferece uma experiência única de conforto, lazer e bem-estar. Com uma ampla gama de atividades, gastronomia de alta qualidade e um ambiente acolhedor, garantimos que cada momento seja inesquecível. Descubra o equilíbrio perfeito entre tranquilidade e aventura no Recanto Belle Vue'}
                link={'/suites'}
                icon={'fa-regular fa-bookmark'}
                name={' Reserve agora '}
                imgOne={'/assets/img/pexels-8.jpg'}
                imgTwo={'/assets/img/ds-8.jpg'}
            />

            <History />
            <Values />
            <Footer picture={'/assets/img/praia.jpg'} />
        </>
    )
}

export default AboutPage