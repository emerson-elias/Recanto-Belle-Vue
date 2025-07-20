
import Contact from '../components/contact/contact'
import Banners from '../components/global/banners/banners'
import Bio from '../components/global/bio/bio'
import Footer from '../components/global/footer/footer'

const title = 'Gostou?'
const caption = 'Vamos trabalhar juntos e criar experiências'
const text = 'Este é um projeto pessoal criado para fins de exibição. A ideia surgiu a partir de uma demanda real de uma empresa que me procurou para desenvolver um site para uma pousada. Cada detalhe desse projeto foi pensado com atenção e carinho para transmitir a experiência autêntica de estar em um resort.'

const picture = '/assets/img/pexels-6.jpg'

function contactPage() {
    return (
        <>
            <Banners
                picture={picture}
                letter={'c'}
                title={'contatos'}
                subTitle={'vamos criar experências'}
            />
            <Bio
                title={title}
                caption={caption}
                text={text}
                link={'#'}
                icon={'fa-brands fa-connectdevelop'}
                name={'contate-me'}
            />

            <Contact />
            <Footer picture={picture}/>
        </>
    )
}

export default contactPage