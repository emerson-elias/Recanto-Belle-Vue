import { useState } from 'react'

import styles from './video.module.scss'
import preview from '/assets/video/pev.mp4'
import full from '/assets/video/full.mp4'

import VideoModal from './modal/modal.jsx'

export default function Video() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className={styles.video_container}>
      <div className={styles.box_video}>

        <svg xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 48 48"
          onClick={() => setShowModal(true)}>
            
          <circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20.407 35L33.14 24L20.407 13" strokeWidth="1" />
        </svg>

        <video autoPlay loop muted playsInline className={styles.video_element}>
          <source src={preview} type="video/mp4" />
        </video>
      </div>

      <div className={styles.box_text}>
        <h1>Descubra:<br /> Recanto Belle Vue</h1>

        <span>Um mar de experiências, uma promessa de bem-estar, uma homenagem à calma.</span>
        <p>Desperte com o som das ondas e uma vista incrível do oceano. Na Recanto Belle Vue, você encontra conforto, charme e tranquilidade em um ambiente acolhedor. Ideal para relaxar, curtir a natureza e viver momentos inesquecíveis.</p>

        <div className={styles.box_detals}>
          <i>- Refúgio -</i>
          <i>- Encanto -</i>
          <i>- Requinte -</i>
        </div>
      </div>

      <VideoModal show={showModal} onClose={() => setShowModal(false)} videoSrc={full} />
    </section>
  )
}
