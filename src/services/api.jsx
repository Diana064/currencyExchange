import axios from 'axios';

const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';

export async function fetchCurrency({ latitude, longitude }) {
  const { data } = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=en`
  );
  console.log(data.results);
  return data.results;
}
var myHeaders = new Headers();
myHeaders.append('apikey', 'Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj');

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};
export const changeCurrency = async ({ to, from, amount }) => {
  const response = await fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  );
  const data = await response.json();
  return data;
};
export const latestCurrency = async baseCurrency => {
  const response = await fetch(
    `https://api.apilayer.com/exchangerates_data/latest?symbols=USD,GBP,EUR,JPY&base=${baseCurrency}`,
    requestOptions
  );
  const data = await response.json();
  return data;
};
