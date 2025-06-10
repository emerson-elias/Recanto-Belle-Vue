import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import './reviews.scss'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function App() {

    const cards = [
        {
            id: 1,
            img: '/assets/img/profile-1.jpg',
            reviews: 'A pousada é simplesmente encantadora! Tudo muito limpo, organizado e o atendimento foi impecável. Voltaremos com certeza!',
            name: 'Mariana Silva',
            star: '☆ ☆ ☆ ☆ ⯫',
            city: 'Belo Horizonte',
            word: 'Bem-cuidada',
        },
        {
            id: 2,
            img: '/assets/img/profile-2.jpg',
            reviews: 'O café da manhã é um show à parte! Tudo fresquinho, feito com muito carinho. A vista do quarto era de tirar o fôlego.',
            name: 'Carlos Menezes',
            star: '☆ ☆ ☆ ☆ ☆',
            city: 'Florianópolis',
            word: 'Deliciosa estadia',
        },
        {
            id: 3,
            img: '/assets/img/profile-3.jpg',
            reviews: 'Ambiente acolhedor, funcionários atenciosos e ótima localização. Me senti em casa desde o primeiro momento.',
            name: 'Aline Rocha',
            star: '☆ ☆ ☆ ☆ ⯫',
            city: 'Recife',
            word: 'Aconchegante',
        },
        {
            id: 4,
            img: '/assets/img/profile-4.jpg',
            reviews: 'Foi um final de semana inesquecível. A pousada tem uma energia tranquila, perfeita para quem quer relaxar.',
            name: 'Eduardo Lima',
            star: '☆ ☆ ☆ ☆ ☆',
            city: 'São Paulo',
            word: 'Relaxante',
        },
        {
            id: 5,
            img: '/assets/img/profile-5.jpg',
            reviews: 'Quartos super confortáveis e uma piscina maravilhosa! Fomos em família e todos adoraram.',
            name: 'Renata Oliveira',
            star: '☆ ☆ ☆ ☆ ⯫',
            city: 'Curitiba',
            word: 'Conforto total',
        },
        {
            id: 6,
            img: '/assets/img/profile-6.jpg',
            reviews: 'Achei tudo incrível. Desde a recepção até o momento do check-out, tudo foi feito com muito cuidado e atenção.',
            name: 'Guilherme Santos',
            star: '☆ ☆ ☆ ☆ ☆',
            city: 'Salvador',
            word: 'Atendimento top',
        },
        {
            id: 7,
            img: '/assets/img/profile-7.jpg',
            reviews: 'A pousada é um verdadeiro refúgio. Silêncio, natureza e uma equipe sempre sorridente. Recomendo demais!',
            name: 'Camila Duarte',
            star: '☆ ☆ ☆ ☆ ☆',
            city: 'Brasília',
            word: 'Refúgio perfeito',
        },
        {
            id: 8,
            img: '/assets/img/profile-8.jpg',
            reviews: 'Foi tudo além do esperado. A decoração é linda e cada canto tem um charme especial.',
            name: 'João Pedro Reis',
            star: '☆ ☆ ☆ ☆ ⯫',
            city: 'Vitória',
            word: 'Charmosa',
        },
        {
            id: 9,
            img: '/assets/img/profile-9.jpg',
            reviews: 'Sabe aquele lugar que te abraça? Essa pousada é assim. Já estamos planejando a próxima viagem.',
            name: 'Lívia Martins',
            star: '☆ ☆ ☆ ☆ ⯫',
            city: 'Porto Alegre',
            word: 'Acolhedora',
        },
    ]

    return (
        <section className='reviews_container'>
            <Swiper
                slidesPerView={2}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    700: {
                        slidesPerView: 2,
                    }
                }}
                centeredSlides={false}
                spaceBetween={50}
                loop={true}
                autoplay={{
                    delay: 500000,
                    disableOnInteraction: false
                }}
                modules={[Navigation, Autoplay]}
                className='swiper'
            >
                {cards.map((elements) => (
                    <SwiperSlide key={elements.id}>
                        <figure className="cards_container">
                            
                            <div className='banner_reviews'>
                                <img src={elements.img} alt="" />
                            </div>

                            <figcaption>
                                <div className="profile">
                                    <img src={elements.img} />
                                </div>

                                <div>{elements.name} - <i>{elements.city}</i> </div>
                                <span>{elements.star}</span>
                                <p>{elements.reviews}</p>

                                <div className='reviews'>{elements.word}</div>
                            </figcaption>

                        </figure>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='tittle_reviews'>
                <div>
                    <h1>Depoimentos</h1>
                    <p>Cada hóspede que passa por aqui leva um pedacinho da nossa pousada no coração. Confira o que eles têm a dizer sobre essa experiência.</p>
                </div>
            </div>
        </section>
    )
}