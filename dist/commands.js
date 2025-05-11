import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapB } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandPokedex } from "./command_pokedex.js";
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Display the next 20 locations in the Pokemon world",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Display the previous 20 locations in the Pokemon world",
            callback: commandMapB,
        },
        explore: {
            name: "explore",
            description: "Display the list of pokemon in a given area",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Attempt to catch a pokemon",
            callback: commandCatch,
        },
        pokedex: {
            name: "pokedex",
            description: "Lists all captured pokemons",
            callback: commandPokedex,
        }
    };
}
