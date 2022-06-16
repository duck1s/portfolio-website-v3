// Imports
import styles from "../styles/components/ContactList.module.scss"
import Image from "next/image"
import { useRouter } from "next/router"

// Icons
import contact from "../public/assets/json/contact.json"

// Page
export default function ContactList() {
	const router = useRouter()

	const contactList = contact.map((contact) => {
		console.log(contact[0].id)
		console.log(contact[0].name)
		console.log(contact[0].img)

		return (
			<li onClick={() => window.open(`${contact[0].link}`, "_ blank")} key={contact[0].id} className={styles.contact__listitem}>
				<div className={styles.contact__imagecontainer}>
					<Image className={styles.contact__img} src={contact[0].img} layout="fill" objectFit="contain"></Image>
				</div>
				<p>{contact[0].name}</p>
			</li>
		)
	})

	return (
		<>
			<ul className={styles.contact__list}>{contactList}</ul>
		</>
	)
}
