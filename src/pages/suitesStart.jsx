import { suites } from '../components/suites/data/data'

import Banners from '../components/global/banners/banners'
import Bio from '../components/global/bio/bio'
import Footer from '../components/global/footer/footer'
import Category from '../components/suites/category/category'

function SuitesStart() {
    return (
        <>
            <Banners
                picture={'/assets/img/pexels-7.jpg'}
                letter={'s'}
                title={'Nossas Suítes'}
                subTitle={'Escolha a categoria ideal'}
            />

            <Bio
                title={'Escolha sua categoria'}
                caption={'Suítes pensadas para todos os estilos'}
                text={'Cada suíte oferece uma experiência única para você aproveitar ao máximo.'}
                link={'#'}
                icon={'fa-regular fa-chess-rook'}
                name={'Reserve agora'}
            />

            <Category suites={suites} />
            <Footer picture={'/assets/img/pexels-7.jpg'} />
        </>
    )
}

export default SuitesStart