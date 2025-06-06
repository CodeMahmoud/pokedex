import { Cache } from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    cache = new Cache(300);
  
    constructor() {}
  
    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
      
        const url = pageURL || `${PokeAPI.baseURL}/location-area`;

        const cachedData = this.cache.get<ShallowLocations>(url);
        if (cachedData) {
          return cachedData;
        }

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch locations: ${response.status}`);
        }

        return await response.json();

    }
  
    async fetchLocation(locationName: string): Promise<Location> {
      
        const url = `${PokeAPI.baseURL}/location-area/${locationName}`;

        const cachedData = this.cache.get<Location>(url);

        if (cachedData) {
          return cachedData;
        }

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch location: ${response.status}`);
        }

        return await response.json();
  }

  async fetchPokemon(pokemonName: string): Promise<Pokemon> {
    const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;

    const cached = this.cache.get<Pokemon>(url);
    if (cached) {
      return cached;
    }

    try {
      const resp = await fetch(url);

      if (!resp.ok) {
        throw new Error(`${resp.status} ${resp.statusText}`);
      }

      const pokemon: Pokemon = await resp.json();
      this.cache.add(url, pokemon);
      return pokemon;
    } catch (e) {
      throw new Error(
        `Error fetching pokemon '${pokemonName}': ${(e as Error).message}`,
      );
    }
  }
}


  
  export type ShallowLocations = {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
  };
  
  export type Location = {

    id: number;
    name: string;
    pokemon_encounters: any[];

  };


  export type Pokemon = {
    abilities: {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }[];
    base_experience: number;
    forms: {
      name: string;
      url: string;
    }[];
    game_indices: {
      game_index: number;
      version: {
        name: string;
        url: string;
      };
    }[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: {
      move: {
        name: string;
        url: string;
      };
      version_group_details: {
        level_learned_at: number;
        move_learn_method: {
          name: string;
          url: string;
        };
        version_group: {
          name: string;
          url: string;
        };
      }[];
    }[];
    name: string;
    order: number;
    past_types: any[];
    species: {
      name: string;
      url: string;
    };
    sprites: {
      back_default: string;
      back_female: any;
      back_shiny: string;
      back_shiny_female: any;
      front_default: string;
      front_female: any;
      front_shiny: string;
      front_shiny_female: any;
      other: {
        dream_world: {
          front_default: string;
          front_female: any;
        };
        home: {
          front_default: string;
          front_female: any;
          front_shiny: string;
          front_shiny_female: any;
        };
        official_artwork: {
          front_default: string;
          front_shiny: string;
        };
      };
      versions: {
        [generation: string]: {
          [game: string]: {
            back_default: string;
            back_female?: any;
            back_shiny: string;
            back_shiny_female?: any;
            front_default: string;
            front_female?: any;
            front_shiny: string;
            front_shiny_female?: any;
          };
        };
      };
    };
    stats: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }[];
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
    weight: number;
  };
  
