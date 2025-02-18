import React from 'react'
import './banner.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

export default function Banner() {
    const data = [
        { id: '1', image: '/assets/img/slider-1.jpeg' },
        { id: '2', image: '/assets/img/slider-2.png' },
        { id: '3', image: '/assets/img/slider-3.png' },
        { id: '4', image: '/assets/img/slider-4.png' },
        { id: '5', image: '/assets/img/slider-5.jpg' },
    ]

    return (
        <section className='banner_container'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: false }}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='slide_item'>
                            <img
                                src={item.image}
                                alt={`Slide ${item.id} do banner`}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
