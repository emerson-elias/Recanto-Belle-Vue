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
        { id: '1', image: '/assets/img/slader-1.jpeg' },
        { id: '2', image: '/assets/img/slader-2.png' },
        { id: '3', image: '/assets/img/slader-3.png' },
        { id: '4', image: '/assets/img/slader-4.png' },
        { id: '5', image: '/assets/img/slader-5.jpg' },
    ]

    return (
        <section className='banner_container'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{
                    crossFade: true,
                }}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>

                        <div >
                            <img
                                src={item.image}
                                alt={`Slider ${item.id}`}
                            />
                        </div>

                        <div >
                            <h1>Referência na Baixada Maranhense</h1>
                            <p>Viva a experiência de uma estadia com conforto, qualidade e excelência em cada detalhe</p>

                            <div>
                                <span>Saiba mais</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
