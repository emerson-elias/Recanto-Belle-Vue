import { useEffect, useState } from 'react'
import { useLoading } from '../../../context/loadingContext'

import styles from './loadingGlobal.module.scss'

export const LoadingGlobal = () => {
    const { isLoading, forceOverflowHidden } = useLoading()
    const [shouldRender, setShouldRender] = useState(false)
    const [hide, setHide] = useState(false)

    // O useEffect para o overflow pode ser mantido se você o usar em outros loadings,
    // mas não será mais necessário para o loading de rotas
    useEffect(() => {
        const applyOverflow = () => {
            if (isLoading || forceOverflowHidden) {
                document.body.style.overflow = 'hidden'
                document.documentElement.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = ''
                document.documentElement.style.overflow = ''
            }
        }

        applyOverflow()

        return () => {
            document.body.style.overflow = ''
            document.documentElement.style.overflow = ''
        }
    }, [isLoading, forceOverflowHidden])

    // A lógica de transição pode ser simplificada ou removida, pois
    // o Suspense gerenciará a montagem e desmontagem do componente
    // de acordo com o carregamento da rota.
    // Se quiser a transição de saída, a lógica é:
    useEffect(() => {
        let timeoutId
        if (isLoading) {
            setShouldRender(true)
            setHide(false)
        } else {
            if (shouldRender) {
                setHide(true)
                timeoutId = setTimeout(() => {
                    setShouldRender(false)
                }, 2500) // Ajuste para o tempo da sua animação CSS de `hide`
            }
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [isLoading, shouldRender])

    // Se a lógica do Suspense for usada, este componente não precisa mais gerenciar
    // sua própria renderização baseada em `shouldRender`. Ele será renderizado
    // e desmontado pelo React. Você pode simplificar para:
    // return (
    //     <section className={styles.loading_container}>
    //         <h1>Carregando</h1>
    //         <div className={styles.hourglass}></div>
    //     </section>
    // )

    if (!shouldRender) return null

    return (
        <section className={`${styles.loading_container} ${hide ? styles.hide : ''}`}>
            <h1>Carregando</h1>
            <div className={styles.hourglass}></div>
        </section>
    )
}