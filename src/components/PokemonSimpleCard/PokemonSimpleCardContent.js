import React from 'react';

const PokemonSimpleCardContent = ({ obj }) => {
	return (
		<div className="card__contentSimple">
			<div className="content__img">
				<img src={obj.image} alt={obj.name} />
			</div>
		</div>
	);
};

export default PokemonSimpleCardContent;
