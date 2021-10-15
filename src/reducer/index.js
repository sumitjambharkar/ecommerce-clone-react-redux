import productReducer from './productReducer';
import addProductReducer from './addProductReducer';

import { combineReducers } from "redux";

const rootReducer = combineReducers({productReducer,addProductReducer});

export default rootReducer;