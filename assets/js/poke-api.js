const pokeApi = {
  url: "https://pokeapi.co/api/v2/pokemon"
};

pokeApi.getPokemonList = (offset = 0, limit = 10) => {
  const listUrl = `${pokeApi.url}?offset=${offset}&limit=${limit}`;
  return fetch(listUrl)
    .then(response => response.json())
    .then(responseBody => responseBody.results)
    .catch(error => console.error(error))
}
