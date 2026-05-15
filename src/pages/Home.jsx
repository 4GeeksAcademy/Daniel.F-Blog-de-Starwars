import {
	useContext,
	useEffect,
	useState
} from "react";

import {
	StoreContext
} from "../store.jsx";

import {
	getPeople,
	getPlanets,
	getStarships
} from "../services/swapi";

import { Hero } from "../components/Hero";
import { CardList } from "../components/CardList";
import { Loader } from "../components/Loader";

export const Home = () => {

	const { store, actions } =
		useContext(StoreContext);

	const [loading, setLoading] =
		useState(false);

	useEffect(() => {

		const loadData = async () => {

			if (
				store.people.length &&
				store.planets.length &&
				store.starships.length
			) {
				return;
			}

			setLoading(true);

			const [
				people,
				planets,
				starships
			] = await Promise.all([
				getPeople(),
				getPlanets(),
				getStarships()
			]);

			actions.setPeople(people);
			actions.setPlanets(planets);
			actions.setStarships(starships);

			setLoading(false);
		};

		loadData();

	}, []);

	if (loading) return <Loader />;

	return (

		<div className="container-fluid">

			<Hero />

			<CardList
				title="Characters"
				items={store.people}
				type="characters"
			/>

			<CardList
				title="Planets"
				items={store.planets}
				type="planets"
			/>

			<CardList
				title="Starships"
				items={store.starships}
				type="starships"
			/>

		</div>
	);
};