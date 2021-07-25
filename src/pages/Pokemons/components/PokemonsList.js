import React from 'react';

// material-ui/icons
import Pagination from '@material-ui/lab/Pagination';

// components
import PokemonSimpleCard from '../../../components/PokemonSimpleCard/PokemonSimpleCard';

const PokemonsList = ({
	filteredPokemons,
	pagination,
	page,
	handleChangePage,
}) => {
	return (
		<>
			<div className="pokemons__pageContent">
				<div className="pokemons__cards">
					{filteredPokemons.length ? (
						<>
							{filteredPokemons.map((obj) => (
								<PokemonSimpleCard obj={obj} key={obj.id} />
							))}
						</>
					) : (
						<div className="not-found">
							<p>
								Resultado não encontrado para a busca desejada!
							</p>
						</div>
					)}
				</div>
			</div>
			<div className="pokemons__pagination">
				{filteredPokemons.length > 1 && (
					<Pagination
						count={pagination}
						page={page}
						onChange={handleChangePage}
						style={
							filteredPokemons.length
								? { display: 'block' }
								: { display: 'none' }
						}
					/>
				)}
			</div>
		</>
	);
};

export default PokemonsList;
