// Imports
import Link from "next/link"
import styles from "../styles/components/Navigation.module.scss"
import { useRouter } from "next/router"
import Image from "next/image"
import { useState } from "react"

// Page
export default function Navigation() {
	const router = useRouter()
	const [active, setActive] = useState(false)

	return (
		<>
			<nav className={styles.navigationbar}>
				<div className={styles.navflex}>
					<h3 onClick={() => router.push("/")} className={styles.navigationbar__heading}>
						Joeri Breedveld
					</h3>
					<ul className={styles.navigationbar__list}>
						<li className={styles.navigationbar__listitem}>
							<Link href="/">
								<a className={router.pathname == "/" ? styles["navigationbar__link--active"] : styles["navigationbar__link"]}>Home</a>
							</Link>
						</li>
						<li className={styles.navigationbar__listitem}>
							<Link href="/about">
								<a className={router.pathname == "/about" ? styles["navigationbar__link--active"] : styles["navigationbar__link"]}>About</a>
							</Link>
						</li>
						<li className={styles.navigationbar__listitem}>
							<Link href="/projects">
								<a className={router.pathname == "/projects" ? styles["navigationbar__link--active"] : styles["navigationbar__link"]}>Projects</a>
							</Link>
						</li>
						<li className={styles.navigationbar__listitem}>
							<Link href="/services">
								<a className={router.pathname == "/services" ? styles["navigationbar__link--active"] : styles["navigationbar__link"]}>Services</a>
							</Link>
						</li>
						<li className={styles.navigationbar__listitem}>
							<Link href="/contact">
								<a className={router.pathname == "/contact" ? styles["navigationbar__link--active"] : styles["navigationbar__link"]}>Contact</a>
							</Link>
						</li>
					</ul>
					<div onClick={() => setActive(!active)} className={styles.hamburger}>
						<div>
							<Image src={"/assets/menu.svg"} width={25} height={25}></Image>
						</div>
					</div>
				</div>

				<ul className={active ? styles["mobilenavigationbar--active"] : styles["mobilenavigationbar"]}>
					<li className={styles.mobilenavigationbar__listitem}>
						<Link href="/">
							<a className={router.pathname == "/" ? styles["mobilenavigationbar__link--active"] : styles["mobilenavigationbar__link"]}>Home</a>
						</Link>
					</li>
					<li className={styles.mobilenavigationbar__listitem}>
						<Link href="/about">
							<a className={router.pathname == "/about" ? styles["mobilenavigationbar__link--active"] : styles["mobilenavigationbar__link"]}>About</a>
						</Link>
					</li>
					<li className={styles.mobilenavigationbar__listitem}>
						<Link href="/projects">
							<a className={router.pathname == "/projects" ? styles["mobilenavigationbar__link--active"] : styles["mobilenavigationbar__link"]}>Projects</a>
						</Link>
					</li>
					<li className={styles.mobilenavigationbar__listitem}>
						<Link href="/services">
							<a className={router.pathname == "/services" ? styles["mobilenavigationbar__link--active"] : styles["mobilenavigationbar__link"]}>Services</a>
						</Link>
					</li>
					<li className={styles.mobilenavigationbar__listitem}>
						<Link href="/contact">
							<a className={router.pathname == "/contact" ? styles["mobilenavigationbar__link--active"] : styles["mobilenavigationbar__link"]}>Contact</a>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}
