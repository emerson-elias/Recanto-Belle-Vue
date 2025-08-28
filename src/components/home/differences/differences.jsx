import Button from '../../global/button/button'
import Title from '../../global/title/title'
import SlidesUp from '../../global/slidesUp/slidesUp'

import './differences.scss'

const slides = [
    {
        src: '/assets/img/check.jpg',
        description: 'Vista exuberantes das praias em todo resorte'
    },
    {
        src: '/assets/img/pet.jpg',
        description: 'Ambiente pet friendly para toda a família'
    },
    {
        src: '/assets/img/park.jpg',
        description: 'Parque exclusivo para crianças e com áreas de lazer'
    },
    {
        src: '/assets/img/t-2.jpg',
        description: 'Trilhas ecológicas em meio à natureza'
    },
    {
        src: '/assets/img/piscina.jpg',
        description: 'Piscinas para adultos e crianças'
    },
    {
        src: '/assets/img/praia.jpg',
        description: 'Acesso direto à praias públicas e privativa'
    },
    {
        src: '/assets/img/transporte.jpg',
        description: 'transportes exclusivos para aventuras e lazer'
    }
]

function Differences() {
    return (
        <section className='differences_container'>

            <Title
                title={'Diferênciais únicos'}
                text={'Em nosso resort temos o carinho e atenção para deixar tudo o mais inesquecível.'}
                row={' '}
            />

            <div className='box'>

                <div className='boxOne'>
                    <SlidesUp slides={slides} />
                </div>

                <div className='boxTwo'>
                    <h1>Aventure-se:<br /> Permita-se relaxar</h1>
                    <p>O resort oferece mais do que hospedagem: entrega lazer, conforto e experiências completas para sua família e seu pet. Gastronomia variada, atividades para todas as idades e contato direto com a natureza.</p>
                    <Button link={'/suites'} icon={'fa-regular fa-bookmark'} name={' Reserve agora '} />
                </div>

            </div>

        </section>
    )
}

export default Differences
