
const container: HTMLElement | any = document.getElementById('app')
const pokemonsQuantity: number = 20

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

async function getPokemon(): Promise<void> {
    const responsePokemons: any[] = await Promise.all(promisesArray())

    responsePokemons.forEach(async (rawPokemon) => {
        const pokemon : any = await rawPokemon.json()
        const pokemonType: string = pokemon.types.map(({ type }: any) => type.name).join(', ')
        
        const transformedPokemon = {
            id: pokemon.id,
            name: pokemon.name,
            image: `${pokemon.sprites.front_default}`,
            type: pokemonType,
        }
        
        showPokemon(transformedPokemon)
    })
}

function promisesArray(): Promise<Response>[] {
    let promises: Promise<Response>[] = []
     for(let id = 0 ; id <= pokemonsQuantity; id++) {
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${id}`))
    }
    return promises
}

getPokemon()