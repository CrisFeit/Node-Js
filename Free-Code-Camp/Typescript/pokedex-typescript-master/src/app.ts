const container: HTMLElement | any = document.getElementById('app')
const pokemons: number = 20

interface IPokemon {
    id: number,
    name: string,
    image: string,
    type: string
}

function showPokemon(pokemon: IPokemon): void {
    let output: string = `
          <div class="card">
              <span class="card__id">#${pokemon.id}</span>
              <img class="card__image" src=${pokemon.image} alt=${pokemon.name} />
              <h1 class="card__name">${pokemon.name}</h1>
              <span class="card__details">${pokemon.type}</span>
          </div>
      `
    container.innerHTML += output
}

async function getPokemon(id: number): Promise<void> {
    const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon: any = await data.json()
    const pokemonType: string = pokemon.types.map(({ type }: any) => type.name).join(', ')

    const transformedPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        image: `${pokemon.sprites.front_default}`,
        type: pokemonType,
    }

    showPokemon(transformedPokemon)
}

function fetchData(): void {
    for (let i = 1; i <= pokemons; i++) {
        getPokemon(i)
    }
}

fetchData()