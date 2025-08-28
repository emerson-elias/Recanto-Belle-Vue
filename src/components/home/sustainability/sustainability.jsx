import Button from '../../global/button/button'
import SlidesUp from '../../global/slidesUp/slidesUp'
import Title from '../../global/title/title'

import './sustainability.scss'

const slides = [
    {
        src: '/assets/img/t-2.jpg',
        description: 'Paisagens preservadas com compromisso ambiental'
    },
    {
        src: '/assets/img/t-7.jpg',
        description: 'Ambiente pet friendly com respeito à natureza'
    },
    {
        src: '/assets/img/t-8.jpg',
        description: 'Áreas de lazer sustentáveis para crianças'
    },
    {
        src: '/assets/img/t-9.jpg',
        description: 'Trilhas ecológicas que protegem o ecossistema'
    },
    {
        src: '/assets/img/t-10.jpg',
        description: 'Piscinas com uso eficiente de recursos naturais'
    },
    {
        src: '/assets/img/t-11.jpg',
        description: 'Acesso consciente às praias e áreas nativas'
    },
    {
        src: '/assets/img/t-12.jpg',
        description: 'Transporte interno com baixa emissão de carbono'
    }
]

function Sustainability() {
    return (
        <section className='sustainability_container'>

            <Title
                title={'Sustentabilidade é prioridade'}
                text={'Em nosso resort temos o dever de preservar o meio ambiente, fauna e flora'}
                row={'row'}
            />

            <div className='box'>

                <div className='boxOne'>
                    <SlidesUp slides={slides} />
                </div>

                <div className='boxTwo'>
                    <h1>Relaxe com propósito:<br /> Viva a natureza de forma responsável</h1>
                    <p>Adotamos práticas sustentáveis que preservam o meio ambiente e valorizam a comunidade local.
                        Hospede-se em suítes integradas à paisagem, saboreie uma gastronomia que prioriza ingredientes regionais e descubra experiências que respeitam a natureza</p>

                    <Button link={'/suites'} icon={'fa-regular fa-bookmark'} name={' Reserve agora '} />
                </div>

            </div>

        </section>
    )
}

export default Sustainability
