import data from '../../VodafoneTestDocs/celebrityRichList';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_CELEBS = 'GET_CELEBS';
export const GET_RATES = 'GET_RATES';

export function getCountries() {
  const countries = {};
  for (let celeb of data.celebrityList) {
    countries[celeb.country] = 1;
  }
  const countryList = Object.keys(countries);
  
  return {
    type: GET_COUNTRIES,
    payload: countryList
  }
}

export function getCelebs() {
  return {
    type: GET_CELEBS,
    payload: data.celebrityList
  }
}

export function getCurrencyRates() {
  return {
    type: GET_RATES,
    payload: {
      usd: data.usDollarValue,
      euro: data.euroValue,
      aud: data.australianDollarValue
    }
  }
}