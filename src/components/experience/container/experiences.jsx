import { Link } from 'react-router-dom'
import React from 'react'

import styles from './experiences.module.scss'
import Title from '../../global/title/title'

export default function Experiences({ experiences }) {
    if (!experiences) return null

    return (
        <section className={styles.experiences_container}>

            {experiences.map((element, index) => (

                <React.Fragment key={index}>

                    <div className={`${styles.box} 
                        ${index % 2 !== 0 ? styles.row_reverse : ''}`
                    }
                    >
                        <div className={styles.boxOne}
                            style={{ backgroundImage: `url(${element.imgOne})` }}
                        >
                            <Link to={element.id}>{element.nameOne}</Link>
                        </div>

                        <div className={styles.boxTwo}
                            style={{ backgroundImage: `url(${element.imgTwo})` }}
                        >
                            <Link to={element.id}>{element.nameTwo}</Link>
                        </div>

                        <div className={styles.boxThere}>
                            <Title
                                title={element.title}
                                text={element.subTile}
                                row={index % 2 !== 0 ? '' : 'row'}
                            />

                            <Link to={element.id}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 173 23.68"
                                    width='70'
                                    height='70'
                                >
                                    <polygon fill="#012d37" points="161.16 0 160.17 .99 170.32 11.14 0 11.14 0 12.54 170.32 12.54 160.17 22.69 161.16 23.68 173 11.84 161.16 0" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                </React.Fragment>
            ))}
        </section>
    )
}