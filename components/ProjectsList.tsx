// Imports
import styles from "../styles/components/ProjectsList.module.scss"
import Image from "next/image"
import { useRouter } from "next/router"

// Icons
import projects from "../public/assets/json/projects.json"

// Page
export default function ProjectsList() {
	const router = useRouter()

	const projectList = projects.map((project) => {
		console.log(project[0].id)
		console.log(project[0].name)
		console.log(project[0].img)

		return (
			<li key={project[0].id} className={styles.projects__listitem}>
				<div className={styles.projects__img}>
					<Image alt="Project" src={project[0].img} layout="fill" objectFit="cover"></Image>
				</div>
				<div className={styles.projects__content}>
					<div className={styles.projects__text}>
						<h4>{project[0].name}</h4>
						<p>{project[0].description}</p>
						<div className={styles.projects__links}>
							<a className={styles.projects__link} href={project[0].link} target="_blank" rel="noreferrer">
								GitHub
							</a>
						</div>
					</div>
				</div>
			</li>
		)
	})

	return (
		<>
			<ul className={styles.projects__list}>{projectList}</ul>
		</>
	)
}
