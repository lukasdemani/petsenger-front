import api from "./api";
import flightService from "./flightService";

async function getQuote(flightData) {
    const flightPrice = await flightService.searchFlight(flightData);
    const response = await api.post("/quote", flightPrice);
    console.log(response)
    return response.data
  }
  

const quoteService = {
    getQuote
}

export default quoteService;
