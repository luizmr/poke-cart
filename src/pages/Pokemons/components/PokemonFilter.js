import React, { useState } from 'react';

// material-ui/icons
import { FaSearch } from 'react-icons/fa';

// components
import SelectFilter from '../../../components/SelectFilter/SelectFilter';
import { SearchBox } from '../styles/styles';

// utils
import selectOptions from './selectOptions';
import { connect } from 'react-redux';

const PokemonFilter = ({
	handleChangePageSize,
	handleSearchPokemon,
	pageSize,
	theme,
}) => {
	const [searchString, setSearchString] = useState('');
	return (
		<>
			<SearchBox theme={theme}>
				<FaSearch onClick={() => handleSearchPokemon()} />
				<div className="filter__search">
					<input
						type="text"
						placeholder="Pesquisar pokémon"
						onChange={(e) => {
							if (e.target.value === '') {
								handleSearchPokemon('');
							}
							setSearchString(e.target.value);
						}}
						value={searchString}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								handleSearchPokemon(searchString);
							}
						}}
					/>
				</div>
			</SearchBox>
			<div className="pokemons__pageOrdenation">
				<SelectFilter
					options={selectOptions}
					label="Exibicação:"
					iconScale={1.6}
					handleChange={handleChangePageSize}
					value={pageSize}
				/>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		theme: state.theme.theme,
	};
};

export default connect(mapStateToProps)(PokemonFilter);
