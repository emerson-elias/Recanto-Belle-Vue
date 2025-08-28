import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import './slidesUp.scss'

export default function SlidesUp({ slides }) {
    if (!slides || slides.length === 0) return null

    const isMobile = window.innerWidth < 600

    return (
        <section className='slidesUp_container'>
            <Swiper
                direction='vertical'
                modules={[Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                loop={!isMobile}
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
        </section>
    )
}
