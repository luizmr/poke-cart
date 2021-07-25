import React, { useEffect, useState, memo } from 'react';

// utils
import { connect } from 'react-redux';
import CardHeader from '../CardHeader/CardHeader';
import PokemonFullCardContent from './PokemonFullCardContent';

const PokemonFullCard = memo(({ obj, cart }) => {
	const [pokemon, setPokemon] = useState({ quantity: '' });

	useEffect(() => {
		if (cart.length) {
			const pokemonFound = cart.find((el) => el.id === obj.id);
			if (pokemonFound) {
				setPokemon(pokemonFound);
			}
		}
	}, []);

	useEffect(() => {
		if (cart.length === 0) {
			setPokemon({ quantity: '' });
		}
	}, [cart]);

	return (
		<div className="pokemon__card">
			<CardHeader obj={obj} />
			<PokemonFullCardContent
				obj={obj}
				pokemon={pokemon}
				setPokemon={setPokemon}
			/>
		</div>
	);
});

const mapStateToProps = (state) => {
	return {
		cart: state.cart.cart,
	};
};

export default connect(mapStateToProps)(PokemonFullCard);
