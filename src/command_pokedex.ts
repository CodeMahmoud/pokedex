import { State } from "./state";

export async function commandPokedex(state: State) {

    const pokemonList = await Object.entries(state.capturedPokemon)

    console.log("Your Pokedex:")
    for (const name of pokemonList) {
        console.log("-" + name[0])
    }
}