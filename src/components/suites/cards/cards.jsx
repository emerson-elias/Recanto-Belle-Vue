import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { useNavigate } from 'react-router-dom'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './cards.scss'

import Title from '../../global/title/title'

function Cards({ suites, onSelect }) {
    const navigate = useNavigate()

    const select = (suite) => {
        onSelect(suite)
        navigate(`/suites/${suite.id}`)
    }

    return (
        <section className='suites_cards'>

            <Title
                title={'Outras Acomodações'}
                text={'Disponibilizamos outras opções para seu requinte e bem estar'}
            />

            <div className='row'>
                <div className='boxOne'>
                    <h1>Para todos:<br />outros requintes</h1>
                    <p>Nossas suítes combinam conforto e sofisticação para todos os gostos. Escolha a sua e desfrute de um merecido descanso.</p>
                </div>

                <div className='boxTwo'>
                    <Swiper
                        slidesPerView={2}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            700: { slidesPerView: 2 }
                        }}
                        centeredSlides={false}
                        spaceBetween={50}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        modules={[Navigation, Autoplay]}
                    >
                        {suites.map((suite) => (
                            <SwiperSlide key={suite.id} onClick={() => select(suite)}>
                                <div className='card' >
                                    <h1>{suite.categoria}</h1>
                                    <img src={suite.banner} alt={suite.title} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default Cards