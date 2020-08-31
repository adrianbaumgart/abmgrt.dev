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
						<img src="https://avatar.alles.cc/87cd0529-f41b-4075-a002-059bf2311ce7" />
						<h2>{title}</h2>
					</a>
				</Link>
			</div>
			<main className={mainClass}>{children}</main>
		</div>
		/*<div>
			<Head>
				<title>{title}</title>
				<link
					rel="shortcut icon"
					href="https://avatar.alles.cc/00000000-0000-0000-0000-000000000000"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Inter:300,400,500,700&display=swap"
				/>
			</Head>

			<Link href="/">
				<a>
					<img src="https://avatar.alles.cc/00000000-0000-0000-0000-000000000000" />
					<div>
						<h1>{title}</h1>
					</div>
				</a>
			</Link>

			<main>{children}</main>
		</div>*/
	);
};
