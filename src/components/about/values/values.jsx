import Circle from '../../global/svg/circle'
import Title from '../../global/title/title'

import styles from './values.module.scss'

const boxes = [
    {
        id: 1,
        className: 'box1',
        image: '/assets/img/s-12.jpg',
        title: 'Missão',
        text: 'Oferecer experiências únicas de lazer e conforto, proporcionando momentos inesquecíveis aos nossos hóspedes, com atendimento de excelência e respeito ao meio ambiente.'
    },
    {
        id: 2,
        className: 'box2',
        image: '/assets/img/pexels-2.jpg',
        title: 'Visão',
        text: 'Ser reconhecido como o resort de referência na região, destacando-se pela qualidade, inovação e sustentabilidade em todos os serviços oferecidos.'
    },
    {
        id: 3,
        className: 'box3',
        image: '/assets/img/sr-7.jpg',
        title: 'Valores',
        text: 'Compromisso com a satisfação do hóspede, ética, transparência, sustentabilidade, cuidado com a equipe e promoção de experiências memoráveis.'
    },
]

export default function Values() {
    return (
        <section className={styles.values_container}>

            <Title
                title={'Nossos valores nos definem'}
                text={'Assim como princípios definem o ser humano, com as empresas não são diferentes'}
                row={'row'}
            />

            <div className={styles.row}>
                {boxes.map((box) => (
                    <div
                        key={box.id}
                        className={`${styles.box} ${styles[box.className]}`}
                        style={{ backgroundImage: `url(${box.image})` }}
                    >
                        <div className={styles.content}>
                            <h1>{box.title}</h1>
                            <p>{box.text}</p>
                        </div>

                        <Circle name={'Recanto belle vue'}/>
                    </div>
                ))}
            </div>
        </section>
    )
}
