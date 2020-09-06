import Head from "next/head";
import Link from "next/link";

export default ({ title, children, mainClass }) => {
	return (
		<div className="page">
			<Head>
				<title>{title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className="header">
				<Link href="/">
					<a className="headerContent">
						<img
							src="https://github.com/adrianbaumgart.png"
							//src="https://avatar.alles.cc/87cd0529-f41b-4075-a002-059bf2311ce7"
						/>
						<h2>{title}</h2>
					</a>
				</Link>
			</div>
			<main className={mainClass}>{children}</main>
		</div>
	);
};
