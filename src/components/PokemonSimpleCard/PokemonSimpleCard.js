import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import CardHeader from '../CardHeader/CardHeader';

// utils
import PokemonSimpleCardContent from './PokemonSimpleCardContent';

const PokemonSimpleCard = memo(({ obj }) => {
	return (
		<Link to={`/pokemon/${obj.name}`}>
			<div className="pokemon__card simple-card">
				<CardHeader obj={obj} />
				<PokemonSimpleCardContent obj={obj} />
			</div>
		</Link>
	);
});

export default PokemonSimpleCard;
