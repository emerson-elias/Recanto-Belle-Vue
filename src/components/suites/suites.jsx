import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import './suites.scss'

import Button from '../global/button/button'

function Suites({ suite }) {
    if (!suite) return null

    return (
        <section className='suites_container'>

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

                <Button link={''} icon={'fa-regular fa-bookmark'} name={'Reserve agora'}/>
            </div>

        </section>
    )
}

export default Suites