import Title from '../../global/title/title'

import styles from './description.module.scss'


export default function Description({ suite }) {

    if (!suite) return null

    return (
        <section className={styles.description_container}>
            <Title
                title={`O que inclui em ${suite.categoria}`}
                text={'Além das diversas experiências nossas suites incluem diferênciais únicos'}
            />

            <div className={styles.boxOne}>
                <ul className={styles.include}>
                    {suite.inclusos.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className={styles.boxTwo}>

            </div>

        </section>
    )
}