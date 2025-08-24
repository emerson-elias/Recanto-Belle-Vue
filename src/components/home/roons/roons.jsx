import { useRef } from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './roons.scss'

import Button from '../../global/button/button'
import Title from '../../global/title/title'

const cards = [
    {
        id: 'royale',
        image: '/assets/img/royale.jpg',
        categoria: 'Royale'
    },
    {
        id: 'villa-real',
        image: '/assets/img/villa-real.jpg',
        categoria: 'Villa Real'
    },
    {
        id: 'brisa-do-mar',
        image: '/assets/img/brisa.jpg',
        categoria: 'Brisa do Mar'
    },
    {
        id: 'terraço-dourado',
        image: '/assets/img/terraço-dourado.jpg',
        categoria: 'Terraço Dourado'
    },
    {
        id: 'aurora',
        image: '/assets/img/aurora.jpg',
        categoria: 'Aurora'
    },
    {
        id: 'monte-sereno',
        image: '/assets/img/monte-sereno.jpg',
        categoria: 'Monte Sereno'
    },
]

export default function Roons() {
    const swiperRef = useRef(null)

    return (
        <section className='roons_container'>

            <Title
                title={'suítes sofisticadas'}
                text={'Do simples ao sofisticado, temos uma suíte para cada momento'}
                row={''}
            />

            <div className='boxOmega'>
                <div className='infor'>
                    <h1>Escolha: <br/> seu conforto</h1>
                    <p>Nossas suítes atendem a todos os gostos. Escolha o seu nível de conforto e desfrute de um merecido descanso.</p>

                    <Button link={'/suites'} icon={'fa-regular fa-chess-rook'} name={'Visite Suites'} />

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
                                    <Link to={`/suites/${elements.id}`}>
                                        {elements.categoria}
                                    </Link>
                                    <img
                                        src={elements.image}
                                        alt={`Slide ${elements.id} do Card`}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </section>
    )
}
