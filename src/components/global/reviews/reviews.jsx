import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import './reviews.scss'

import Title from '../title/title'

const feedbacks = [

    {
        id: '1',
        people: 'Marina Souza',
        review: 'Nunca imaginei encontrar um lugar que unisse tanta beleza natural com um serviço tão impecável. Cada detalhe da estadia foi pensado com carinho.',
        extra: 'A limpeza, o conforto e o cuidado com o meio ambiente tornam essa pousada única. Um verdadeiro refúgio para a alma.',
        date: 'Junho 2025 / Belo Horizonte - MG',
        image: '/assets/img/people-1.jpg'
    },
    {
        id: '2',
        people: 'Júlia Fernandes',
        review: 'A experiência aqui foi simplesmente inesquecível. O local é encantador, silencioso, com uma atmosfera que convida ao relaxamento.',
        extra: 'Perfeito para quem quer se desconectar do mundo e se reconectar com o que realmente importa.',
        date: 'Abril 2025 / Recife - PE',
        image: '/assets/img/people-2.jpg'
    },
    {
        id: '3',
        people: 'Carlos Andrade',
        review: 'Viemos com as crianças e foi tudo perfeito. O espaço ao ar livre, o contato com a natureza e o acolhimento da equipe superaram nossas expectativas.',
        extra: 'Dá pra sentir o amor e o empenho em cada cantinho. Com certeza voltaremos!',
        date: 'Maio 2025 / Curitiba - PR',
        image: '/assets/img/people-3.jpg'
    },
    {
        id: '4',
        people: 'Ana Beatriz',
        review: 'Simplesmente encantador! O café da manhã é farto e delicioso, servido com uma vista de tirar o fôlego. Um verdadeiro paraíso escondido.',
        extra: 'Foi a melhor escolha que fiz para um fim de semana especial. Recomendo de olhos fechados.',
        date: 'Fevereiro 2025 / Rio de Janeiro - RJ',
        image: '/assets/img/people-4.jpg'
    },
    {
        id: '5',
        people: 'Bruna Lima',
        review: 'Foi tudo perfeito! Desde a recepção até o momento do check-out, tudo fluiu com leveza. A energia do lugar é maravilhosa.',
        extra: 'A decoração charmosa e o cuidado com o bem-estar dos hóspedes me conquistaram. Uma experiência para guardar no coração.',
        date: 'Dezembro 2024 / Campinas - SP',
        image: '/assets/img/people-5.jpg'
    },
    {
        id: '6',
        people: 'Fernanda Ribeiro',
        review: 'Já me hospedei em muitos lugares, mas nenhum foi tão acolhedor como aqui. O cuidado com cada hóspede é algo raro de se ver hoje em dia.',
        extra: 'Senti uma verdadeira conexão com a natureza, com conforto e qualidade. Parabéns a toda a equipe!',
        date: 'Março 2025 / Porto Alegre - RS',
        image: '/assets/img/people-6.jpg'
    },
    {
        id: '7',
        people: 'Lucas Martins',
        review: 'Me senti abraçado pelo lugar. A tranquilidade, o som dos pássaros, o cheiro da mata… tudo contribuiu para uma estadia mágica.',
        extra: 'Não é só uma hospedagem, é uma vivência transformadora. Mal posso esperar para voltar.',
        date: 'Janeiro 2025 / Salvador - BA',
        image: '/assets/img/people-7.jpg'
    },
    {
        id: '8',
        people: 'Pedro Henrique',
        review: 'Escolhi essa pousada para comemorar meu aniversário e foi, sem dúvida, a melhor decisão. Fui surpreendido em todos os sentidos.',
        extra: 'O ambiente é inspirador, a equipe é extremamente atenciosa e o clima é de pura harmonia. Uma joia rara.',
        date: 'Novembro 2024 / Florianópolis - SC',
        image: '/assets/img/people-8.jpg'
    },
]

function Reviews({ name, text}) {
    const swiperRef = useRef(null)

    return (
        <section className='reviews_container'>

            <Title
                title={'Depoimentos que inspiram'}
                text={'Vivências autênticas que marcaram nossos hóspedes – descubra experiências'}
                row={'row'}
            />

            <div className='box'>
                <section className='boxOne'>

                    <h1>O que dizem sobre<br/>{name}</h1>
                    <p>{text}</p>

                    <div className="controls_swiper">
                        <button onClick={() => swiperRef.current?.slidePrev()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width='100' height='100' viewBox='0 0 48 48'>
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m22 6l8 10l-8 10m8-10H2" />
                            </svg>
                        </button>

                        <button onClick={() => swiperRef.current?.slideNext()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width='100' height='100' viewBox='0 0 48 48'>
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m22 6l8 10l-8 10m8-10H2" />
                            </svg>
                        </button>
                    </div>
                </section>

                <section className='boxTwo'>
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        loop={true}
                        slidesPerView={1}
                        spaceBetween={10}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {feedbacks.map(({ id, people, review, extra, date, image }) => (
                            <SwiperSlide key={id}>
                                <img src={image} alt="IMAGEM DOS HOSPEDES" className='slide_img' />

                                <div className='details'>
                                    <h2>{people}</h2>
                                    <p>{review}</p>
                                    <p>{extra}</p>
                                    <h3>{date}</h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </div>

        </section>
    )
}

export default Reviews