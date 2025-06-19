import { Link } from 'react-router-dom'

import styles from './serv.module.scss'

const services = [
    {
        id: '1',
        logo: '/assets/img/logoAdega.png',
        image: '/assets/img/banner_adega.jpg',
        name: 'Adega D’Ouro',
        text: 'Cada garrafa é um tesouro. Descubra uma seleção exclusiva de vinhos que unem tradição, sabor e sofisticação.',
        link: '#'
    },
    {
        id: '2',
        logo: '/assets/img/logoBuffet.png',
        image: '/assets/img/banner_buffet.jpg',
        name: 'Vue Buffet',
        text: 'Uma experiência gastronômica completa, pratos selecionados, requinte no atendimento com um toque especial.',
        link: '#'
    },
    {
        id: '3',
        logo: '/assets/img/logoServiceRoom.png',
        image: '/assets/img/banner_service_room.jpg',
        name: 'LE’ Essence',
        text: 'Nosso serviço de quarto oferece praticidade, sofisticação e atenção aos detalhes — tudo para tornar a experiência única',
        link: '#'
    },
]
export default function Serv() {
    return (
        <section className={styles.serv_container}>

            <div className={styles.tittle}>
                <h1>Nossos Serviços</h1>

                <p>Envolva-se em uma experiência onde o encanto encontra o aconchego.
                    Cada detalhe foi pensado para que você descanse com tranquilidade,
                    sinta-se em casa e viva momentos únicos em um ambiente acolhedor e inspirador.
                    Aqui, o tempo desacelera e o bem-estar é prioridade.</p>

                <div className={styles.btn}>
                    <Link to={"/about"}>Visite a essência</Link>
                </div>
            </div>

            {services.map((element) => (
                <div className={styles.box} key={element.id}>

                    <img className={styles.bg} src={element.image} alt="" />

                    <div className={styles.box_logo}>
                        <a> {element.name} </a>
                    </div>

                    <div className={styles.btn_services}>
                        <Link to={element.link}> Visite a essência </Link>
                    </div>

                    {/*   <p> {element.text} </p> */}
                </div>
            ))}
        </section>
    )
}