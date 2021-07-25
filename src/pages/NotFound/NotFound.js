import React from 'react';
import CartButtons from '../../components/CartButtons/CartButtons';

const NotFound = () => {
	return (
		<div className="pokemons">
			<div className="pokemons__page">
				<CartButtons cart={[]} toPokedex={false} />
				<div className="pokemons__pageContent">
					<div className="pokemons__cards">
						<div className="not-found">
							<p>Página não encontrada.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
