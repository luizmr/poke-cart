import * as actionTypes from './theme-types';

export const changeToFire = (item) => {
	return {
		type: actionTypes.FIRE_THEME,
		payload: {
			item,
		},
	};
};

export const changeToGrass = (item) => {
	return {
		type: actionTypes.GRASS_THEME,
		payload: {
			item,
		},
	};
};

export const changeToWater = (item) => {
	return {
		type: actionTypes.WATER_THEME,
		payload: {
			item,
		},
	};
};
