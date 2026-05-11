const BASE_URL = "https://www.swapi.tech/api";

const fetchData = async (endpoint) => {
	try {
		const response = await fetch(`${BASE_URL}/${endpoint}`);

		if (!response.ok) {
			throw new Error("Error fetching data");
		}

		const data = await response.json();

		return data.results || [];

	} catch (error) {

		console.error(error);

		return [];
	}
};

export const getPeople = () => fetchData("people");

export const getPlanets = () => fetchData("planets");

export const getStarships = () => fetchData("starships");

export const getDetails = async (endpoint, uid) => {

	try {

		const response = await fetch(
			`${BASE_URL}/${endpoint}/${uid}`
		);

		if (!response.ok) {
			throw new Error("Error fetching details");
		}

		const data = await response.json();

		return data.result.properties;

	} catch (error) {

		console.error(error);

		return null;
	}
};