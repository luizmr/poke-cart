const gqlQueryPokemons = `query pokemons($limit: Int, $offset: Int) {
	pokemons(limit: $limit, offset: $offset) {
	  count
	  next
	  previous
	  status
	  message
	  results {
		url
		name
		image
		id
	  }
	}
}`;

export default gqlQueryPokemons;
