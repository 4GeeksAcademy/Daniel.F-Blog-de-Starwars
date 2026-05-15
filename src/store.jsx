import {
	createContext,
	useEffect,
	useState
} from "react";

export const StoreContext =
	createContext();

const initialStore = {
	people: [],
	planets: [],
	starships: [],
	favorites: []
};

export const StoreProvider = ({
	children
}) => {

	const [store, setStore] =
		useState(() => {

			const saved =
				localStorage.getItem(
					"starwars-store"
				);

			return saved
				? JSON.parse(saved)
				: initialStore;
		});

	useEffect(() => {

		localStorage.setItem(
			"starwars-store",
			JSON.stringify(store)
		);

	}, [store]);

	const actions = {

		setPeople: (data) =>
			setStore((prev) => ({
				...prev,
				people: data
			})),

		setPlanets: (data) =>
			setStore((prev) => ({
				...prev,
				planets: data
			})),

		setStarships: (data) =>
			setStore((prev) => ({
				...prev,
				starships: data
			})),

		toggleFavorite: (item) => {

			setStore((prev) => {

				const exists =
					prev.favorites.some(
						(fav) =>
							fav.uid === item.uid
					);

				return {
					...prev,

					favorites: exists
						? prev.favorites.filter(
								(fav) =>
									fav.uid !== item.uid
						  )
						: [
								...prev.favorites,
								item
						  ]
				};
			});
		}
	};

	return (
		<StoreContext.Provider
			value={{
				store,
				actions
			}}
		>
			{children}
		</StoreContext.Provider>
	);
};