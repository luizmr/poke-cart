import React, { useState, useEffect } from 'react';

// components
import CartButtons from '../../components/CartButtons/CartButtons';
import TabSummary from './components/TabSummary';

// utils
import { connect } from 'react-redux';
import { removeAllFromCart } from '../../store/PokeCart/cart-actions';
import GetTypesQuantity from '../../utils/getTypesQuantity';

const Cart = ({ cart, removeAllFromCart }) => {
	const [cartItems, setCartItems] = useState([]);
	const [typesQuantity, setTypesQuantity] = useState({});
	const [pokeQuantity, setPokeQuantity] = useState([]);

	useEffect(() => {
		setCartItems(cart);
		setTypesQuantity(GetTypesQuantity(cart));
		let pokeObj = [];
		cart.forEach((obj) => {
			return pokeObj.push({
				name: obj.name.toUpperCase(),
				quantity: obj.quantity,
				type: obj.types[0].type.name,
			});
		});
		setPokeQuantity(pokeObj);
	}, [cart]);

	return (
		<div className="cart">
			<CartButtons
				handleDeleteItems={removeAllFromCart}
				cart={cart}
				toPokedex={false}
			/>
			<TabSummary
				items={cartItems}
				typesQuantity={typesQuantity}
				pokeQuantity={pokeQuantity}
			/>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.cart.cart,
	};
};

export default connect(mapStateToProps, { removeAllFromCart })(Cart);
