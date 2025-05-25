import { useEffect, useState } from 'react'
import { useLoading } from './context/loadingContext.jsx'
import styles from './loading.module.scss'

export const LoadingGlobal = () => {
    const { isLoading, forceOverflowHidden } = useLoading()
    const [shouldRender, setShouldRender] = useState(false)
    const [hide, setHide] = useState(false)

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

    useEffect(() => {
        if (isLoading) {
            setShouldRender(true)
            setHide(false)
        } else if (shouldRender) {
            setHide(true)
            const timeout = setTimeout(() => setShouldRender(false), 2500)
            return () => clearTimeout(timeout)
        }
    }, [isLoading, shouldRender])

    if (!shouldRender) return null

    return (
        <section className={`${styles.loading_container} ${hide ? styles.hide : ''}`}>
            <h1>Carregando...</h1>
            <div className={styles.hourglass}></div>
        </section>
    )
}
