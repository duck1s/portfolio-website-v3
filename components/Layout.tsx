// Imports
import Head from "next/head"
import styles from "../styles/components/Layout.module.scss"
import Navigation from "./Navigation"
import Footer from "./Footer"

// Props
type LayoutProps = {
	children: React.ReactNode
}

// Page
export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" key="charset" />
				<meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
				<meta name="description" content="Joeri Breedveld Full Stack Developer Portfolio Website" />
				<link rel="icon" href="/favicon.ico" />
				<title>Joeri Breedveld | Full Stack Developer</title>

				<meta property="og:url" content="https://joeribreedveld.com/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Joeri Breedveld | Full Stack Developer" />
				<meta property="og:description" content="Hello, I'm a full stack JavaScript web developer based in Amsterdam. Take a look at my experience and projects!" />
				<meta property="og:image" content="https://cdn.ttgtmedia.com/rms/onlineimages/code_g1019737194.jpg" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="joeribreedveld.com" />
				<meta property="twitter:url" content="https://joeribreedveld.com/" />
				<meta name="twitter:title" content="Joeri Breedveld | Full Stack Developer" />
				<meta name="twitter:description" content="Hello, I'm a full stack JavaScript web developer based in Amsterdam. Take a look at my experience and projects!" />
				<meta name="twitter:image" content="https://cdn.ttgtmedia.com/rms/onlineimages/code_g1019737194.jpg" />
			</Head>
			<header className={styles.header}>
				<Navigation />
			</header>
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>
				<Footer />
			</footer>
		</>
	)
}
