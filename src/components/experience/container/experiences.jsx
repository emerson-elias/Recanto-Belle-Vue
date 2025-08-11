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

                    <Title
                        title={element.title}
                        text={element.subTile}
                        row={index % 2 !== 0 ? 'row' : ''}
                    />

                    <div className={`${styles.box} 
                        ${index % 2 !== 0 ? styles.row_reverse : ''}`
                    }
                    >
                        <div className={styles.boxOne}
                            style={{ backgroundImage: `url(${element.imgOne})` }}
                        >
                            <Link to={element.link}>{element.nameOne}</Link>
                        </div>

                        <div className={styles.boxTwo}
                            style={{ backgroundImage: `url(${element.imgTwo})` }}
                        >
                            <Link to={element.link}>{element.nameTwo}</Link>
                        </div>
                    </div>

                </React.Fragment>
            ))}
        </section>
    )
}