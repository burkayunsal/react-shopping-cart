import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducers/Reducer";

const initialState = {};

const store = createStore(
    combineReducers({
        products: productReducer,
    }),
    initialState,
     applyMiddleware(thunk)
);


export default store;