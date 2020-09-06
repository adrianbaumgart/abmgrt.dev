import Page from "../components/Page";
import SocialLink from "../components/SocialLink";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div>
			<h1>eta s0n</h1>
			<div>
				<a href="https://go.abmgrt.dev/hbVgep" target="_blank">
					Load website
				</a>
			</div>
			<div>
				<a href="/privacy">Privacy</a>
			</div>
			<div>
				<a href="/legaldisclosure">Legal disclosure</a>
			</div>
		</div>
	);
	/*return (
		<Page title="Adrian" mainClass="indexSite">
			<div>
				<div className="mainheader">
					<img
						className="headerPfp"
						//src="https://avatar.alles.cc/87cd0529-f41b-4075-a002-059bf2311ce7"
						src="https://github.com/adrianbaumgart.png"
					/>
					<h1 className="sitetitle">Adrian Baumgart</h1>
					<h2>Software dev • Student</h2>
					<SocialLink
						name="Adrian#0001"
						url="https://micro.alles.cx/adrian"
						img="../static/allesLogo.png"
						darkimg="../static/allesLogo.png"
					/>
					<SocialLink
						name="@adrianbaumgart"
						url="https://twitter.com/adrianbaumgart"
						img="../static/twitter.png"
						darkimg="../static/twitter.png"
					/>
					<SocialLink
						name="@adrianbaumgart"
						url="https://github.com/adrianbaumgart"
						img="../static/github.png"
						darkimg="../static/github_light.png"
					/>
				</div>
				<h1 className="sectionTitle">About</h1>
				<p>
					Hello! I am Adrian. I'm a self-taught developer, mainly front-end.
					Most of the time I develop iOS apps (or destroy servers), but
					sometimes I do some other stuff as well. You can find some projects on{" "}
					<a href="https://github.com/adrianbaumgart" className="blueLink">
						GitHub
					</a>
					.
				</p>

				<h1 className="sectionTitle">Projects</h1>

				<div className={styles.grid}>
					<ProjectCard
						title="Spica"
						description="An iOS client for Alles Micro"
						url="https://github.com/SpicaApp"
					/>

					<ProjectCard
						title="Mira"
						description="Mira is a note-taking app for iOS and iPadOS"
						url="https://mira.fliney.eu"
					/>

					<ProjectCard
						title="KlassenApp"
						description="An app by a friend and me to help our class organizing their school life."
						url="https://klassenappd.de"
					/>

					<ProjectCard
						title="AppFall"
						description='A multiuser shopping list for shared apartments. Developed at the "Jugend hackt" event 2018 in Heidelberg.'
						url="https://appfall.github.io"
					/>
				</div>
				<Footer />
			</div>
		</Page>
	);*/
}
