import * as actionTypes from './cart-types';

export const addToCart = (item) => {
	return {
		type: actionTypes.ADD_TO_CART,
		payload: {
			item,
		},
	};
};

export const removeFromCart = (item) => {
	return {
		type: actionTypes.REMOVE_FROM_CART,
		payload: {
			item,
		},
	};
};

export const removeAllFromCart = () => {
	return {
		type: actionTypes.REMOVE_ALL,
	};
};
