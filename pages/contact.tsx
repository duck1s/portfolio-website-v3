// Imports
import type { NextPage } from "next"
import styles from "../styles/pages/Contact.module.scss"
import Image from "next/image"
import ContactList from "../components/ContactList"

// Page
const Contact: NextPage = () => {
	return (
		<>
			<section className={styles.contact}>
				<section className={styles.contactleft}>
					<h2 className={styles.contactleft__heading}>Contact</h2>
					<ContactList />
				</section>
				<aside className={styles.contactright}>
					<Image className={styles.contactright__img} src={"/assets/undraw-contact.svg"} width={600} height={500} />
				</aside>
			</section>
		</>
	)
}

export default Contact
