# Project Neo Tycoon

**Neo Tycoon** is a small multilingual tycoon simulator by Two Plasma Studios, implemented as a browser-based game with an Electron packaging setup.

## Current gameplay

- Earn money through the central click action
- Purchase businesses that generate income
- Upgrade businesses and manage costs/income
- Expand available land
- Progress through a prestige system
- Save, load and reset game data
- Switch between multiple interface languages
- Toggle the game's day/night presentation

Game state is saved in browser local storage. In the packaged Electron app, persistence behavior depends on the app's runtime profile.

## Run the browser version

Open `index.html` in a modern browser. If local file restrictions affect any feature, run it from a simple local static server.

## Build the Windows portable app

The repository includes an Electron setup with `start` and `build` scripts. Install Node.js first, then run:

```bash
npm install
npm start
```

To package the configured portable Windows build:

```bash
npm run build
```

Build output and platform support depend on the current environment and Electron Builder configuration.

## Status

This is an evolving indie game project. The repository contains a playable clicker/tycoon loop, but balance, usability, saves and packaging should continue to be tested before calling it a finished release.

## Links

- **Studio website:** https://twoplasmastudios.github.io/
- **Projects:** https://twoplasmastudios.github.io/projects.html
- **Source code:** https://github.com/TwoPlasmaStudios/project-neo-tycoon

---

Made by **Two Plasma Studios**.
