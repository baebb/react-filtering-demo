import {GET_COUNTRIES} from '../actions/index'

const INIT_STATE = {countryList: []}

export default function (state = INIT_STATE, action) {
  switch(action.type) {
    case GET_COUNTRIES:
      return {...state, countryList: action.payload};
    default:
      return state;
  }
}