toggleFavorite: (item) => {

	setStore((prev) => {

		const exists =
			prev.favorites.some(
				(fav) => fav.uid === item.uid
			);

		return {
			...prev,

			favorites: exists
				? prev.favorites.filter(
					(fav) => fav.uid !== item.uid
				)
				: [...prev.favorites, item]
		};
	});
}