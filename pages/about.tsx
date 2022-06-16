// Imports
import type { NextPage } from "next"
import styles from "../styles/pages/About.module.scss"
import Skills from "../components/Skills"
import Experience from "../components/Experience"

// Page
const About: NextPage = () => {
	return (
		<>
			<section className={styles.about}>
				<section className={styles.introduction}>
					<h2 className={styles.about__heading}>About</h2>
					<div className={styles.introduction__widget}>
						<p className={styles.introduction__text}>
							Hello, my name is Joeri Breedveld. I am a seventeen year old full-stack developer based in Amsterdam. I have been programming for one year. I am currently studying software
							development at Mediacollege Amsterdam. I am very motivated to learn new things and I work every day to improve my coding skills.
						</p>
					</div>
				</section>
				<Skills />
				<Experience />
			</section>
		</>
	)
}

export default About
