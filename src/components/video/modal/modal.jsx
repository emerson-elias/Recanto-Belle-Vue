// components/Video/modal/modal.jsx
import { useEffect, useRef } from 'react'
import { useLoading } from '../../../context/loadingContext'

import styles from './modal.module.scss'

export default function VideoModal({ show, onClose, videoSrc }) {
    const { addLoadingTask, removeLoadingTask, setOverflowHidden } = useLoading()
    const videoRef = useRef(null)

    useEffect(() => {
        if (show) {
            setOverflowHidden(true)

            const taskId = 'modalVideoLoad'
            addLoadingTask(taskId)

            const video = videoRef.current
            if (video) {
                // Evento para quando o vídeo do modal estiver pronto para reproduzir
                const handleLoadedData = () => {
                    console.log('Vídeo do modal carregado!')
                    removeLoadingTask(taskId) // Remove a tarefa
                    video.play().catch(error => console.error('Erro ao iniciar vídeo:', error)) // Tenta reproduzir automaticamente
                }

                // Evento para erros de carregamento do vídeo do modal
                const handleError = () => {
                    console.error('Erro ao carregar vídeo do modal!')
                    removeLoadingTask(taskId) // Remove a tarefa em caso de erro
                }

                video.addEventListener('loadeddata', handleLoadedData)
                video.addEventListener('error', handleError)

                // Limpeza do useEffect para remover os listeners quando o modal é fechado ou componente desmontado
                return () => {
                    video.removeEventListener('loadeddata', handleLoadedData)
                    video.removeEventListener('error', handleError)
                    if (videoRef.current) {
                        videoRef.current.pause()
                        videoRef.current.currentTime = 0 // Reseta o vídeo para o início
                    }
                    removeLoadingTask(taskId) // Garante que a tarefa seja removida
                    setOverflowHidden(false) // Restaura o overflow do body
                }
            } else {
                // Se a ref não estiver disponível imediatamente
                removeLoadingTask(taskId)
            }
        } else {
            // Se o modal não estiver visível, garante que o overflow é resetado
            setOverflowHidden(false)
        }
    }, [show, videoSrc, addLoadingTask, removeLoadingTask, setOverflowHidden]) // Dependências: show, videoSrc, funções do contexto

    // Renderização condicional: se show for false, não renderiza nada
    if (!show) return null

    return (
        <section className={`${styles.modal_container} ${show ? styles.show : ''}`}>
            <div className={styles.modal_overlay} onClick={onClose}></div>

            <div className={styles.modal_content}>
                <video
                    ref={videoRef}
                    src={videoSrc}
                    controls
                    autoPlay // O autoplay pode falhar em alguns navegadores se não houver interação prévia do usuário
                    className={styles.full_video}
                />
            </div>

            <button className={styles.close_button} onClick={onClose}>
                <i className='fa-solid fa-xmark'></i>
            </button>
        </section>
    )
}