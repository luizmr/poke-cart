import * as actionTypes from './theme-types';

const themes = ['fire', 'water', 'grass'];

const INITIAL_STATE = {
	theme: localStorage.getItem('theme')
		? themes.indexOf(localStorage.getItem('theme')) > -1
			? localStorage.getItem('theme')
			: 'fire'
		: 'fire',
};

const themeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.FIRE_THEME: {
			localStorage.setItem('theme', 'fire');
			return { ...state, theme: action.payload.item };
		}
		case actionTypes.GRASS_THEME: {
			localStorage.setItem('theme', 'grass');
			return { ...state, theme: action.payload.item };
		}
		case actionTypes.WATER_THEME: {
			localStorage.setItem('theme', 'water');
			return { ...state, theme: action.payload.item };
		}
		default:
			return state;
	}
};

export default themeReducer;
