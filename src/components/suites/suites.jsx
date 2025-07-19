import { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import gsap from 'gsap'

import './suites.scss'

function Suites({ suite }) {
    if (!suite) return null

    const containerRef = useRef()

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                containerRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [suite])

    return (
        <section className='suites_container' ref={containerRef}>

            <div className='boxOne'>
                <Swiper
                    direction='vertical'
                    modules={[Autoplay]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={0}
                >
                    {suite.gallery.map((img, index) => (

                        <SwiperSlide key={index}>
                            <img className='slide_img'
                                key={index}
                                src={img}
                                alt={`${suite.title} 
                            ${index + 1}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="boxTwo">
                <h1>{suite.title}</h1>
                <span>{suite.subTitle}</span>
                <p>{suite.description}</p>

                <ul className="icons">
                    {suite.icons.map((icon) => (
                        <li key={icon.name} className="icon-item">
                            <img src={icon.src} alt={icon.name} className="icon-img" loading="lazy" />
                            <i className="icon-name">{icon.name}</i>
                        </li>
                    ))}
                </ul>

                <strong>{suite.price}</strong>
            </div>

        </section>
    )
}

export default Suites