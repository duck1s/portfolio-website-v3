// Imports
import styles from "../styles/components/Experience.module.scss"
import Image from "next/image"

// Icons
import experience from "../public/assets/json/Experience.json"

// Page
export default function Experience() {
	const experienceList = experience.map((job) => {
		return (
			<li key={job[0].id} className={styles.experience__listitem}>
				<div className={styles.experience__img}>
					<Image src={job[0].img} layout="fill" objectFit="cover"></Image>
				</div>
				<div className={styles.experience__text}>
					<h4>{job[0].name}</h4>
					<p>{job[0].description}</p>
					<h4 className={styles.experience__time}>{job[0].time}</h4>
				</div>
			</li>
		)
	})

	return (
		<>
			<section className={styles.experience}>
				<h3 className={styles.experience__heading}>Experiences</h3>
				<ul className={styles.experience__list}>{experienceList}</ul>
			</section>
		</>
	)
}
