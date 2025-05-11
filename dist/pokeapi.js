export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        const url = pageURL || `${PokeAPI.baseURL}/location-area`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch locations: ${response.status}`);
        }
        return await response.json();
    }
    async fetchLocation(locationName) {
        const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch location: ${response.status}`);
        }
        return await response.json();
    }
}
