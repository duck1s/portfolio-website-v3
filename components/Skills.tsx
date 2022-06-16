// Imports
import styles from "../styles/components/Skills.module.scss"
import Image from "next/image"

// Icons
import skills from "../public/assets/json/skills.json"

// Page
export default function Skills() {
	const skillList = skills.map((skill) => {
		return (
			<li key={skill[0].id} className={styles.skills__listitem}>
				<div className={styles.skills__imagecontainer}>
					<div className={styles.skills__img}>
						<Image alt="Skill" src={skill[0].img} layout="fill" objectFit="contain"></Image>
					</div>
				</div>
				<p className={styles.skills__text}>{skill[0].name}</p>
			</li>
		)
	})

	return (
		<>
			<section className={styles.skills}>
				<h3 className={styles.skills__heading}>Skills</h3>
				<ul className={styles.skills__list}>{skillList}</ul>
			</section>
		</>
	)
}
