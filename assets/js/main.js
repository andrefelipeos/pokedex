const htmlPokemonList = document.getElementsByClassName("pokemon-list")[0];

pokeApi.getPokemonList()
  .then(pokemonList => {
    pokemonList.forEach(pokemon => {
      let htmlListItem = createHtmlPokemonCard(pokemon);
      htmlPokemonList.innerHTML += htmlListItem;
    })
  });

function createHtmlPokemonCard(pokemon) {
  return `
    <li class="pokemon-list-item">
      <article class="pokemon-card">
        <span class="number">#0001</span>
        <span class="name">${pokemon.name}</span>
        <div class="details">
          <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
          </ol>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            alt="${pokemon.name}">
        </div>
      </article>
    </li>
  `;
}
