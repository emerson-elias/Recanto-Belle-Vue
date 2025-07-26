import { useNavigate } from 'react-router-dom'
import Button from '../../global/button/button'
import Title from '../../global/title/title'
import styles from './category.module.scss'

function CategoryStart({ suites }) {
    const navigate = useNavigate()

    const handleSelect = (suite) => {
        navigate(`/suites/${suite.id}`)
    }

    return (
        <section className={styles.categoryStart_container}>
            <Title
                title={'Escolha sua experiência'}
                text={'Do simples ao sofisticado, temos uma suíte para cada momento'}
                row={''}
            />

            <div className={styles.box}>
                {suites.map((el) => (
                    <div className={styles.context}
                        key={el.id}
                        onClick={() => handleSelect(el)}
                    >
                        <div className={styles.layer} style={{ backgroundImage: `url(${el.banner})` }}></div>

                        <h2>{el.title}</h2>
                        <span>{el.subTitle}</span>

                        <ul>
                            {el.icons.slice(0, 4).map((icon) => (
                                <li key={icon.name} className="icon-item">
                                    <img src={icon.src} alt={icon.name} loading="lazy" />
                                    <i>{icon.name}</i>
                                </li>
                            ))}
                        </ul>

                        <Button link={''} name={el.price} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CategoryStart