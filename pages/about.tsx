// Imports
import type { NextPage } from "next"
import styles from "../styles/pages/About.module.scss"
import Skills from "../components/Skills"
import Image from "next/image"

// Page
const About: NextPage = () => {
	return (
		<>
			<section className={styles.about}>
				<section className={styles.aboutleft}>
					<section className={styles.aboutleft__content}>
						<h2 className={styles.about__heading}>About</h2>
						<p className={styles.about__text}>
							Hello, my name is Joeri Breedveld. I am a seventeen year old full-stack developer based in Amsterdam. I have been programming for one year. I am currently studying software
							development at Mediacollege Amsterdam. I am very motivated to learn new things and I work every day to improve my coding skills.
						</p>
					</section>
					<section className={styles.skills}>
						<Skills />
					</section>
				</section>
				<aside className={styles.aboutright}>
					<Image className={styles.aboutaside} src={"/assets/undraw-about.svg"} width={500} height={400} />
				</aside>
			</section>
		</>
	)
}

export default About
