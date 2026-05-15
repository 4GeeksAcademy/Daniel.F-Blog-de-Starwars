import { useContext } from "react";
import { StoreContext } from "../store.jsx";

export const Card = ({ item, type }) => {

	const { store, actions } =
		useContext(StoreContext);

	const isFavorite =
		store.favorites.some(
			(fav) => fav.uid === item.uid
		);

	return (

		<div className="sw-card">

			<img
				src={item.image}
				alt={item.name}
			/>

			<h3>{item.name}</h3>

			<div className="card-actions">

				<button
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
	);
};