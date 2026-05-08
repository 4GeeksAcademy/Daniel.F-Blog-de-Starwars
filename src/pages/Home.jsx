import { useEffect, useState } from "react";
import {
	getPeople
	getPlanets
	getStarships
} from "../services/swapi";

import { Hero } from "../components/Hero";
import { CardList } from "../components/CardList";

export const Home = () => {

	useEffect(( ) => {
	const [people, setPeople] = useState ([]);
	const [planets, setPeopleplanets] = useState ([])
	const [ships, setShips] = useState ([])
}, []);

return (
	<div className="container">
		<Hero />
	
		<CardList
		 title="Caracters"
		 items={people}
		 type="caracters"
		 />

		 <CardList 
		 title="Planets"
		 items={planets}
		 type="planets"
		 />

		 <CardList 
		 title="StarShips"
		 items={ships}
		 type="starships"
		 />

	</div>
);
};