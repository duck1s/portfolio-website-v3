// Imports
import styles from "../styles/components/ServicesList.module.scss"
import Image from "next/image"
import { useRouter } from "next/router"

// Icons
import services from "../public/assets/json/services.json"

// Page
export default function ServicesList() {
	const router = useRouter()

	const serviceList = services.map((service) => {
		console.log(service[0].id)
		console.log(service[0].name)
		console.log(service[0].img)

		return (
			<li key={service[0].id} className={styles.services__listitem}>
				<div className={styles.services__textcontainer}>
					<h3 className={styles.services__heading}>{service[0].name}</h3>
					<p className={styles.services__text}>{service[0].description}</p>
				</div>
				<div className={styles.services__imagecontainer}>
					<Image className={styles.services__img} src={service[0].img} layout="fill" objectFit="cover"></Image>
				</div>
			</li>
		)
	})

	return (
		<>
			<ul className={styles.services__list}>{serviceList}</ul>
		</>
	)
}
