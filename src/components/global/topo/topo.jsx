import { useEffect, useRef } from 'react'
import styles from './topo.module.scss'

export default function Topo() {
    const topoRef = useRef(null)

    useEffect(() => {
        const topo = topoRef.current

        const handleScroll = () => {
            if (window.scrollY > 200) {
                topo.style.opacity = '1'
                topo.style.pointerEvents = 'auto'
            } else {
                topo.style.opacity = '0'
                topo.style.pointerEvents = 'none'
            }
        }

        const handleClick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        window.addEventListener("scroll", handleScroll)
        topo.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            topo.removeEventListener('click', handleClick)
        }

    }, [])

    return (
        <section className={styles.button_top} title="Volte ao topo" ref={topoRef}>
            <a><i className="fa-solid fa-caret-up"></i></a>
        </section>
    )
}