export function commandHelp(state) {
    console.log("Usage:\n");
    for (const name in state.commands) {
        console.log(`${name}: ${state.commands[name].description}`);
    }
}
