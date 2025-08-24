import styles from './circle.module.scss'

function Circle({ name }) {
    const repeatedText = Array(10).fill(`${name} º`).join(' ')

    return (
        <div className={styles.svg}>
            <svg width="200" height="200" viewBox="0 0 320 320" role="img" aria-label={`Texto circular: ${name}`}>
                <defs>
                    <path id="circlePath" d="M160,160 m-140,0 a140,140 0 1,0 280,0 a140,140 0 1,0 -280,0" />
                </defs>
                <text fill="currentColor">
                    <textPath href="#circlePath" startOffset="0">
                        {repeatedText}
                    </textPath>
                </text>
            </svg>
        </div>
    )
}

export default Circle