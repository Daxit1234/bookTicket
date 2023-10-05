const baseUrl = 'https://ott-details.p.rapidapi.com/';
const api_key=process.env.REACT_APP_API_KEY;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': api_key,
		'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
	}
};

 export const fetchDataFromApi=async(url)=>{
    try {
        const response = await fetch(baseUrl+url, options);
        const result = await response.text();
        const data=JSON.parse(result)
        return data
    } catch (error) {
        console.error(error);
    }
}
