import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'

import './reviews.scss'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'

export default function App() {

    const cards = [
        {
            id: 1,
            img: '/assets/img/pexels-1.jpg',
            reviews: 'A pousada é simplesmente encantadora! Tudo muito limpo, organizado e o atendimento foi impecável. Voltaremos com certeza!',
            name: 'Mariana Silva',
            star: '✦ ✦ ✦ ✦ ✦',
            city: 'Belo Horizonte',
        },
        {
            id: 2,
            img: '/assets/img/pexels-2.jpg',
            reviews: 'O café da manhã é um show à parte! Tudo fresquinho, feito com muito carinho. A vista do quarto era de tirar o fôlego.',
            name: 'Carlos Menezes',
            star: '✦ ✦ ✦ ✦ ✦',
            city: 'Florianópolis',
        },
        {
            id: 3,
            img: '/assets/img/pexels-3.jpg',
            reviews: 'Ambiente acolhedor, funcionários atenciosos e ótima localização. Me senti em casa desde o primeiro momento.',
            name: 'Aline Rocha',
            star: '✦ ✦ ✦ ✦ ✦',
            city: 'Recife',
        },
        {
            id: 4,
            img: '/assets/img/pexels-4.jpg',
            reviews: 'Foi um final de semana inesquecível. A pousada tem uma energia tranquila, perfeita para quem quer relaxar.',
            name: 'Eduardo Lima',
            star: '✦ ✦ ✦ ✦ ✦',
            city: 'São Paulo',
        },
        {
            id: 5,
            img: '/assets/img/villa-real.jpg',
            reviews: 'Quartos super confortáveis e uma piscina maravilhosa! Fomos em família e todos adoraram.',
            name: 'Renata Oliveira',
            star: '✦ ✦ ✦ ✦ ✦',
            city: 'Curitiba',
        },
        {
            id: 6,
            img: '/assets/img/villa-real.jpg',
            reviews: 'Achei tudo incrível. Desde a recepção até o momento do check-out, tudo foi feito com muito cuidado e atenção.',
            name: 'Guilherme Santos',
            star: '✦ ✦ ✦ ✦ ✦',
            city: 'Salvador',
        },
        {
            id: 7,
            img: '/assets/img/villa-real.jpg',
            reviews: 'A pousada é um verdadeiro refúgio. Silêncio, natureza e uma equipe sempre sorridente. Recomendo demais!',
            name: 'Camila Duarte',
            star: '✦ ✦ ✦ ✦ ✦',
            city: 'Brasília',
        },
        {
            id: 8,
            img: '/assets/img/villa-real.jpg',
            reviews: 'Foi tudo além do esperado. A decoração é linda e cada canto tem um charme especial.',
            name: 'João Pedro Reis',
            star: '✦ ✦ ✦ ✦ ✦',
            city: 'Vitória',
        },
        {
            id: 9,
            img: '/assets/img/villa-real.jpg',
            reviews: 'Sabe aquele lugar que te abraça? Essa pousada é assim. Já estamos planejando a próxima viagem.',
            name: 'Lívia Martins',
            star: '✦ ✦ ✦ ✦ ✦',
            city: 'Porto Alegre',
        },
    ]

    return (
        <section className='reviews_container'>

            <div className='tittle_reviews'>
                <h1>Experiências reais, lembranças inesquecíveis</h1>
                <p>Cada hóspede que passa por aqui leva um pedacinho da nossa pousada no coração. Confira o que eles têm a dizer sobre essa experiência.</p>
            </div>

            <Swiper
                effect={'fade'}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                loop={true}
                modules={[EffectFade, Autoplay]}
                grabCursor={true}
            >
                {cards.map((elements) => (
                    <SwiperSlide key={elements.id}>
                        <div className='logo_cliente'>
                            <img src={elements.img} alt="" />
                        </div>
                        <span>{elements.star}</span>
                        <i>{elements.name} / <de>{elements.city}</de> </i>
                        <p>{elements.reviews}</p>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    )
}