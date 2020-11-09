export const fetching = (url) => {
	return fetch(url)
		.then((resp) => resp.json())
		.then((data) => {
			if (data.meals) {
				return data.meals;
			} else {
				throw Error('Fetching error...');
			}
		});
};
