const baseUrl = 'https://ott-details.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		// 'X-RapidAPI-Key': '3e4413209bmshe1f993c54217b42p149a13jsn7f481d93c921',
		// 'X-RapidAPI-Key': '1ece91e36cmsh2aada324997c6efp14e9adjsn59d2100838bf',
		// 'X-RapidAPI-Key': '786a0e4231msh0fad0f36ff3cee1p1cbfc7jsne6e1c8b3e26f',
		//'X-RapidAPI-Key': '6af98441ebmsh8d32038934f0322p12a280jsn283855d79cfa',   //203
		//  'X-RapidAPI-Key': '662e55d11amsh8a84cc4cf9a5cf5p1b997ajsnf9e9139b2d37',  //303
		//'X-RapidAPI-Key': 'e42dfde31bmshedbc7797d45bd7ep1c5307jsn1b2e363befdf',  //srushti
		 'X-RapidAPI-Key': 'd1986672c8msh3fb126d6c08a566p1781d6jsn82a5175ba48b',  //milan 1
		// 'X-RapidAPI-Key': 'ac0d893883msh176caefea3b9083p1d4e27jsn1e0606d31233',  //milan 2
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
