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
				<section className={styles.servicesleft}>
					<h2 className={styles.servicesleft__heading}>Services</h2>
					<ServicesList />
				</section>
				<aside className={styles.servicesright}>
					<Image className={styles.servicesright__img} src={"/assets/undraw-services.svg"} width={500} height={400} />
				</aside>
			</section>
		</>
	)
}

export default Services
