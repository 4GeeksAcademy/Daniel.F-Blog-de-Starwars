const BASE_URL =
	"https://www.swapi.tech/api";

const fetchData = async (endpoint) => {

	const response =
		await fetch(
			`${BASE_URL}/${endpoint}`
		);

	const data =
		await response.json();

	return data.results;
};

export const getPeople =
	() => fetchData("people");

export const getPlanets =
	() => fetchData("planets");

export const getStarships =
	() => fetchData("starships");

export const getDetails =
	async (type, uid) => {

		const response =
			await fetch(
				`${BASE_URL}/${type}/${uid}`
			);

		const data =
			await response.json();

		return data.result.properties;
	};