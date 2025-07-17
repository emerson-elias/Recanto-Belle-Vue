import Doubts from '../components/doubts/doubts'
import Banners from '../components/global/banners/banners'
import Bio from '../components/global/bio/bio'

const title = 'Perguntas Frequentes'
const caption = 'Ficou com alguma dúvida? Não se preocupe'
const text = 'Selecionamos as dúvidas mais comuns para te ajudar a planejar sua estadia com tranquilidade. Aqui você encontra respostas sobre horários, serviços, alimentação e muito mais. Se ainda restar alguma pergunta, nossa equipe está pronta para te atender.'

const picture = '/assets/img/faq_banner.jpg'

function DoubtsPage() {
    return (
        <>
            <Banners picture={picture} letter={'d'} title={'tire suas dúvidas'} subTitle={'estamos aqui para ajudar'}/>
            <Bio title={title} caption={caption} text={text} />
            <Doubts />
        </>
    )
}

export default DoubtsPage