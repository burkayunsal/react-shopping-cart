import {FETCH_PRODUCTS} from "../components/Types";

export const fetchProducts = () =>  async (dispatch) => {

const res =	await fetch("https://jsonplaceholder.typicode.com/photos");
const data = await res.json();
	dispatch({
		type: FETCH_PRODUCTS,
		payload: data,
	});
};
