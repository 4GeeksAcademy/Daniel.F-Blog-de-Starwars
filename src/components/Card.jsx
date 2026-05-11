import { Link } from "react-router-dom";

const getImageUrl = (type, uid) => {
	return `https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`;
};

export const Card = ({ item, type, actions }) => {

	const isFavorite = actions.isFavorite(item.name);

	return (
		<div className="card-sw p-3">

			<img
				src={getImageUrl(type, item.uid)}
				alt={item.name}
				className="card-img"
				onError={(e) => {
					e.target.src =
						"https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
				}}
			/>

			<h4 className="mt-3">
				{item.name}
			</h4>

			<div className="d-flex justify-content-between mt-3">

				<Link
					to={`/details/${type}/${item.uid}`}
					className="btn btn-warning"
				>
					Learn more
				</Link>

				<button
					className="btn btn-outline-light"
					onClick={() => actions.toggleFavorite(item.name)}
				>
					{
						isFavorite
							? "❤️"
							: "🤍"
					}
				</button>

			</div>

		</div>
	);
};