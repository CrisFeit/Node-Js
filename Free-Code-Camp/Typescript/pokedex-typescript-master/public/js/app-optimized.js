"use strict";
const container = document.getElementById('app');
const pokemonsQuantity = 20;
function showPokemon(pokemon) {
    let output = `
          <div class="card">
          <span class="card__id">#${pokemon.id}</span>
              <img class="card__image" src=${pokemon.image} alt=${pokemon.name} />
              <h1 class="card__name">${pokemon.name}</h1>
              <span class="card__details">${pokemon.type}</span>
              </div>
              `;
    container.innerHTML += output;
}
async function getPokemon() {
    const responsePokemons = await Promise.all(promisesArray());
    responsePokemons.forEach(async (rawPokemon) => {
        const pokemon = await rawPokemon.json();
        const pokemonType = pokemon.types.map(({ type }) => type.name).join(', ');
        const transformedPokemon = {
            id: pokemon.id,
            name: pokemon.name,
            image: `${pokemon.sprites.front_default}`,
            type: pokemonType,
        };
        showPokemon(transformedPokemon);
    });
}
function promisesArray() {
    let promises = [];
    for (let id = 0; id <= pokemonsQuantity; id++) {
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${id}`));
    }
    return promises;
}
getPokemon();
