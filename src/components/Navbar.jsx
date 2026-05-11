import { useContext, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../store.jsx";

export const Navbar = () => {

	const { store } = useContext(StoreContext);
	const navigate = useNavigate();
	const [query, setQuery] = useState("");

	const results = useMemo(() => {

		if (!query) return [];

		const allItems = [
			...store.people.map((item) => ({
				...item,
				type: "characters"
			})),

			...store.planets.map((item) => ({
				...item,
				type: "planets"
			})),

			...store.starships.map((item) => ({
				...item,
				type: "starships"
			}))
		];

		return allItems.filter((item) =>
			item.name.toLowerCase().includes(query.toLowerCase())
		);

	}, [query, store]);

	return (
		<nav className="navbar navbar-dark bg-black px-4">

			<Link to="/" className="navbar-brand text-warning">
				STAR WARS
			</Link>

			<div className="position-relative">

				<input
					type="text"
					className="form-control"
					placeholder="Search..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>

				{results.length > 0 && query && (

					<div className="autocomplete-box">

						{results.slice(0, 8).map((item) => (
							<div
								key={`${item.type}-${item.uid}`}
								className="autocomplete-item"
								onClick={() => {
									navigate(`/details/${item.type}/${item.uid}`);
									setQuery("");
								}}
							>
								{item.name}
							</div>
						))}

					</div>

				)}

			</div>

			<div className="text-warning">
				Favorites: {store.favorites?.length || 0}
			</div>

		</nav>
	);
};