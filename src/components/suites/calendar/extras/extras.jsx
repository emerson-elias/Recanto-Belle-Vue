import { useState } from "react"
import { Link } from 'react-router-dom'

import styles from './extras.module.scss'
import Button from "../../../global/button/button"

export default function Extras({ suites }) {

    const [adultos, setAdultos] = useState(1)
    const [criancas, setCriancas] = useState(0)

    const diminuir = (tipo) => {
        if (tipo === 'adulto' && adultos > 1) setAdultos(adultos - 1)
        if (tipo === 'crianca' && criancas > 0) setCriancas(criancas - 1)
    }

    const aumentar = (tipo) => {
        if (tipo === 'adulto' && adultos < 6) setAdultos(adultos + 1)
        if (tipo === 'crianca' && criancas < 6) setCriancas(criancas + 1)
    }

    return (
        <section className={styles.extras_suites_container}>
            <h2>"{suites.title}"</h2>

            <details>
                <summary>Descrição da suite</summary>
                <p>{suites.description}</p>
            </details>

            <div className={styles.input}>
                <h3>Escolha seu plano de serviços:</h3>

                <label>
                    <input type="radio" name="plano" />
                    Premium / Todos incluso
                </label>

                <label>
                    <input type="radio" name="plano" />
                    Golden / Café da manhã
                </label>

                <label>
                    <input type="radio" name="plano" />
                    Livre / Nenhum
                </label>
            </div>

            <div className={styles.occupation}>
                <h3>Ocupação de {suites.people}</h3>

                <div className={styles.row}>

                    <div className={styles.boxOne}>
                        <div className={styles.layerOne}>
                            <span>Adulto</span>
                            <p>A partir de 18 anos</p>
                        </div>

                        <div className={styles.layerTwo}>
                            <i onClick={() => diminuir('adulto')}>-</i>
                            <span>{adultos}</span>
                            <i onClick={() => aumentar('adulto')}>+</i>
                        </div>
                    </div>

                    <div className={styles.boxTwo}>
                        <div className={styles.layerOne}>
                            <span>Crianças</span>
                            <p>de 0 a 14 anos</p>
                        </div>

                        <div className={styles.layerTwo}>
                            <i onClick={() => diminuir('crianca')}>-</i>
                            <span>{criancas}</span>
                            <i onClick={() => aumentar('crianca')}>+</i>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.row_btn}>
                <h3>A partir de {suites.price}</h3>
                <span>Informação: Podem ocorrer flutuações de preços, os preços podem mudar até a reserva efetiva</span>

                <div className={styles.boxBtn}>
                    <li><Link to={'/duvidas'}>Dúvidas</Link></li>
                    <Button link={' '} icon={'fa-solid fa-book-bookmark'} name={'Reserve'} />
                </div>

            </div>

        </section>
    )
}