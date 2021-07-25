import React, { memo, useEffect, useState } from 'react';

// material-ui/icons
import CircularProgress from '@material-ui/core/CircularProgress';

// components
import PokemonFilter from './components/PokemonFilter';
import PokemonsList from './components/PokemonsList';

// utils
import gqlQueryPokemons from '../../utils/gqlQueryPokemons';
import gqlQueryPokemon from '../../utils/gqlQueryPokemon';

const Pokemons = memo(() => {
	const [filteredPokemons, setFilteredPokemons] = useState([]);
	const [pagination, setPagination] = useState(0);
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	// const [searchString, setSearchString] = useState('');
	const [loading, setLoading] = useState(true);

	const handlePageSize = (value) => {
		const pokemonLength = 1118;
		const numberOfPages = pokemonLength / value;
		setPagination(Math.ceil(numberOfPages));
	};

	useEffect(() => {
		handleSearch(pageSize, 0);
	}, []);

	const handleChangePage = (event, value) => {
		setPage(value);
		handleSearch(pageSize, value === 1 ? 0 : pageSize * (value - 1), value);
	};

	const handleSearch = (pageSize, offset, page) => {
		setLoading(true);
		fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
			credentials: 'omit',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				query: gqlQueryPokemons,
				variables: {
					limit: pageSize,
					offset: offset,
				},
			}),
			method: 'POST',
		})
			.then((res) => res.json())
			.then((res) => {
				const pokeResults = res.data.pokemons.results;
				setFilteredPokemons(pokeResults);
				handlePageSize(pageSize);
				setPage(offset === 0 ? 1 : page);
				setLoading(false);
			})
			.catch((err) => {
				setFilteredPokemons([]);
				setPage(1);
				setLoading(false);
			});
	};

	const handleChangePageSize = (e) => {
		const {
			target: { value },
		} = e;
		setPageSize(value);
		handleSearch(value, 0);
	};

	const handleSearchPokemon = (searchString) => {
		if (searchString === '') {
			handleSearch(pageSize, 0);
		} else {
			setLoading(true);
			fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
				credentials: 'omit',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					query: gqlQueryPokemon,
					variables: {
						name: searchString.toLowerCase(),
					},
				}),
				method: 'POST',
			})
				.then((res) => res.json())
				.then((res) => {
					const pokemonFound = res.data.pokemon;
					setFilteredPokemons([
						{
							...pokemonFound,
							image: pokemonFound.sprites.front_default,
						},
					]);
					setPage(1);
					setLoading(false);
				})
				.catch((err) => {
					setFilteredPokemons([]);
					setPage(1);
					setLoading(false);
				});
		}
	};

	const PokemonsContent = memo(() => {
		return (
			<>
				{loading ? (
					<div className="pokemons__loading">
						<CircularProgress />
					</div>
				) : (
					<PokemonsList
						filteredPokemons={filteredPokemons}
						page={page}
						pagination={pagination}
						handleChangePage={handleChangePage}
					/>
				)}
			</>
		);
	});

	return (
		<div className="pokemons">
			<div className="pokemons__page">
				<div className="pokemons_pageFilter">
					<PokemonFilter
						handleChangePageSize={handleChangePageSize}
						pageSize={pageSize}
						handleSearchPokemon={handleSearchPokemon}
					/>
				</div>
				<PokemonsContent />
			</div>
		</div>
	);
});

export default Pokemons;
