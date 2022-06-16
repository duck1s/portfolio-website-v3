// Imports
import styles from "../styles/components/ServicesList.module.scss"
import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"

// Icons
import services from "../public/assets/json/services.json"

// Page
export default function ServicesList() {
	const router = useRouter()

	const serviceList = services.map((service) => {
		return (
			<li key={service[0].id} className={styles.services__listitem}>
				<div className={styles.services__img}>
					<Image src={service[0].img} layout="fill" objectFit="cover"></Image>
				</div>
				<div className={styles.services__content}>
					<div className={styles.services__text}>
						<h4>{service[0].name}</h4>
						<p>{service[0].description}</p>
					</div>
					<Link href="/contact">
						<a className={styles.services__link}>Contact</a>
					</Link>
				</div>
			</li>
		)
	})

	return (
		<>
			<section className={styles.services__list}>
				<h3>What can I do?</h3>
				<ul className={styles.services__list}>{serviceList}</ul>
			</section>
		</>
	)
}
