import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import './suites.scss'

import Button from '../global/button/button'
import meters from '/assets/svg/meters.svg'
import people from '/assets/svg/people.svg'
import pet from '/assets/svg/pet.svg'

function Suites({ suite }) {
    if (!suite) return null

    const details = [
        { icon: people, label: "QUANTIDADE DE PESSOAS", value: suite.people },
        { icon: meters, label: "METROS QUADRADOS", value: suite.meters },
        { icon: pet, label: "QUANTIDADE DE PETS", value: suite.pet },
    ]

    return (
        <section className='suites_container'>

            <div className='boxOne'>
                <Swiper
                    direction='vertical'
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        0: {
                            loop: false,
                        },
                        600: {
                            loop: true,
                        },
                    }}
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

                <div className='icons'>
                    {details.map((detail, index) => (
                        <div key={index} className='icon-item'>
                            <img src={detail.icon} alt={detail.label} />
                            <i className='name-icon'>{detail.value}</i>
                        </div>
                    ))}
                </div>

                <Button link={''} icon={'fa-regular fa-bookmark'} name={'Book'} />
            </div>

        </section>
    )
}

export default Suites