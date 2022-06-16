// Imports
import type { NextPage } from "next"
import styles from "../styles/pages/Home.module.scss"

// Page
const Home: NextPage = () => {
	return (
		<>
			<section className={styles.home}>
				<h1 className={styles.homeleft__heading}>Joeri Breedveld</h1>
				<div className={styles.home__text}>
					<p>Hello, I&rsquo;m a full stack JavaScript web developer based in Amsterdam, Netherlands.</p>
					<p>Currently studying software development at Mediacollege Amsterdam.</p>
				</div>
				<ul className={styles.home__list}>
					<li className={styles.home__listitem}>
						<a className={styles.home__link} href="https://www.linkedin.com/in/joeribreedveld/" target="_blank" rel="noreferrer">
							Linkedin
						</a>
					</li>
					<li className={styles.home__listitem}>
						<a className={styles.home__link} href="https://github.com/duck1s" target="_blank" rel="noreferrer">
							GitHub
						</a>
					</li>
					<li className={styles.home__listitem}>
						<a className={styles.home__link} href="mailto:joeri.breedveld123@gmail.com" target="_blank" rel="noreferrer">
							Email
						</a>
					</li>
					<li className={styles.home__listitem}>
						<a className={styles.home__link} href="https://www.instagram.com/joeri.bv/" target="_blank" rel="noreferrer">
							Instagram
						</a>
					</li>
				</ul>
			</section>
		</>
	)
}

export default Home
