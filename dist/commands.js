import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapB } from "./command_map.js";
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
        }
    };
}
