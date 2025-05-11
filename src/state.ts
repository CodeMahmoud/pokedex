import { createInterface, Interface } from "readline";
import { commandExit } from "./command_exit";
import { commandHelp } from "./command_help";
import { getCommands } from "./commands.js";
import { PokeAPI } from './pokeapi.js';

export type State = {
    readline:  Interface, 
    commands: Record<string, CLICommand>
    pokeApi: PokeAPI;
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;
}

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
}

export function initState(): State {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });

     return {
        readline: rl,
        commands: getCommands(),
        pokeApi: new PokeAPI(),
        nextLocationsURL: null,
        prevLocationsURL: null,
     }
}
