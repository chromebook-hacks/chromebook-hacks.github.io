import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
// Import the MDX content
import HomepageContentMdx from "./homepage-content.mdx";
import Admonition from "@theme/Admonition";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/get-started"
					>
						Get Started
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`${siteConfig.title}`}
			description="An exploit guide and wiki for a wide variety of Chromebook exploits and tools"
		>
			<HomepageHeader />
			<main>
				<div className="col col--8 col--offset-2 markdown">
					<HomepageContentMdx />
					<div>
						<Admonition type="tip" title="Next">
							<p>Continue to <Link to="/docs/get-started"><b>Get Started</b></Link></p>
						</Admonition>
					</div>
					<br />
				</div>
			</main>
		</Layout>
	);
}
