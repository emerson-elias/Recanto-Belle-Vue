
import Button from '../global/button/button'

import styles from './doubts.module.scss'

const doubtsList = [
    {
        id: 1,
        picture: '/assets/img/check.jpg',
        title: 'Qual o horário de check-in e check-out?',
        subTitle: 'Informações sobre entrada e saída',
        text: 'O check-in pode ser feito a partir das 14h, e o check-out até às 12h. Caso precise de horários diferenciados, entre em contato com nossa equipe para verificar disponibilidade.'
    },
    {
        id: 2,
        picture: '/assets/img/pet.jpg',
        title: 'O resort é pet friendly?',
        subTitle: 'Posso levar meu animal de estimação?',
        text: 'Sim! Aceitamos pets de pequeno porte. É importante informar no momento da reserva e seguir nossas orientações para garantir uma boa estadia para todos.'
    },
    {
        id: 3,
        picture: '/assets/img/ds-1.jpg',
        title: 'O que está incluso nas diárias?',
        subTitle: 'Conheça nossos serviços',
        text: 'Nossas diárias incluem café da manhã, acesso às áreas de lazer como piscina, academia e praia privativa. Alguns serviços como spa e passeios são cobrados à parte.'
    },
    {
        id: 4,
        picture: '/assets/img/transporte.jpg',
        title: 'O resort oferece transporte?',
        subTitle: 'Deslocamento até o local',
        text: 'Sim! Oferecemos serviço de transfer do aeroporto até o resort com agendamento prévio. Consulte nossa equipe para valores e disponibilidade.'
    },
    {
        id: 5,
        picture: '/assets/img/dieta.jpg',
        title: 'Há opções para dietas restritivas?',
        subTitle: 'Alimentação personalizada',
        text: 'Temos opções vegetarianas, veganas, sem glúten e sem lactose em nossos restaurantes. Por favor, informe suas restrições no momento da reserva.'
    },
    {
        id: 6,
        picture: '/assets/img/park.jpg',
        title: 'O resort possui recreação infantil?',
        subTitle: 'Diversão para as crianças',
        text: 'Sim, contamos com equipe de recreadores e atividades diárias para crianças de diferentes faixas etárias, garantindo segurança e diversão durante a estadia.'
    },
    {
        id: 7,
        picture: '/assets/img/pagamento.jpg',
        title: 'É necessário pagar tudo antecipado?',
        subTitle: 'Formas de pagamento',
        text: 'Trabalhamos com reserva via cartão de crédito, pix ou boleto. É possível parcelar e pagar uma parte na chegada, conforme as condições de cada pacote.'
    }
]

function Doubts() {
    return (
        <>
            {doubtsList.map((elements) => (
                <section key={elements.id} className={styles.faq_container}>

                    <div className={styles.boxOne}>
                        <img src={elements.picture} alt="IMAGEM" />
                    </div>

                    <div className={styles.boxTwo}>
                        <h1>{elements.title}</h1>
                        <span>{elements.subTitle}</span>
                        <p>{elements.text}</p>

                        <Button link={'/suites'} icon={'fa-regular fa-bookmark'} name={' Reserve agora '} />
                    </div>

                </section>
            ))}
        </>
    )
}

export default Doubts