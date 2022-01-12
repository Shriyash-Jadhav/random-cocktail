import { createStore, action } from "easy-peasy";

const drinks = {
	cart: [],
	addtoCart: action((state, payload) => {
		const drinksIndex = state.cart?.findIndex(
			(drink) => drink.idDrink === payload.idDrink
		);
		if (drinksIndex === -1) state.cart.push(payload);
		else
			state.cart = state.cart?.filter(
				(drink) => drink.idDrink !== payload.idDrink
			);
		localStorage.setItem("cart", JSON.stringify(state.cart));
	}),
	setCart: action((state, payload) => {
		state.cart = payload;
	}),
};

const store = {
	drinks,
};

export default createStore(store);
