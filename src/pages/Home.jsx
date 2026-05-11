import { useContext, useEffect, useState } from "react";

import { Navbar } from "../components/Navbar";

import {
	getPeople,
	getPlanets,
	getStarships
} from "../services/swapi";

import { Hero } from "../components/Hero";
import { CardList } from "../components/CardList";
import { Loader } from "../components/Loader";

import { StoreContext } from "../store.jsx";

export const Home = () => {

	const { store, actions } = useContext(StoreContext);

	const [loading, setLoading] = useState(false);

	useEffect(() => {

		const loadData = async () => {

			if (
				store.people.length > 0 &&
				store.planets.length > 0 &&
				store.starships.length > 0
			) {
				return;
			}

			setLoading(true);

			const [people, planets, starships] =
				await Promise.all([
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

		<div>

			<Navbar />

			<div className="container py-4">

				<Hero />

				<CardList
					title="Characters"
					items={store.people}
					type="characters"
					actions={actions}
				/>

				<CardList
					title="Planets"
					items={store.planets}
					type="planets"
					actions={actions}
				/>

				<CardList
					title="Starships"
					items={store.starships}
					type="starships"
					actions={actions}
				/>

			</div>

		</div>
	);
};