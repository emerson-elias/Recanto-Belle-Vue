import { useRef } from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './roons.scss'

import Button from '../../global/button/button'

const cards = [
    {
        id: '1',
        image: '/assets/img/royale.jpg',
        categoria: 'Royale'
    },
    {
        id: '2',
        image: '/assets/img/villa-real.jpg',
        categoria: 'Villa Real'
    },
    {
        id: '3',
        image: '/assets/img/brisa.jpg',
        categoria: 'Brisa do Mar'
    },
    {
        id: '4',
        image: '/assets/img/terraço-dourado.jpg',
        categoria: 'Terraço Dourado'
    },
    {
        id: '5',
        image: '/assets/img/aurora.jpg',
        categoria: 'Aurora'
    },
    {
        id: '6',
        image: '/assets/img/monte-sereno.jpg',
        categoria: 'Monte Sereno'
    },
]

export default function Roons() {
    const swiperRef = useRef(null)

    return (
        <section className='roons_container'>
            <div className='infor'>
                <h1>Escolha seu conforto</h1>
                <p>Nossas suítes atendem a todos os gostos. Escolha o seu nível de conforto e desfrute de um merecido descanso.</p>
                
                <Button link={'/suites'} icon={'fa-regular fa-chess-rook'} name={'Visite a essência'}/>

                <div className="controls_swiper">
                    <button onClick={() => swiperRef.current?.slidePrev()}>

                        <svg xmlns="http://www.w3.org/2000/svg"
                            width='100'
                            height='100'
                            viewBox='0 0 48 48'
                        >
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m22 6l8 10l-8 10m8-10H2" />
                        </svg>

                    </button>

                    <button onClick={() => swiperRef.current?.slideNext()}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width='100'
                            height='100'
                            viewBox='0 0 48 48'
                        >
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m22 6l8 10l-8 10m8-10H2" />
                        </svg>
                    </button>
                </div>

            </div>

            <div className='swiper_container'>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slidesPerView={2}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        700: {
                            slidesPerView: 2,
                        }
                    }}
                    centeredSlides={false}
                    spaceBetween={50}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    modules={[Navigation, Autoplay]}
                    className='swiper'
                >
                    {cards.map((elements) => (
                        <SwiperSlide key={elements.id}>
                            <div className='card_box'>
                                <Link to={'/suites'}>{elements.categoria}</Link>
                                <img
                                    src={elements.image}
                                    alt={`Slide ${elements.id} do Card`}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
