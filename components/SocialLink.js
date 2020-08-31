export default ({ name, url, img, darkimg }) => {
	return (
		<div className="sociallink">
			<picture>
				<source srcset={darkimg} media="(prefers-color-scheme: dark)" />
				<img src={img} />
			</picture>
			<a href={url}>{name}</a>
		</div>
	);
};
