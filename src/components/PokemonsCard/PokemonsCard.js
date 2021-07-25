import React from 'react';

// material-ui/icons
import { FaRegFrown } from 'react-icons/fa';

// components
import PokemonInfoCart from './components/PokemonInfoCart';

const PokemonsCard = ({ items }) => {
	return (
		<div className="summary__pokemons">
			<div className="pokemons__header">
				<div className="header__info">
					<p>Pokémons</p>
				</div>
			</div>
			{items.length ? (
				<>
					{items.map((obj) => (
						<PokemonInfoCart key={obj.id} obj={obj} />
					))}
				</>
			) : (
				<div className="pokemons__info">
					<div className="product__empty">
						<p>Pokedex vazia</p>
						<FaRegFrown />
					</div>
				</div>
			)}
		</div>
	);
};

export default PokemonsCard;
