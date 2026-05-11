import { Link } from "react-router-dom";

const getImageUrl = (type, uid) => {
	return `https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`;
};

export const Card = ({ item, type }) => {
	return (
		<div className="card-sw p-3">
			<img
				src={getImageUrl(type, item.uid)}
				className="card-img"
				alt={item.name}
				onError={(e) => {
					e.target.src =
						"https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
				}}
			/>

			<h4 className="mt-3">
				{item.name}
			</h4>

			<Link
				to={`/details/${type}/${item.uid}`}
				className="btn btn-warning mt-2"
			>
				Learn more
			</Link>
		</div>
	);
};