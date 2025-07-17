import img from '/assets/img/trilha.jpg'
import styles from './contact.module.scss'

const contact = [
    {
        id: 1,
        title: 'WhatsApp',
        contact: '+55 (98) 98823-9695',
    },
    {
        id: 2,
        title: 'Telefone',
        contact: '+55 (94) 99117-1807',
    },
    {
        id: 3,
        title: 'Email',
        contact: 'emersonees707@gmail.com',
    },
    {
        id: 4,
        title: 'Instagram',
        contact: 'emersoneliass_',
    },
    {
        id: 5,
        title: 'Localização',
        contact: 'Marabá - PA',
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
            const phoneNumber = '+5594991171807'
            window.open(`tel:${phoneNumber}`, '_self')
        },
        3: () => {
            const email = 'emersonees707@gmail.com'
            const subject = 'Trabalho'
            const body = 'Olá,\n\nvim pelo site, gostaria de mais informações sobre seu trabalho.\n\nAtenciosamente:\n---- Seu Nome ----'
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
            window.open(mailtoLink, '_self')
        },
        4: () => {
            window.open('https://www.instagram.com/emersoneliass_', '_blank')
        },
        5: () => {
            window.open('https://www.google.com/maps?q=Marabá,+PA', '_blank')
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
                        <h1>{el.title}</h1>
                        <a onClick={(e) => {
                            e.preventDefault()
                            if (mapId[el.id]) mapId[el.id]()
                        }}>
                            {el.contact}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Contact