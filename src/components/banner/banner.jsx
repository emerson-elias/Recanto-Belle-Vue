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
        { id: '1', image: '/assets/img/pexels-1.jpg' },
        { id: '2', image: '/assets/img/pexels-2.jpg' },
        { id: '3', image: '/assets/img/pexels-3.jpg' },
        { id: '4', image: '/assets/img/pexels-4.jpg' },
        { id: '5', image: '/assets/img/pexels-5.jpg' },
        { id: '6', image: '/assets/img/pexels-6.jpg' },
    ]

    return (
        <section className='banner_container'>

            <div className='box_banner'>
                <h1>r</h1>
                <span>Recanto Belle Vue</span>
                <p>Requinte e Beleza</p>
            </div>
            
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
