const gqlQueryPokemon = `query pokemon($name: String!) {
	pokemon(name: $name) {
	  id
	  name
	  sprites {
		front_default
	  }
	  abilities {
		  ability {
			  name
		  }
	  }
	  location_area_encounters
	  height
	  weight
	  types {
		type {
		  name
		}
	  }
	}
  }`;

export default gqlQueryPokemon;
