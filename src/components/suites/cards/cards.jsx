import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { useNavigate } from 'react-router-dom'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './cards.scss'

function Cards({ suites, onSelect }) {
    const navigate = useNavigate()

    const handleSelect = (suite) => {
        onSelect(suite)
        navigate(`/suites/${suite.id}`)
    }
    
    return (
        <section className='suites_cards'>
            <div className='cards_title'>
                <h1>Outras Suítes</h1>
                <p>Nossas suítes atendem a todos os gostos. Escolha o seu nível de conforto e desfrute de um merecido descanso.</p>
            </div>

            <div className='boxSwiper'>
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
                        <SwiperSlide key={suite.id}>
                            <div className='card' onClick={() => handleSelect(suite)}>
                                <img src={suite.image} alt={suite.title} />
                                <h1>{suite.title}</h1>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Cards