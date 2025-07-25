import { useEffect, useState } from 'react'
import styles from './topo.module.scss'

export default function Topo() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 200)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <section
            className={`${styles.button_top} ${visible ? styles.visible : ''}`}
            title="Volte ao topo"
            onClick={scrollToTop}
        >
            <a><i className="fa-solid fa-caret-up"></i></a>
        </section>
    )
}