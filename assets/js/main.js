const htmlPokemonListElement = document.getElementsByClassName("pokemon-list")[0];

pokeApi.getPokemonList()
  .then((pokemonList = []) => {
    htmlPokemonListElement.innerHTML += pokemonList.map(createHtmlPokemonCard).join("");
  });

function createHtmlPokemonCard(pokemon) {
  return `
    <li class="pokemon-list-item">
      <article class="pokemon-card">
        <span class="number">#${pokemon.order.toString().padStart(4, '0')}</span>
        <span class="name">${pokemon.name}</span>
        <div class="details">
          <ol class="types">
            ${createPokemonTypeHtmlListItems(pokemon.types)}
          </ol>
          <img src="${pokemon.sprites.other.dream_world.front_default}"
            alt="${pokemon.name}">
        </div>
      </article>
    </li>
  `;
}

function createPokemonTypeHtmlListItems(pokemonTypes) {
  return pokemonTypes.map(typeSlot => {
    return `<li class=\"type\">${typeSlot.type.name}</li>`;
  }).join("");
}
