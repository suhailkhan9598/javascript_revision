<!-- # javascript_revision



const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://siddiq-such-flight-v1.p.rapidapi.com/search',
  params: {
    to: 'LHE',
    from: 'DXB',
    'depart-date': '2015-03-31',
    'return-date': '2015-04-07'
  },
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'siddiq-such-flight-v1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
} -->