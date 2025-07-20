import img from '/assets/img/cont.jpg'
import styles from './contact.module.scss'

const contact = [
    {
        id: 1,
        title: 'WhatsApp',
        contact: '+55 (98) 98823-9695',
    },
    {
        id: 2,
        title: 'Portifólio',
        contact: 'Emerson Moraes',
    },
    {
        id: 3,
        title: 'Email',
        contact: 'emersonees707@gmail.com',
    },
    {
        id: 4,
        title: 'git hub',
        contact: 'Emerson-Elias',
    },
    {
        id: 5,
        title: 'linkedin',
        contact: 'Emerson-Elias',
    },
]

function Contact() {

    const mapId = {
        1: () => {
            const phoneNumber = '+5598988239695'
            const message = encodeURIComponent('Olá, vim pelo site, quero saber mais informações sobre seu trabalho.')
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
            window.open(whatsappUrl, '_blank')
        },
        2: () => {
            window.open('https://emerson-elias.vercel.app/', '_blank')
        },
        3: () => {
            const email = 'emersonees707@gmail.com'
            const subject = 'Trabalho'
            const body = 'Olá,\n\nvim pelo site, gostaria de mais informações sobre seu trabalho.\n\nAtenciosamente:\n---- Seu Nome ----'
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
            window.open(mailtoLink, '_self')
        },
        4: () => {
            window.open('https://github.com/emerson-elias', '_blank')
        },
        5: () => {
            window.open('https://www.linkedin.com/in/emerson-elias-9b2894228/', '_blank')
        }
    }

    return (
        <section className={styles.contact_container}>
            <div className={styles.boxOne}>
                <img src={img} alt="IMAGEM" />
            </div>

            <div className={styles.boxTwo}>
                {contact.map((el) => (
                    <div key={el.id} className={styles.layer}>

                        <a onClick={(e) => {
                            e.preventDefault()
                            if (mapId[el.id]) mapId[el.id]()
                        }}>
                            <h1>{el.title}</h1>
                            {el.contact}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Contact