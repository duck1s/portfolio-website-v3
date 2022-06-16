import Link from "next/link"
import styles from "../styles/components/Footer.module.scss"
import { useRouter } from "next/router"

export default function Footer() {
	const router = useRouter()

	return (
		<>
			<section className={styles.footertop}>
				<section className={styles.contact}>
					<h4 className={styles.contact__heading}>Contact</h4>
					<ul className={styles.contact__list}>
						<li className={styles.contact__listitem}>
							<a className={styles.contact__link} href="https://www.linkedin.com/in/joeribreedveld/" target="_blank" rel="noreferrer">
								Linkedin
							</a>
						</li>
						<li className={styles.contact__listitem}>
							<a className={styles.contact__link} href="https://github.com/duck1s" target="_blank" rel="noreferrer">
								GitHub
							</a>
						</li>
						<li className={styles.contact__listitem}>
							<a className={styles.contact__link} href="mailto:joeri.breedveld123@gmail.com" target="_blank" rel="noreferrer">
								Email
							</a>
						</li>
						<li className={styles.contact__listitem}>
							<a className={styles.contact__link} href="https://www.instagram.com/joeri.bv/" target="_blank" rel="noreferrer">
								Instagram
							</a>
						</li>
					</ul>
				</section>
				<section className={styles.navigation}>
					<nav className={styles.navigation}>
						<h4 className={styles.navigation__heading}>Navigation</h4>
						<ul className={styles.navigation__list}>
							<li className={styles.navigation__listitem}>
								<Link href="/">
									<a className={router.pathname == "/" ? styles["navigation__activelink"] : styles["navigation__link"]}>Home</a>
								</Link>
							</li>
							<li className={styles.navigation__listitem}>
								<Link href="/about">
									<a className={router.pathname == "/about" ? styles["navigation__activelink"] : styles["navigation__link"]}>About</a>
								</Link>
							</li>
							<li className={styles.navigation__listitem}>
								<Link href="/projects">
									<a className={router.pathname == "/projects" ? styles["navigation__activelink"] : styles["navigation__link"]}>Projects</a>
								</Link>
							</li>
							<li className={styles.navigation__listitem}>
								<Link href="/services">
									<a className={router.pathname == "/services" ? styles["navigation__activelink"] : styles["navigation__link"]}>Services</a>
								</Link>
							</li>
						</ul>
					</nav>
				</section>
				<section className={styles.services}>
					<h4 className={styles.services__heading}>Services</h4>
					<ul className={styles.services__list}>
						<li className={styles.services__listitem}>
							<Link href="/services">
								<a className={styles.services__link}>Web Development</a>
							</Link>
						</li>
						<li className={styles.services__listitem}>
							<Link href="/services">
								<a className={styles.services__link}>Web Design</a>
							</Link>
						</li>
						<li className={styles.services__listitem}>
							<Link href="/services">
								<a className={styles.services__link}>Web Maintenance</a>
							</Link>
						</li>
					</ul>
				</section>
			</section>
			<section className={styles.footerbottom}>
				<p className={styles.footerbottom__text}>Designed and Developed by Joeri Breedveld</p>
			</section>
		</>
	)
}
