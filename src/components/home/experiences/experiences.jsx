import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import './experiences.scss'

import Title from '../../global/title/title'

export default function Experiences({ experiences }) {
    if (!experiences || experiences.length === 0) return null

    const carrousel = experiences.map(exp => ({
        id: exp.id,
        picture: exp.image,
        imgOne: exp.imgOne,
        imgTwo: exp.imgTwo,
        title: exp.title,
        description: exp.description
    }))

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>'
        }
    }

    return (
        <section className='experiences_container'>

            <Title
                title={'Experiências únicas'}
                text={'Presencie a essência de um lugar que jamais você irá esquecer'}
                row={'row'}
            />

            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: false }}
                slidesPerView={1}
                pagination={pagination}
                navigation
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                loop
            >
                {carrousel.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='slide_item'>
                            <div className='boxOne'>
                                <img src={item.picture} alt={`Slide ${item.id} do banner`} />
                            </div>

                            <div className='title'>
                                <Link to={`/experiencias/${item.id}`}>{item.title}</Link>
                            </div>

                            <div className='boxTwo'>
                                <div className='colunmOne'>
                                    <img src={item.imgOne} alt="BANNER" />
                                </div>

                                <div className='colunmTwo'>
                                    <div className='colunmText'>
                                        <p>{item.description}</p>
                                        <Link to={`/experiencias/${item.id}`}>Visite a Essência</Link>
                                    </div>

                                    <div className='colunmImg'>
                                        <img src={item.imgTwo} alt='BANNER' />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}