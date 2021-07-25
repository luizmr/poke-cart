import * as actionTypes from './cart-types';

const INITIAL_STATE = {
	cart: localStorage.getItem('pokemons')
		? JSON.parse(localStorage.getItem('pokemons'))
		: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART: {
			const pokemonFound = state.cart.find(
				(obj) => obj.id === action.payload.item.id,
			);
			if (pokemonFound) {
				const newCart = state.cart.map((obj) => {
					if (obj.id === pokemonFound.id) {
						return {
							...obj,
							quantity: action.payload.item.quantity,
						};
					}
					return obj;
				});

				localStorage.setItem('pokemons', JSON.stringify(newCart));

				return {
					...state,
					cart: newCart,
				};
			}
			localStorage.setItem(
				'pokemons',
				JSON.stringify([...state.cart, action.payload.item]),
			);
			return { ...state, cart: [...state.cart, action.payload.item] };
		}
		case actionTypes.REMOVE_FROM_CART: {
			const newCart = [...state.cart];

			if (action.payload.item.quantity <= 1) {
				const index = state.cart.findIndex((cartItem) => {
					return cartItem.id === action.payload.item.id;
				});
				if (index >= 0) {
					newCart.splice(index, 1);
				}
				localStorage.setItem('pokemons', JSON.stringify(newCart));
				return { ...state, cart: newCart };
			}

			const pokemonFound = state.cart.find(
				(obj) => obj.id === action.payload.item.id,
			);

			const newCartRemoval = state.cart.map((obj) => {
				if (obj.id === pokemonFound.id) {
					return {
						...obj,
						quantity: action.payload.item.quantity,
					};
				}
				return obj;
			});

			localStorage.setItem('pokemons', JSON.stringify(newCartRemoval));

			return {
				...state,
				cart: newCartRemoval,
			};
		}
		case actionTypes.REMOVE_ALL: {
			localStorage.setItem('pokemons', JSON.stringify([]));
			return {
				...state,
				cart: [],
			};
		}
		default:
			return state;
	}
};

export default cartReducer;
