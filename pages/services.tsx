// Imports
import type { NextPage } from "next"
import styles from "../styles/pages/Services.module.scss"
import ServicesList from "../components/ServicesList"
import Image from "next/image"

// Page
const Services: NextPage = () => {
	return (
		<>
			<section className={styles.services}>
				<div className={styles.services__text}>
					<h2 className={styles.services__heading}>Services</h2>
					<p>Hire me to build, design or maintain a website for you!</p>
				</div>
				<ServicesList />
			</section>
		</>
	)
}

export default Services
