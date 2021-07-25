import { combineReducers } from 'redux';
import cartReducer from './PokeCart/cart-reducer';
import themeReducer from './Theme/theme-reducer';

const reducer = combineReducers({
	cart: cartReducer,
	theme: themeReducer,
});

export default reducer;
