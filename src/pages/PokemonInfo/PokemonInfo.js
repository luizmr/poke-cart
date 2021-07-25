import React, { useEffect, useState } from 'react';

// material ui
import { CircularProgress } from '@material-ui/core';

// components
import CartButtons from '../../components/CartButtons/CartButtons';
import PokemonFullCard from '../../components/PokemonFullCard/PokemonFullCard';

// utils
import { connect } from 'react-redux';
import { removeAllFromCart } from '../../store/PokeCart/cart-actions';
import gqlQueryPokemon from '../../utils/gqlQueryPokemon';

const PokemonInfo = ({ cart, removeAllFromCart }) => {
	const [pokemon, setPokemon] = useState(null);
	const [loading, setLoading] = useState(true);
	const pokemonPathname = window.location.pathname;
	const pokeName = pokemonPathname.substring(
		pokemonPathname.lastIndexOf('/') + 1,
	);

	useEffect(() => {
		console.log(pokeName);
		setLoading(true);
		fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
			credentials: 'omit',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				query: gqlQueryPokemon,
				variables: {
					name: pokeName.toLowerCase(),
				},
			}),
			method: 'POST',
		})
			.then((res) => res.json())
			.then((res) => {
				const pokemonFound = res.data.pokemon;
				if (pokemonFound.name) {
					fetch('https://pokeapi.co/api/v2/pokemon/1/encounters')
						.then((loc) => loc.json())
						.then((loc) => {
							setPokemon({
								...pokemonFound,
								image: pokemonFound.sprites.front_default,
								locationAreas: loc,
							});
							setLoading(false);
						})
						.catch((err) => {
							setPokemon({
								...pokemonFound,
								image: pokemonFound.sprites.front_default,
								locationAreas: [],
							});
							setLoading(false);
						});
				} else {
					setPokemon(null);
					setLoading(false);
				}
			})
			.catch((err) => {
				setPokemon(null);
				setLoading(false);
			});
	}, []);

	return (
		<div className="pokemons">
			<div className="pokemons__page">
				<CartButtons
					handleDeleteItems={removeAllFromCart}
					cart={cart}
					toPokedex={true}
				/>
				{loading ? (
					<div className="pokemons__loading">
						<CircularProgress />
					</div>
				) : (
					<div className="pokemons__pageContent">
						{pokemon ? (
							<PokemonFullCard obj={pokemon} key={pokeName} />
						) : (
							<div className="pokemons__cards">
								<div className="not-found">
									<p>
										Desculpa, mas o pokémon buscado não
										existe.{' '}
									</p>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.cart.cart,
	};
};

export default connect(mapStateToProps, { removeAllFromCart })(PokemonInfo);
