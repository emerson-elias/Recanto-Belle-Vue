import { useEffect, useState } from 'react'

import styles from './topo.module.scss'

export default function Topo() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const scroll = () => {
            setVisible(window.scrollY > 200)
        }

        window.addEventListener("scroll", scroll)
        return () => window.removeEventListener("scroll", scroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <main
            className={`${styles.button_top} ${visible ? styles.visible : ''}`}
            title="Volte ao topo"
            onClick={scrollToTop}
        >
            <a><i className="fa-solid fa-caret-up"></i></a>
        </main>
    )
}