
import styles from './extras.module.scss'

function Extras({ suites }) {

    return (
        <section className={styles.extras_container}>
            <div className={styles.title}>
                <h1>Destaques {suites.categoria}</h1>
                <p>Descubra os destaques desta acomodação que descobrimos para você.</p>
            </div>

            <div className={styles.box}>
                <div className={styles.boxOne}
                    style={{ backgroundImage: `url(${suites.banner})` }}
                >
                </div>

                <div className={styles.boxTwo}>

                    {suites?.emphasis?.map((element, index) => (
                        <div className={styles.layer} key={element.title || index}>
                            <h2>{element.title}</h2>
                            <p>{element.text}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Extras