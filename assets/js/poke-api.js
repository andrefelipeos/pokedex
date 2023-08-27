const pokeApi = {
  url: "https://pokeapi.co/api/v2/pokemon"
};

pokeApi.getPokemonList = (offset = 0, limit = 10) => {
  const listUrl = `${pokeApi.url}?offset=${offset}&limit=${limit}`;
  return fetch(listUrl)
    .then(response => response.json())
    .then(responseBody => responseBody.results)
    .then(pokemonEntrys => pokemonEntrys.map(pokeApi.getPokemonDetails))
    .then(pokemonDetailsRequestList => Promise.all(pokemonDetailsRequestList));
}

pokeApi.getPokemonDetails = pokemon => {
  return fetch(pokemon.url)
    .then(response => response.json())
    .then(pokeApi.simplifyPokemonDetailsFromApi);
}

pokeApi.simplifyPokemonDetailsFromApi = pokemonDetails => {
  const pokemon = new Pokemon();
  pokemon.order = pokemonDetails.order;
  pokemon.name = pokemonDetails.name;
  pokemon.types = pokemonDetails.types.map(typeSlot => typeSlot.type.name);
  pokemon.type = pokemon.types[0];
  pokemon.picture = pokemonDetails.sprites.other.dream_world.front_default;
  return pokemon;
}
