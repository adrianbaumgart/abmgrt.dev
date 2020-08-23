export default ({ name, url, img }) => {
	return (
		<div className="sociallink">
			<img src={img} />
			<a href={url}>{name}</a>
		</div>
	);
};
