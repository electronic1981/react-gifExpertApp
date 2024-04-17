export const getGifs = async (category) => {
	//https://api.giphy.com/v1/gifs/search?api_key=SNJD9S7ny6RzUDsISb8Z40IuW6QEbT7C&q=perros

	//const url = `https://api.giphy.com/v1/gifs/search?api_key=SNJD9S7ny6RzUDsISb8Z40IuW6QEbT7C&limit=10&q=${category}`;
	// casa
	const url = `https://app.mi-computadora.net/api_public/html/gif-api?tipo=${category}`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map((dataimg) => ({
		id: dataimg.id,
		title: dataimg.title,
		url: dataimg.images.downsized_medium.url,
	}));
	return gifs;
};