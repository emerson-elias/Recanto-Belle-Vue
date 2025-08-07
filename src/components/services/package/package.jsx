
import Button from '../../global/button/button'
import Title from '../../global/title/title'
import styles from './package.module.scss'

export default function Package({ information }) {
    return (
        <section className={styles.package_container}>

            <Title
                title={'Pacotes exclusivos'}
                text={'Temos opções únicas de pacotes para deixar sua experiência ainda melhor'}
            />

            <div className={styles.row}>

                <div className={styles.boxOne}>

                    <div className={styles.boxImg}
                        style={{ backgroundImage: `url(${information.packImgOne})` }}
                    >
                    </div>

                    <div className={styles.boxInfor}>
                        <h2>{information.namePackOne}</h2>
                        <p>{information.descriptionPackOne}</p>

                        <ul>
                            {information.includePackOne.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <Button
                            link={'#'}
                            icon={'fa-regular fa-gem'}
                            name={'escolher este'}
                        />
                    </div>

                </div>

                <div className={styles.boxTwo}>

                    <div className={styles.boxImg}

                        style={{ backgroundImage: `url(${information.packImgTwo})` }}
                    >


                    </div>

                    <div className={styles.boxInfor}>
                        <h2>{information.namePackTwo}</h2>
                        <p>{information.descriptionPackTwo}</p>

                        <ul>
                            {information.includePackTwo.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <Button
                            link={'#'}
                            icon={'fa-regular fa-heart'}
                            name={'escolher este'}
                        />
                    </div>
                </div>

            </div>

        </section>
    )
}