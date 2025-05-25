import { useEffect, useState } from 'react'
import { useLoading } from './context/loadingContext'

import styles from './loading.module.scss'

export const LoadingGlobal = () => {
    const { isLoading } = useLoading()
    const [shouldRender, setShouldRender] = useState(false)
    const [hide, setHide] = useState(false)

    useEffect(() => {
        if (isLoading) {
            setShouldRender(true)
            setHide(false)

            document.body.style.overflow = 'hidden'
            document.documentElement.style.overflow = 'hidden'

        } else if (shouldRender) {
            setHide(true)

            document.body.style.overflow = ''
            document.documentElement.style.overflow = ''
        
            const timeout = setTimeout(() => setShouldRender(false), 2000) // tempo igual ao da animação
            return () => clearTimeout(timeout)
        }
    }, [isLoading, shouldRender])

    if (!shouldRender) return null

    return (
        <section className={`${styles.loading_container} ${hide ? styles.hide : ''}`}>
            <h1>Carregando...!</h1>
            <div className={styles.hourglass}></div>
        </section>
    )
}
