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
				<div className={styles.projects__imagecontainer}>
					<Image className={styles.projects__img} src={project[0].img} layout="fill" objectFit="cover"></Image>
				</div>
				<div className={styles.projects__textcontainer}>
					<p className={styles.projects__heading}>{project[0].name}</p>
					<p className={styles.projects__text}>{project[0].description}</p>
				</div>
				<div className={styles.projects__iconcontainer}>
					<Image onClick={() => window.open(`${project[0].githublink}`, "_ blank")} className={styles.projects__icon} src={"/assets/icons/github.svg"} height={20} width={20}></Image>
					<Image onClick={() => window.open(`${project[0].websitelink}`, "_ blank")} className={styles.projects__icon} src={"/assets/icons/link.svg"} height={20} width={20}></Image>
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
