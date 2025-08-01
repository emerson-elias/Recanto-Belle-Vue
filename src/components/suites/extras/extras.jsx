
import Title from '../../global/title/title'
import styles from './extras.module.scss'

function Extras({ suites }) {

    return (
        <section className={styles.extras_container}>

            <Title
                title={`Destaques ${suites.categoria}`}
                text={'Descubra os destaques desta acomodação que descobrimos para você.'}
            />

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