import {GET_COUNTRIES, GET_CELEBS} from '../actions/index'

const INIT_STATE = {countryList: [], celebrityList: []};

export default function (state = INIT_STATE, action) {
  switch(action.type) {
    case GET_COUNTRIES:
      return {...state, countryList: action.payload};
    case GET_CELEBS:
      return {...state, celebrityList: action.payload};
    default:
      return state;
  }
}