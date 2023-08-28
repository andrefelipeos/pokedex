const pokemonListElement = document.getElementsByClassName("pokemon-list")[0];
const loadMoreButtonElement = document.getElementById("loadMoreButton");

const limit = 20;
let offset = 0;

loadPokemonCards(offset, limit);

loadMoreButtonElement.addEventListener("click",  () => {
  offset += limit;
  loadPokemonCards(offset, limit);
});

function loadPokemonCards(offset, limit) {
  pokeApi.getPokemonList(offset, limit)
    .then((pokemonList = []) => {
      pokemonListElement.innerHTML += pokemonList.map(createHtmlPokemonCard).join("");
    });
}

function createHtmlPokemonCard(pokemon) {
  return `
    <li class="pokemon-list-item">
      <article class="pokemon-card ${pokemon.type}">
        <span class="number">#${pokemon.order.toString().padStart(4, '0')}</span>
        <span class="name">${pokemon.name}</span>
        <div class="details">
          <ol class="types">
            ${pokemon.types.map(type => `<li class=\"type ${type}\">${type}</li>`).join("")}
          </ol>
          <img src="${pokemon.picture}"
            alt="${pokemon.name}">
        </div>
      </article>
    </li>
  `;
}
