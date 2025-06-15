"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokemonPanelApp = exports.saveState = exports.allPokemon = void 0;
// This script will be run within the webview itself
const names_1 = require("../common/names");
const pokemon_collection_1 = require("./pokemon-collection");
const states_1 = require("./states");
const pokemon_data_1 = require("../common/pokemon-data");
exports.allPokemon = new pokemon_collection_1.PokemonCollection();
var pokemonCounter;
function calculateBallRadius(size) {
    if (size === "nano" /* PokemonSize.nano */) {
        return 2;
    }
    else if (size === "small" /* PokemonSize.small */) {
        return 3;
    }
    else if (size === "medium" /* PokemonSize.medium */) {
        return 4;
    }
    else if (size === "large" /* PokemonSize.large */) {
        return 8;
    }
    else {
        return 1; // Shrug
    }
}
function calculateFloor(size, theme) {
    switch (theme) {
        case "forest" /* Theme.forest */:
            switch (size) {
                case "small" /* PokemonSize.small */:
                    return 30;
                case "medium" /* PokemonSize.medium */:
                    return 40;
                case "large" /* PokemonSize.large */:
                    return 65;
                case "nano" /* PokemonSize.nano */:
                default:
                    return 23;
            }
        case "castle" /* Theme.castle */:
            switch (size) {
                case "small" /* PokemonSize.small */:
                    return 60;
                case "medium" /* PokemonSize.medium */:
                    return 80;
                case "large" /* PokemonSize.large */:
                    return 120;
                case "nano" /* PokemonSize.nano */:
                default:
                    return 45;
            }
        case "beach" /* Theme.beach */:
            switch (size) {
                case "small" /* PokemonSize.small */:
                    return 60;
                case "medium" /* PokemonSize.medium */:
                    return 80;
                case "large" /* PokemonSize.large */:
                    return 120;
                case "nano" /* PokemonSize.nano */:
                default:
                    return 45;
            }
    }
    return 0;
}
function handleMouseOver(e) {
    var el = e.currentTarget;
    exports.allPokemon.pokemonCollection.forEach((element) => {
        if (element.collision === el) {
            if (!element.pokemon.canSwipe) {
                return;
            }
            element.pokemon.swipe();
        }
    });
}
function startAnimations(collision, pokemon, stateApi) {
    if (!stateApi) {
        stateApi = acquireVsCodeApi();
    }
    collision.addEventListener('mouseover', handleMouseOver);
    setInterval(() => {
        var updates = exports.allPokemon.seekNewFriends();
        updates.forEach((message) => {
            stateApi?.postMessage({
                text: message,
                command: 'info',
            });
        });
        pokemon.nextFrame();
        saveState(stateApi);
    }, 100);
}
function addPokemonToPanel(pokemonType, basePokemonUri, gen, originalSpriteSize, pokemonColor, pokemonSize, left, bottom, floor, name, stateApi, incrementCounter = true) {
    var pokemonSpriteElement = document.createElement('img');
    pokemonSpriteElement.className = 'pokemon';
    document.getElementById('pokemonContainer').appendChild(pokemonSpriteElement);
    var collisionElement = document.createElement('div');
    collisionElement.className = 'collision';
    document.getElementById('pokemonContainer').appendChild(collisionElement);
    var speechBubbleElement = document.createElement('img');
    speechBubbleElement.className = `bubble bubble-${pokemonSize} b-${originalSpriteSize}`;
    speechBubbleElement.src = `${basePokemonUri}/heart.png`;
    document.getElementById('pokemonContainer').appendChild(speechBubbleElement);
    const root = `${basePokemonUri}/${gen}/${pokemonType}/${pokemonColor}`;
    console.log('Creating new pokemon : ', pokemonType, root, pokemonColor, pokemonSize, name, originalSpriteSize);
    try {
        if (!(0, pokemon_collection_1.availableColors)(pokemonType).includes(pokemonColor)) {
            throw new pokemon_collection_1.InvalidPokemonException('Invalid color for pokemon type');
        }
        var newPokemon = (0, pokemon_collection_1.createPokemon)(pokemonType, pokemonSpriteElement, collisionElement, speechBubbleElement, pokemonSize, left, bottom, root, floor, name, gen, originalSpriteSize);
        if (incrementCounter) {
            pokemonCounter++;
        }
        startAnimations(collisionElement, newPokemon, stateApi);
    }
    catch (e) {
        // Remove elements
        pokemonSpriteElement.remove();
        collisionElement.remove();
        speechBubbleElement.remove();
        throw e;
    }
    return new pokemon_collection_1.PokemonElement(pokemonSpriteElement, collisionElement, speechBubbleElement, newPokemon, pokemonColor, pokemonType, gen, originalSpriteSize);
}
function saveState(stateApi) {
    if (!stateApi) {
        stateApi = acquireVsCodeApi();
    }
    var state = new states_1.PokemonPanelState();
    state.pokemonStates = new Array();
    exports.allPokemon.pokemonCollection.forEach((pokemonItem) => {
        state.pokemonStates?.push({
            pokemonName: pokemonItem.pokemon.name,
            pokemonColor: pokemonItem.color,
            pokemonType: pokemonItem.type,
            pokemonState: pokemonItem.pokemon.getState(),
            pokemonGeneration: pokemonItem.generation,
            originalSpriteSize: pokemonItem.originalSpriteSize,
            pokemonFriend: pokemonItem.pokemon.friend?.name ?? undefined,
            elLeft: pokemonItem.el.style.left,
            elBottom: pokemonItem.el.style.bottom,
        });
    });
    state.pokemonCounter = pokemonCounter;
    stateApi?.setState(state);
}
exports.saveState = saveState;
function recoverState(basePokemonUri, gen, pokemonSize, floor, stateApi) {
    if (!stateApi) {
        stateApi = acquireVsCodeApi();
    }
    var state = stateApi?.getState();
    if (!state) {
        pokemonCounter = 1;
    }
    else {
        if (state.pokemonCounter === undefined || isNaN(state.pokemonCounter)) {
            pokemonCounter = 1;
        }
        else {
            pokemonCounter = state.pokemonCounter ?? 1;
        }
    }
    var recoveryMap = new Map();
    state?.pokemonStates?.forEach((p) => {
        try {
            var newPokemon = addPokemonToPanel(p.pokemonType ?? 'bulbasaur', basePokemonUri, p.pokemonGeneration ?? 'gen1', p.originalSpriteSize ?? 32, p.pokemonColor ?? "default" /* PokemonColor.default */, pokemonSize, parseInt(p.elLeft ?? '0'), parseInt(p.elBottom ?? '0'), floor, p.pokemonName ?? (0, names_1.randomName)(p.pokemonType ?? 'bulbasaur'), stateApi, false);
            exports.allPokemon.push(newPokemon);
            recoveryMap.set(newPokemon.pokemon, p);
        }
        catch (InvalidPokemonException) {
            console.log('State had invalid pokemon (' + p.pokemonType + '), discarding.');
        }
    });
    recoveryMap.forEach((state, pokemon) => {
        // Recover previous state.
        if (state.pokemonState !== undefined) {
            pokemon.recoverState(state.pokemonState);
        }
        // Resolve friend relationships
        var friend = undefined;
        if (state.pokemonFriend) {
            friend = exports.allPokemon.locate(state.pokemonFriend);
            if (friend) {
                pokemon.recoverFriend(friend.pokemon);
            }
        }
    });
}
function randomStartPosition() {
    return Math.floor(Math.random() * (window.innerWidth * 0.7));
}
let canvas, ctx;
function initCanvas() {
    canvas = document.getElementById('pokemonCanvas');
    if (!canvas) {
        console.log('Canvas not ready');
        return;
    }
    ctx = canvas.getContext('2d');
    if (!ctx) {
        console.log('Canvas context not ready');
        return;
    }
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}
// It cannot access the main VS Code APIs directly.
function pokemonPanelApp(basePokemonUri, theme, themeKind, pokemonColor, pokemonSize, pokemonType, throwBallWithMouse, gen, originalSpriteSize, stateApi) {
    const ballRadius = calculateBallRadius(pokemonSize);
    var floor = 0;
    if (!stateApi) {
        stateApi = acquireVsCodeApi();
    }
    // Apply Theme backgrounds
    const foregroundEl = document.getElementById('foreground');
    if (theme !== "none" /* Theme.none */) {
        var _themeKind = '';
        switch (themeKind) {
            case 2 /* ColorThemeKind.dark */:
                _themeKind = 'dark';
                break;
            case 1 /* ColorThemeKind.light */:
                _themeKind = 'light';
                break;
            case 3 /* ColorThemeKind.highContrast */:
            default:
                _themeKind = 'light';
                break;
        }
        document.body.style.backgroundImage = `url('${basePokemonUri}/backgrounds/${theme}/background-${_themeKind}-${pokemonSize}.png')`;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        foregroundEl.style.backgroundImage = `url('${basePokemonUri}/backgrounds/${theme}/foreground-${_themeKind}-${pokemonSize}.png')`;
        floor = calculateFloor(pokemonSize, theme); // Themes have pokemonCollection at a specified height from the ground
    }
    else {
        document.body.style.backgroundImage = '';
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        foregroundEl.style.backgroundImage = '';
    }
    console.log('Starting pokemon session', pokemonColor, basePokemonUri, pokemonType, throwBallWithMouse);
    // New session
    var state = stateApi?.getState();
    if (!state) {
        console.log('No state, starting a new session.');
        pokemonCounter = 1;
        exports.allPokemon.push(addPokemonToPanel(pokemonType, basePokemonUri, gen, originalSpriteSize, pokemonColor, pokemonSize, randomStartPosition(), floor, floor, (0, names_1.randomName)(pokemonType), stateApi));
        saveState(stateApi);
    }
    else {
        console.log('Recovering state - ', state);
        recoverState(basePokemonUri, gen, pokemonSize, floor, stateApi);
    }
    initCanvas();
    // Handle messages sent from the extension to the webview
    window.addEventListener('message', (event) => {
        const message = event.data; // The json data that the extension sent
        switch (message.command) {
            case 'spawn-pokemon':
                exports.allPokemon.push(addPokemonToPanel(message.type, basePokemonUri, message.generation, message.originalSpriteSize, message.color, pokemonSize, randomStartPosition(), floor, floor, message.name ?? (0, names_1.randomName)(message.type), stateApi));
                saveState(stateApi);
                break;
            case 'spawn-random-pokemon':
                var [randomPokemonType, randomPokemonConfig] = (0, pokemon_data_1.getRandomPokemonConfig)();
                exports.allPokemon.push(addPokemonToPanel(randomPokemonType, basePokemonUri, randomPokemonConfig.generation.toString(), randomPokemonConfig.originalSpriteSize ?? 32, "default" /* PokemonColor.default */, pokemonSize, randomStartPosition(), floor, floor, (0, names_1.randomName)(randomPokemonConfig.name), stateApi));
                saveState(stateApi);
                break;
            case 'list-pokemon':
                var pokemonCollection = exports.allPokemon.pokemonCollection;
                stateApi?.postMessage({
                    command: 'list-pokemon',
                    text: pokemonCollection
                        .map((pokemon) => `${pokemon.type},${pokemon.pokemon.name},${pokemon.color}`)
                        .join('\n'),
                });
                break;
            case 'roll-call':
                var pokemonCollection = exports.allPokemon.pokemonCollection;
                // go through every single
                // pokemon and then print out their name
                pokemonCollection.forEach((pokemon) => {
                    stateApi?.postMessage({
                        command: 'info',
                        text: `${pokemon.pokemon.emoji} ${pokemon.pokemon.name} (${pokemon.color} ${pokemon.type}): ${pokemon.pokemon.hello}`,
                    });
                });
            case 'delete-pokemon':
                var pokemon = exports.allPokemon.locate(message.name);
                if (pokemon) {
                    exports.allPokemon.remove(message.name);
                    saveState(stateApi);
                    stateApi?.postMessage({
                        command: 'info',
                        text: '👋 Removed pokemon ' + message.name,
                    });
                    pokemonCounter--;
                }
                else {
                    stateApi?.postMessage({
                        command: 'error',
                        text: `Could not find pokemon ${message.name}`,
                    });
                }
                break;
            case 'reset-pokemon':
                exports.allPokemon.reset();
                pokemonCounter = 0;
                saveState(stateApi);
                break;
            case 'pause-pokemon':
                pokemonCounter = 1;
                saveState(stateApi);
                break;
        }
    });
}
exports.pokemonPanelApp = pokemonPanelApp;
window.addEventListener('resize', function () {
    initCanvas();
});
//# sourceMappingURL=main.js.map