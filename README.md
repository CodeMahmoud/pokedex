

# 🧭 Pokédex  CLI

A fun, terminal-based Pokédex game powered by the [PokeAPI](https://pokeapi.co/)! Explore areas, discover Pokémon, catch them, inspect their stats, and build your own Pokédex – all from the command line.

---

## 🧩 Features

- 🌍 `explore <location-area>` — Discover which Pokémon appear in a specific location.
- 🎯 `catch <pokemon-name>` — Try to catch a wild Pokémon.
- 🕵️ `inspect <pokemon-name>` — View detailed info about a Pokémon (type, abilities, stats).
- 📘 `pokedex` — Review all the Pokémon you’ve caught so far.
- ❓ `help` — List all available commands and their usage.
- 🚪 `exit` — Exit the CLI.

---

## 🛠 Tech Stack
- Node.js 

- TypeScript

- Readline

- Fetch API – For making HTTP requests to the PokeAPI

- PokeAPI – Public RESTful API with Pokémon data

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
git clone https://github.com/yourusername/pokedex-cli.git
cd pokedex-cli
npm install

### Run the CLI

```bash
npm run dev 


### Example:

```bash
Pokedex > explore pastoria-city-area
Exploring pastoria-city-area...
Found Pokémon:
- tentacool
- tentacruel
- magikarp
- gyarados
...

Pokedex > catch magikarp
You caught magikarp! 🎉

Pokedex > inspect magikarp
Name: magikarp
Type(s): water
Abilities: swift-swim
Base Stats:
- HP: 20
- Attack: 10
- Defense: 55
...

Pokedex > pokedex
Your Pokédex:
- magikarp

Pokedex > help
Available commands:
- explore <location-area>
- catch <pokemon-name>
- inspect <pokemon-name>
- pokedex
- help
- exit

