import Doubts from '../components/doubts/doubts'
import Banners from '../components/global/banners/banners'
import Bio from '../components/global/bio/bio'
import Footer from '../components/global/footer/footer'

function DoubtsPage() {
    return (
        <>
            <Banners
                picture={'/assets/img/pexels-8.jpg'}
                letter={'d'}
                title={'tire suas dúvidas'}
                subTitle={'estamos aqui para ajudar'}
            />
            
            <Bio
                title={ 'Perguntas Frequentes:'}
                caption={'Ficou com alguma dúvida? Não se preocupe'}
                text={'Selecionamos as dúvidas mais comuns para te ajudar a planejar sua estadia com tranquilidade. Aqui você encontra respostas sobre horários, serviços, alimentação e muito mais. Se ainda restar alguma pergunta, nossa equipe está pronta para te atender'}
                link={'/suites'}
                icon={'fa-regular fa-bookmark'}
                name={' Reserve agora '} 
                imgOne={'/assets/img/piscina.jpg'}
                imgTwo={'/assets/img/praia.jpg'}
            />

            <Doubts />
            <Footer picture={'/assets/img/pexels-8.jpg'} />
        </>
    )
}

export default DoubtsPage