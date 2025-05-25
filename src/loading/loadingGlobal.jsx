import { useEffect } from 'react'
import { useLoading } from './context/loadingContext'

import styles from './loading.module.scss'

export const LoadingGlobal = () => {
    const { isLoading } = useLoading()

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden'
            document.documentElement.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
            document.documentElement.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
            document.documentElement.style.overflow = ''
        }
        
    }, [isLoading])

    if (!isLoading) return null

    return (
        <section className={styles.loading_container}>
            <h1>Carregando...</h1>
            <div className={styles.hourglass}></div>
        </section>
    )
}