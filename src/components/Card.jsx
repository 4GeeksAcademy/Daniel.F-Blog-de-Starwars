import { useContext } from "react";

import { Link } from "react-router-dom";

import {
	StoreContext
} from "../store.jsx";

import {
	getImageUrl
} from "../utils/images";

export const Card = ({
	item,
	type
}) => {

	const { store, actions } =
		useContext(StoreContext);

	const isFavorite =
		store.favorites.some(
			(fav) =>
				fav.uid === item.uid &&
				fav.type === type
		);

	return (

		<div className="sw-card">

			<img
				src={getImageUrl(type, item.uid)}

				alt={item.name}

				onError={(e) => {

					e.target.onerror = null;

					e.target.src =
						getPlaceholder(type);
				}}
			/>

			<div className="card-body">

				<h3>{item.name}</h3>

				<div className="card-actions">

					<Link
						to={`/details/${type}/${item.uid}`}
						className="btn btn-warning"
					>
						Details
					</Link>

					<button
						className="btn btn-dark"
						onClick={() =>
							actions.toggleFavorite({
								uid: item.uid,
								name: item.name,
								type
							})
						}
					>
						{
							isFavorite
								? "❤️"
								: "🤍"
						}
					</button>

				</div>

			</div>

		</div>
	);
};