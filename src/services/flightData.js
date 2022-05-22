const axios = require("axios");


function searchCity(value){
    const options = {
      method: 'GET',
      url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/locations',
      params: {name: value},
      headers: {
        'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com',
        'X-RapidAPI-Key': '0087d3d501msh152502ca407638ep178c7fjsnda0c08b1a3c2'
      }
    };
    
    axios.request(options).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });

}

async function searchFlight(){
    const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/search',
    params: {
        itinerary_type: 'ROUND_TRIP',
        class_type: 'ECO',
        location_arrival: 'RIO',
        date_departure: '2022-11-15',
        location_departure: 'LIS',
        sort_order: 'PRICE',
        price_max: '20000',
        number_of_passengers: '1',
        duration_max: '2051',
        price_min: '100',
        date_departure_return: '2022-11-16'
    },
    headers: {
        'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com',
        'X-RapidAPI-Key': '0087d3d501msh152502ca407638ep178c7fjsnda0c08b1a3c2'
    }
    };

    await axios.request(options).then( (response) => {
        console.log(response.data)
        return response.data
    }).catch(function (error) {
        console.error(error);
    });
}

const flightData = {
    searchCity,
    searchFlight
}

export default flightData;