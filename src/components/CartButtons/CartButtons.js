import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// material-ui/icons
import { Button } from '@material-ui/core';
import { FiTrash, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const CartButtons = ({ handleDeleteItems, cart, toPokedex }) => {
	const history = useHistory();
	const [pokeQuantity, setPokeQuantity] = useState(0);

	useEffect(() => {
		if (cart.length) {
			setPokeQuantity(cart.length);
		} else {
			setPokeQuantity(0);
		}
	}, [cart]);

	return (
		<div className="cart__header">
			<Button
				className="button__back button__common"
				onClick={() => {
					history.push('/');
				}}
			>
				<FiArrowLeft />
				<p>Voltar</p>
			</Button>
			{!!cart.length && (
				<div className="buttons__right">
					{pokeQuantity >= 1 && toPokedex && (
						<Button
							className="button__payment button__common"
							onClick={() => {
								history.push('/cart');
							}}
						>
							<p>Ir para a pokédex</p>
							<FiArrowRight />
						</Button>
					)}
					<Button
						onClick={handleDeleteItems}
						className="button__clear button__common"
					>
						<p>Limpar pokédex</p>
						<FiTrash />
					</Button>
				</div>
			)}
		</div>
	);
};

export default CartButtons;
