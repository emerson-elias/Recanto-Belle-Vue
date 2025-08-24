
import Contact from '../components/contact/contact'
import Banners from '../components/global/banners/banners'
import Bio from '../components/global/bio/bio'
import Footer from '../components/global/footer/footer'

function contactPage() {
    return (
        <>
            <Banners
                picture={'/assets/img/contato.jpg'}
                letter={'c'}
                title={'contatos'}
                subTitle={'vamos criar experências'}
            />
            
            <Bio
                title={'Gostou?'}
                caption={'Vamos trabalhar juntos e criar experiências'}
                text={'Este é um projeto pessoal criado para fins de exibição. A ideia surgiu a partir de uma demanda real de uma empresa que me procurou para desenvolver um site para uma pousada. Cada detalhe desse projeto foi pensado com atenção e carinho para transmitir a experiência autêntica de estar em um resort.'}
                link={'#'}
                icon={'fa-brands fa-connectdevelop'}
                name={'contate-me'}
                imgOne={'/assets/img/s-4.jpg'}
                imgTwo={'/assets/img/s-2.jpg'}
            />

            <Contact />
            <Footer picture={'/assets/img/contato.jpg'}/>
        </>
    )
}

export default contactPage