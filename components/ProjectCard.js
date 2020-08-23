import styles from "../styles/Home.module.scss";

export default ({ title, description, url }) => {
	return (
		<a href={url} className={styles.card}>
			<h3>{title}</h3>
			<p>{description}</p>
		</a>
	);
};
