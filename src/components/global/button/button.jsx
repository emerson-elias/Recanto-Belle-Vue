import { Link } from "react-router-dom"

import styles from './button.module.scss'

function Button({ link , icon}) {
    return (
        <section className={styles.button}>
            <Link to={link}><i className={icon}></i> Visite a essência</Link>
        </section>
    )
}

export default Button