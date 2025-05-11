import { getCommands } from "./commands.js";
export function cleanInput(input) {
    const words = input.toLowerCase().trim().split(/\s+/);
    return words;
}
export async function startRepl(state) {
    state.readline.prompt();
    state.readline.on("line", async (input) => {
        const words = cleanInput(input);
        if (words.length === 0) {
            state.readline.prompt();
            return;
        }
        const commands = getCommands();
        const cmd = commands[words[0]];
        if (!cmd) {
            console.log(`Unknown command: "${words[0]}". Type "help" for a list of commands.`);
            state.readline.prompt();
            return;
        }
        ;
        try {
            await cmd.callback(state, ...words.slice(1));
        }
        catch (error) {
            console.error("Error executing command:", error);
        }
        state.readline.prompt();
    });
}
