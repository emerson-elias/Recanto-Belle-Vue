import { useState } from 'react'
import Calendar from 'react-calendar'
import Title from '../../global/title/title'

import 'react-calendar/dist/Calendar.css'
import './calendar.scss'

export default function CalendarSuites({ suites }) {
    const [dataSelecionada, setDataSelecionada] = useState(new Date())

    const datasEspeciais = [
        new Date(2025, 7, 20),
        new Date(2025, 7, 25),
    ]

    const change = (data) => setDataSelecionada(data)

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            if (datasEspeciais.find(d => d.toDateString() === date.toDateString())) {
                return 'evento'
            }
        }
        return null
    }

    return (
        <div className="calendar_container">

            <Title
                title={'Disponibilidade'}
                text={'Para estadias de 4 noites ou mais, você receberá um desconto de 4,4%, e para estadias de 7 noites ou mais, você receberá um desconto de 8,9%.'}
            />

            <div className='row'>

                <div className='boxOne'>
                    <Calendar
                        onChange={change}
                        value={dataSelecionada}
                        tileClassName={tileClassName}
                        showDoubleView={true}
                    />

                    <p>Data escolhida: {dataSelecionada.toDateString()}</p>
                </div>

                <div className='boxTwo'>
                    <h2>{suites.title}</h2>

                    <details>
                        <summary>Descrição da suite</summary>
                        <p>{suites.description}</p>
                    </details>


                    <div className='select'>

                    </div>

                    <div className='input'>
                        <h3>Escolha seu plano de serviços:</h3>
                        <label htmlFor="">Com serviços incluso</label>
                        <input type="radio" />

                        <label htmlFor="">Livre</label>
                        <input type="radio" />
                    </div>
                </div>

            </div>

        </div>
    )
}