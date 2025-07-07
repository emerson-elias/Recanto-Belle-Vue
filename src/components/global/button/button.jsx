import { Link } from "react-router-dom"

import styles from './button.module.scss'

function Button({ link }) {
    return (
        <section className={styles.button}>
            <Link to={link}><i className="fa-regular fa-gem"></i> Visite a essência</Link>
        </section>
    )
}

export default Button