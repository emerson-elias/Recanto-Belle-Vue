import { Link } from 'react-router-dom'

import styles from './description.module.scss'

import Button from '../../global/button/button'
import Title from '../../global/title/title'

export default function Description({ suite }) {

    if (!suite) return null

    return (
        <section className={styles.description_container}>
            <Title
                title={`O que inclui em ${suite.categoria}`}
                text={'Além das diversas experiências nossas suites incluem diferênciais únicos'}
            />
            
            <div className={styles.row}>
                <div className={styles.boxOne}>
                    <ul>
                        {suite.inclusos.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.boxTwo}>
                    <span>Apenas {suite.price}</span>
                    <p>por pessoa</p>

                    <div className={styles.layer}>
                        <li><Link to={'/duvidas'}>Dúvidas</Link></li>
                        <Button link={' '} icon={'fa-solid fa-book-bookmark'} name={'Reserve Agora'} />
                    </div>
                </div>
            </div>
        </section>
    )
}