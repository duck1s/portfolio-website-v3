// Imports
import type { NextPage } from "next"
import styles from "../styles/pages/Projects.module.scss"
import Image from "next/image"
import ProjectsList from "../components/ProjectsList"

// Page
const Projects: NextPage = () => {
	return (
		<>
			<section className={styles.projects}>
				<aside className={styles.projectsleft}>
					<h2 className={styles.projects__heading}>Projects</h2>
					<Image className={styles.projectsleft__img} src={"/assets/undraw-projects.svg"} width={500} height={400} />
				</aside>
				<section className={styles.projectsright}>
					<ProjectsList />
				</section>
			</section>
		</>
	)
}

export default Projects
