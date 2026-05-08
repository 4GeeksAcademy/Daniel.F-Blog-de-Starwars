const BASE_URL = "https://www.swapi.tech/api";

export const getPeople = async () => {
    const response = await fetch(`${BASE_URL}/people`);
    const data = await response.json();
    return data.results;
};

export const getPlanets = async () => {
    const response = await fetch(`${BASE_URL}/planets`);
    const data = await response.json();
    return data.results;
};

export const getStarships = async () => {
    const response = await fetch(`${BASE_URL}/starships`);
    const data = await response.json();
    return data.results;
};

export const getDetails = async (endpoint, uid) => {
    const response = await fetch(`${BASE_URL}/${endpoint}/${uid}`);
    const data = await response.json();
    return data.result.properties;
};