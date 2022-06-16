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
				<h2 className={styles.projects__heading}>Projects</h2>
				<ProjectsList />
			</section>
		</>
	)
}

export default Projects
