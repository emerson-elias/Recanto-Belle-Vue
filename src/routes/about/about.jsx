import { useEffect } from 'react'
import { useLoading } from '../../loading/context/loadingContext.jsx'

import styles from './about.module.scss'

export default function About() {
    const { addLoadingTask, removeLoadingTask } = useLoading()

    /* SIMULAÇÃO TEMPORÁRIA*/

    useEffect(() => {
        const taskId = 'aboutPage'
        addLoadingTask(taskId)

        const timer = setTimeout(() => {
            removeLoadingTask(taskId)
        }, 1500) // simula carregamento

        return () => clearTimeout(timer)
    }, [])

    return (
        <section>
            <h1>Sobre Nós</h1>
            <p>Bem-vindo à nossa pousada!</p>
        </section>
    )
}
