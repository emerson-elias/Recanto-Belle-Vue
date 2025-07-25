import './carousel.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import Logo from '../../global/logo/logo'

const carrousel = [
    {
        id: '1',
        image: '/assets/img/pexels-1.jpg'
    },
    {
        id: '2',
        image: '/assets/img/pexels-2.jpg'
    },
    {
        id: '3',
        image: '/assets/img/pexels-3.jpg'
    },
    {
        id: '4',
        image: '/assets/img/pexels-4.jpg'
    },
    {
        id: '5',
        image: '/assets/img/pexels-5.jpg'
    },
    {
        id: '6',
        image: '/assets/img/pexels-6.jpg'
    },
]

function Carousel() {

    return (
        <section className='banner_container'>
            <Logo
                letter={'r'}
                title={'Recanto Belle Vue'}
                subTitle={'Requinte e Beleza'}
            />

            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: false }}
                slidesPerView={1}
                pagination={{ type: 'progressbar' }}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
            >
                {carrousel.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='slide_item'>
                            <img
                                src={item.image} loading="lazy"
                                alt={`Slide ${item.id} do banner`}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Carousel