import { Link, useLocation } from 'react-router-dom'

import styles from './summary.module.scss'
import Button from '../../global/button/button'

const faqList = [
    {
        question: 'Quais são os horários de check-in e check-out?',
        answer: 'O check-in pode ser feito a partir das 14h, e o check-out até às 12h. Se precisar de flexibilidade, entre em contato com a recepção.'
    },
    {
        question: 'Quais formas de pagamento são aceitas?',
        answer: 'Aceitamos cartões de crédito, débito, Pix e dinheiro. Para reservas antecipadas, também é possível fazer transferência bancária.'
    },
    {
        question: 'Animais de estimação são permitidos?',
        answer: 'Sim, aceitamos pets de pequeno porte! É necessário informar com antecedência para garantirmos uma acomodação adequada.'
    },
    {
        question: 'A pousada possui estacionamento?',
        answer: 'Sim, oferecemos estacionamento gratuito e seguro para hóspedes, disponível 24 horas por dia.'
    }
]

function Summary() {
    return (
        <section className={styles.summary_container}>

            <div className={styles.boxOne}>
                <h1>Estamos aqui para te ajudar!</h1>
                
                <p>Sabemos que algumas dúvidas podem surgir, e estamos aqui para esclarecê-las da melhor forma possível.
                    Nesta seção, respondemos às perguntas mais comuns para que você se sinta seguro e bem informado.
                </p>
                <Button link={' '} icon={'fa-regular fa-circle-question'} name={' Tire suas Dúvidas '} />
            </div>

            <div className={styles.boxTwo}>
                {faqList.map((faq, index) => (
                    <details key={index}>
                        <summary>{faq.question}</summary>
                        <p>{faq.answer}</p>
                    </details>
                ))}
            </div>
            
        </section>
    )
}

export default Summary