import {configureStore, combineReducers} from '@reduxjs/toolkit'
import auth from "./auth.js";
import customer from "./customer";

const reducer = combineReducers({auth, customer})
export default configureStore({reducer})