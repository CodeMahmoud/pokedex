import { startRepl } from "./repl.js";
import { initState, State } from "./state.js";

function main() {
    const state = initState();
    startRepl(state);
}

main();