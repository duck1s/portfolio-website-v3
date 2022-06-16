// Imports
import styles from "../styles/components/Skills.module.scss"
import Image from "next/image"

// Icons
import skills from "../public/assets/json/skills.json"

// Page
export default function Skills() {
	const skillList = skills.map((skill) => {
		console.log(skill[0].id)
		console.log(skill[0].name)
		console.log(skill[0].img)

		return (
			<li key={skill[0].id} className={styles.skills__listitem}>
				<div className={styles.skills__imagewidget}>
					<div className={styles.skills__imagecontainer}>
						<Image className={styles.skills__img} src={skill[0].img} layout="fill" objectFit="contain"></Image>
					</div>
				</div>
				<p className={styles.skills__text}>{skill[0].name}</p>
			</li>
		)
	})

	return (
		<>
			<h3 className={styles.skills__heading}>Skills</h3>
			<ul className={styles.skills__list}>{skillList}</ul>
		</>
	)
}
