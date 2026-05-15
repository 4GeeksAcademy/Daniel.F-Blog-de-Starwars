const placeholders = {

	characters:
		"https://starwars-visualguide.com/assets/img/placeholder.jpg",

	planets:
		"https://starwars-visualguide.com/assets/img/placeholder.jpg",

	starships:
		"https://starwars-visualguide.com/assets/img/placeholder.jpg"
};

export const getImageUrl = (
	type,
	uid
) => {

	return `https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`;
};

export const getPlaceholder =
	(type) => {

		return (
			placeholders[type] ||
			placeholders.characters
		);
	};