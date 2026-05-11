import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {

	const [store, setStore] = useState({
		people: [],
		planets: [],
		starships: [],
		favorites: []
	});

	const actions = {
		setPeople: (data) =>
			setStore(prev => ({ ...prev, people: data })),

		setPlanets: (data) =>
			setStore(prev => ({ ...prev, planets: data })),

		setStarships: (data) =>
			setStore(prev => ({ ...prev, starships: data })),

isFavorite: (name) => {
	return store.favorites.includes(name);
}
	};

	return (
		<StoreContext.Provider value={{ store, actions }}>
			{children}
		</StoreContext.Provider>
	);
};