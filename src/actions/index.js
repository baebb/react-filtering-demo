import data from '../../VodafoneTestDocs/celebrityRichList';

export const GET_COUNTRIES = 'GET_COUNTRIES';

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