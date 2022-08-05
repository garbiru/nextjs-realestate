import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			"X-RapidAPI-Key": "404f866806msh3f17e1b2c44619ep1972ccjsnef624fa03c46",
			"X-RapidAPI-Host": "bayut.p.rapidapi.com",
		},
	});

	return data;
};
