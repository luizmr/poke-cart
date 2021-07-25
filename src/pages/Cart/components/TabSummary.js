import React from 'react';
import PokeChart from '../../../components/PokeChart/PokeChart';

// components
import PokemonsCard from '../../../components/PokemonsCard/PokemonsCard';
import TypesChart from '../../../components/TypesChart/TypesChart';

const TabSummary = ({ items, typesQuantity, pokeQuantity }) => {
	return (
		<div className="cart__summary">
			<div className="summary">
				<PokemonsCard items={items} />
			</div>
			<div className="barChart">
				<TypesChart typesQuantity={typesQuantity} />
			</div>
			<div className="barChart">
				<PokeChart pokeQuantity={pokeQuantity} />
			</div>
		</div>
	);
};

export default TabSummary;
