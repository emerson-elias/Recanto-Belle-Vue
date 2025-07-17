import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import Button from '../../global/button/button'

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
        src: '/assets/img/trilha.jpg',
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
        src: '/assets/img/sol-nascente.jpg',
        description: 'Aprecie o nascer do sol com conforto'
    }
]

function Differences() {
    return (
        <section className='differences_container'>

            <div className='boxOne'>
                <Swiper
                    direction='vertical'
                    modules={[Autoplay]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={0}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={slide.src} alt={`Slide ${index + 1}`} className='slide_img' />
                            <p className='slide_caption'>{slide.description}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='boxTwo'>
                <h1>Diferenciais:<br /> Permita-se relaxar</h1>
                <p>O resort oferece mais do que hospedagem: entrega lazer, conforto e experiências completas para sua família e seu pet. Gastronomia variada, atividades para todas as idades e contato direto com a natureza.</p>
                <Button link={'#'} icon={'fa-regular fa-bookmark'} name={' Reserve agora '} />
            </div>

        </section>
    )
}

export default Differences
