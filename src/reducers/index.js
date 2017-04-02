import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import dataReducer from './reducer_data';

const rootReducer = combineReducers({
  routing: routerReducer,
  data: dataReducer
});

export default rootReducer;
