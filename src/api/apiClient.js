import axios from "axios";

const API_ROOT  = "https://api.coronatracker.com/v3/stats/worldometer";

const request = axios.create({
    baseURL: API_ROOT,
    responseType: "json"
});

const common = {
    fetchCountry: (countryCode) => request.get(`/country?countryCode=${countryCode}`),
    fetchTopCountries: id => request.get(`/topCountry`),
    global: () => request.get(`/global`),
    news:(countryCode,countryName)=>axios.get(  `https://api.coronatracker.com/news/trending?limit=5&&offset=0&countryCode=${countryCode}&country=${countryName ?? "turkey"}&language=en`)
}
const apiClient ={
    common,
}



export default apiClient;
