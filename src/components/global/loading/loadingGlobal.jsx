import { useEffect, useState } from 'react'
import { useLoading } from '../../../context/loadingContext'

import styles from './loadingGlobal.module.scss'

export const LoadingGlobal = () => {
    const { isLoading, forceOverflowHidden } = useLoading()
    const [shouldRender, setShouldRender] = useState(false)
    const [hide, setHide] = useState(false)

    useEffect(() => {
        if (isLoading || forceOverflowHidden) {
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
    }, [isLoading, forceOverflowHidden])

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
                }, 2500)
            }
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [isLoading, shouldRender])

    if (!shouldRender) return null

    return (
        <main className={`${styles.loading_container} ${hide ? styles.hide : ''}`}>
            <div className={styles.box}>
                <h1>Carregando</h1>
                <div className={styles.hourglass}></div>
            </div>
        </main>
    )
}