import { Link } from "react-router-dom"

import styles from './button.module.scss'

function Button({ link, icon, name}) {
    return (
        <section className={styles.button}>
            <Link to={link}><i className={icon}></i> {name}</Link>
        </section>
    )
}

export default Button