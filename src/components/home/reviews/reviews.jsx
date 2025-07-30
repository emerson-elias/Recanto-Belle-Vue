import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation, Autoplay } from 'swiper/modules'

import './reviews.scss'
import Title from '../../global/title/title'

const feedbacks = [
    {
        id: '1',
        name: 'Emerson Elias',
        review: 'Desde o momento em que chegamos, fomos recebidos com um sorriso no rosto e uma atenção que fez toda a diferença. O ambiente transmite paz e aconchego, ideal para recarregar as energias.',
        extra: 'A estrutura é excelente, os quartos são confortáveis e a proposta sustentável é realmente colocada em prática. Me senti em casa, só que ainda melhor.',
        date: 'Julho 2025 / São Luís - MA',
    },
    {
        id: '2',
        name: 'Marina Souza',
        review: 'Nunca imaginei encontrar um lugar que unisse tanta beleza natural com um serviço tão impecável. Cada detalhe da estadia foi pensado com carinho.',
        extra: 'A limpeza, o conforto e o cuidado com o meio ambiente tornam essa pousada única. Um verdadeiro refúgio para a alma.',
        date: 'Junho 2025 / Belo Horizonte - MG',
    },
    {

        id: '3',
        name: 'Carlos Andrade',
        review: 'Viemos com as crianças e foi tudo perfeito. O espaço ao ar livre, o contato com a natureza e o acolhimento da equipe superaram nossas expectativas.',
        extra: 'Dá pra sentir o amor e o empenho em cada cantinho. Com certeza voltaremos!',
        date: 'Maio 2025 / Curitiba - PR',
    },
    {
        id: '4',
        name: 'Júlia Fernandes',
        review: 'A experiência aqui foi simplesmente inesquecível. O local é encantador, silencioso, com uma atmosfera que convida ao relaxamento.',
        extra: 'Perfeito para quem quer se desconectar do mundo e se reconectar com o que realmente importa.',
        date: 'Abril 2025 / Recife - PE',
    },
    {
        id: '5',
        name: 'Thiago Ribeiro',
        review: 'Já me hospedei em muitos lugares, mas nenhum foi tão acolhedor como aqui. O cuidado com cada hóspede é algo raro de se ver hoje em dia.',
        extra: 'Senti uma verdadeira conexão com a natureza, com conforto e qualidade. Parabéns a toda a equipe!',
        date: 'Março 2025 / Porto Alegre - RS',
    },
    {
        id: '6',
        name: 'Ana Beatriz',
        review: 'Simplesmente encantador! O café da manhã é farto e delicioso, servido com uma vista de tirar o fôlego. Um verdadeiro paraíso escondido.',
        extra: 'Foi a melhor escolha que fiz para um fim de semana especial. Recomendo de olhos fechados.',
        date: 'Fevereiro 2025 / Rio de Janeiro - RJ',
    },
    {
        id: '7',
        name: 'Lucas Martins',
        review: 'Me senti abraçado pelo lugar. A tranquilidade, o som dos pássaros, o cheiro da mata… tudo contribuiu para uma estadia mágica.',
        extra: 'Não é só uma hospedagem, é uma vivência transformadora. Mal posso esperar para voltar.',
        date: 'Janeiro 2025 / Salvador - BA',
    },
    {
        id: '8',
        name: 'Bruna Lima',
        review: 'Foi tudo perfeito! Desde a recepção até o momento do check-out, tudo fluiu com leveza. A energia do lugar é maravilhosa.',
        extra: 'A decoração charmosa e o cuidado com o bem-estar dos hóspedes me conquistaram. Uma experiência para guardar no coração.',
        date: 'Dezembro 2024 / Campinas - SP',
    },
    {
        id: '9',
        name: 'Pedro Henrique',
        review: 'Escolhi essa pousada para comemorar meu aniversário e foi, sem dúvida, a melhor decisão. Fui surpreendido em todos os sentidos.',
        extra: 'O ambiente é inspirador, a equipe é extremamente atenciosa e o clima é de pura harmonia. Uma joia rara.',
        date: 'Novembro 2024 / Florianópolis - SC',
    },
]

function Reviews() {
    const swiperRef = useRef(null)

    return (
        <section className='reviews_container'>

            <Title
                title={'O que dizem sobre nós'}
                text={'Vivências autênticas que marcaram nossos hóspedes – descubra experiências'}
                row={'row'}
            />

            <div className='box'>
                <section className='boxOne'>
                    <h1>Quem descançou</h1>

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
                        navigation={true}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        modules={[Navigation, Autoplay]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {feedbacks.map(({ id, name, review, extra, date }, index) => (
                            <SwiperSlide key={index}>
                                <span>{id}</span>
                                <h2>{name}</h2>
                                <p>{review}</p>
                                <p>{extra}</p>
                                <h3>{date}</h3>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </div>

        </section>
    )
}

export default Reviews