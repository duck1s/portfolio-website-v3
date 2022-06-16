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
				<h2 className={styles.contactleft__heading}>Contact</h2>
				<ContactList />
			</section>
		</>
	)
}

export default Contact
