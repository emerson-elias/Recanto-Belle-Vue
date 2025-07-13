import { useEffect, useRef } from 'react'

import styles from './topo.module.scss'

export default function Topo() {
    const topoRef = useRef(null)

    useEffect(() => {
        const topo = topoRef.current

        const scroll = () => {
            const scrollY = window.scrollY
            const scrollHeight = document.documentElement.scrollHeight
            const windowHeight = window.innerHeight

            const distanceToBottom = scrollHeight - (scrollY + windowHeight)

            if (scrollY > 200) {
                topo.style.opacity = '1'
                topo.style.pointerEvents = 'auto'
            } else {
                topo.style.opacity = '0'
                topo.style.pointerEvents = 'none'
            }

            if (distanceToBottom <= windowHeight) {
                topo.classList.add(styles.colorBottom)
            } else {
                topo.classList.remove(styles.colorBottom)
            }
        }

        const click = () => {
            window.scrollTo({ top: 0, behavior: 'auto' })
        }

        window.addEventListener("scroll", scroll)
        topo.addEventListener('click', click)

        return () => {
            window.removeEventListener("scroll", scroll)
            topo.removeEventListener('click', click)
        }
    }, [])

    return (
        <section className={styles.button_top} title="Volte ao topo" ref={topoRef}>
            <a><i className="fa-solid fa-caret-up"></i></a>
        </section>
    )
}