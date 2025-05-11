export async function commandMap(state) {
    try {
        const url = state.nextLocationsURL || "https://pokeapi.co/api/v2/location-area";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch locations: ${response.status}`);
        }
        const data = await response.json();
        state.nextLocationsURL = data.next;
        state.prevLocationsURL = data.previous;
        for (const location of data.results) {
            console.log(location.name);
        }
    }
    catch (error) {
        console.error("Error fetching location areas:", error);
    }
}
export async function commandMapB(state) {
    if (!state.prevLocationsURL) {
        console.log("you're on the first page");
        return;
    }
    try {
        const response = await fetch(state.prevLocationsURL);
        if (!response.ok) {
            throw new Error(`Failed to fetch locations: ${response.status}`);
        }
        const data = await response.json();
        state.nextLocationsURL = data.next;
        state.prevLocationsURL = data.previous;
        for (const location of data.results) {
            console.log(location.name);
        }
    }
    catch (error) {
        console.error("Error fetching location areas:", error);
    }
}
