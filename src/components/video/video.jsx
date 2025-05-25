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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 26 26"
          onClick={() => setShowModal(true)}
          className={styles.play_button}
        >
          <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
            <path d="m9 18.321l9.014-4.883L9 7.804zm9.49-4.003a1 1 0 0 0 .054-1.728L9.53 6.956A1 1 0 0 0 8 7.804v10.517a1 1 0 0 0 1.476.88z" />
            <path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" />
          </g>
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
