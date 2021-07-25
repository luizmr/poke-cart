import React from 'react';
import { Link } from 'react-router-dom';
import TYPE_COLORS from '../../../utils/pokeColors';

const PokemonInfoCart = ({ obj }) => {
	return (
		<div className="pokemons__info">
			<Link to={`/pokemon/${obj.name}`}>
				<p className="pokemon__name">
					{obj.quantity} x {obj.name}
				</p>
			</Link>
			<div className="pokemon__data">
				{obj.types.map((el) => (
					<div
						className="bottom__chip"
						style={{
							backgroundColor: `#${TYPE_COLORS[el.type.name]}`,
						}}
					>
						<p>{el.type.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default PokemonInfoCart;
