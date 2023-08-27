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
            ${pokemon.types.map(type => `<li class=\"type\">${type}</li>`).join("")}
          </ol>
          <img src="${pokemon.picture}"
            alt="${pokemon.name}">
        </div>
      </article>
    </li>
  `;
}
