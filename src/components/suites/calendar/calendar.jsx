import { useState, useEffect } from 'react'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css'
import './calendar.scss'

import Title from '../../global/title/title'
import Extras from './extras/extras'

export default function CalendarSuites({ suites }) {
    const [dataSelecionada, setDataSelecionada] = useState(new Date())
    const [showDouble, setShowDouble] = useState(true)

    useEffect(() => {
        const resize = () => {
            if (window.innerWidth < 768) {
                setShowDouble(false)
            } else {
                setShowDouble(true)
            }
        }

        resize()
        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, [])

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
                        showDoubleView={showDouble}
                    />

                    <p>
                        Data escolhida: {dataSelecionada.toLocaleDateString('pt-BR', {
                            weekday: 'long',
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric'
                        })}
                    </p>

                    <div className="legend">
                        <div className="legend-item">
                            <span className="legend-color active"></span>
                            Data selecionada
                        </div>

                        <div className="legend-item">
                            <span className="legend-color evento"></span>
                            Data Disponível
                        </div>
                    </div>
                </div>

                <div className='boxTwo'>
                    <Extras suites={suites} />
                </div>

            </div>

        </div>
    )
}