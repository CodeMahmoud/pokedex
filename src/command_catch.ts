import { State } from "./state";

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
    if (args.length === 0) {
        console.log("Usage: catch <pokemon>");
        return;
    }

    const pokemonName = args.join("-"); // supports names like "pastoria-city-area"
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
    const pokemon = await state.pokeApi.fetchPokemon(pokemonName);



    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`\n⚠️ Pokemon '${pokemonName}' not found.`);
            return;
        }


        console.log(`\nThrowing a Pokeball at ${pokemonName}...`);
        const randomCatchNum = Math.floor(Math.random() * 20)

        if (randomCatchNum % 2 === 0) {
            console.log(`${pokemonName} was caught!`);
            
        } else if (randomCatchNum % 2 !== 0){
            console.log(`${pokemonName} escaped!`);

        }
    } catch (error) {
        console.error("❌ Error fetching Pokémon encounters:", error);
    }


    state.capturedPokemon[pokemon.name] = pokemon;
}
