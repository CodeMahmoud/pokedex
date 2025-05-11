import { State } from "./state";

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
    if (args.length === 0) {
        console.log("Usage: explore <location-area>");
        return;
    }

    const locationArea = args.join("-"); // supports names like "pastoria-city-area"
    const url = `https://pokeapi.co/api/v2/location-area/${locationArea}/`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`\n⚠️  Location area '${locationArea}' not found.`);
            return;
        }

        const data = await response.json();

        console.log(`\nExploring ${locationArea}...`);
        console.log("Found Pokémon:");
        for (const encounter of data.pokemon_encounters) {
            console.log("- " + encounter.pokemon.name);
        }
    } catch (error) {
        console.error("❌ Error fetching Pokémon encounters:", error);
    }
}
