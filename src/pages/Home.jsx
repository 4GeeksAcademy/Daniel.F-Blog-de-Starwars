import { useEffect, useState } from "react";

import {
	getPeople,
	getPlanets,
	getStarships
} from "../services/swapi";

import { Hero } from "../components/Hero";
import { CardList } from "../components/CardList";
import { Loader } from "../components/Loader";


export const Home = () => {

	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [starships, setStarships] = useState([]);

	const [loading, setLoading] = useState(true);

	useEffect(() => {

		const loadData = async () => {

			const [peopleData, planetsData, shipsData] =
				await Promise.all([
					getPeople(),
					getPlanets(),
					getStarships()
				]);

			setPeople(peopleData);
			setPlanets(planetsData);
			setStarships(shipsData);

			setLoading(false);
		};

		loadData();

	}, []);

	if (loading) return <Loader />;

	return (
		<div className="container py-4">

			<Hero />

			<CardList
				title="Characters"
				items={people}
				type="characters"
			/>

			<CardList
				title="Planets"
				items={planets}
				type="planets"
			/>

			<CardList
				title="Starships"
				items={starships}
				type="starships"
			/>

		</div>
	);
};