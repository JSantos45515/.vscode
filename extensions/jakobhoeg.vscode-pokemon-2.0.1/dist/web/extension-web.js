/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ALL_THEMES = exports.ALL_SCALES = exports.ALL_COLORS = exports.WebviewMessage = exports.PokemonGeneration = void 0;
var PokemonGeneration;
(function (PokemonGeneration) {
    PokemonGeneration[PokemonGeneration["Gen1"] = 1] = "Gen1";
    PokemonGeneration[PokemonGeneration["Gen2"] = 2] = "Gen2";
    // Gen3 = 3,
})(PokemonGeneration = exports.PokemonGeneration || (exports.PokemonGeneration = {}));
class WebviewMessage {
    constructor(text, command) {
        this.text = text;
        this.command = command;
    }
}
exports.WebviewMessage = WebviewMessage;
exports.ALL_COLORS = [
    "default" /* PokemonColor.default */,
];
exports.ALL_SCALES = [
    "nano" /* PokemonSize.nano */,
    "small" /* PokemonSize.small */,
    "medium" /* PokemonSize.medium */,
    "large" /* PokemonSize.large */,
];
exports.ALL_THEMES = ["none" /* Theme.none */, "forest" /* Theme.forest */, "castle" /* Theme.castle */, "beach" /* Theme.beach */];


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.randomName = void 0;
const pokemon_1 = __webpack_require__(4);
function randomName(type) {
    const collection = pokemon_1.POKEMON_NAMES;
    return (collection[Math.floor(Math.random() * collection.length)] ?? 'Unknown');
}
exports.randomName = randomName;


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.POKEMON_NAMES = exports.Pokemon = void 0;
const pokemon_data_1 = __webpack_require__(5);
const base_pokemon_type_1 = __webpack_require__(6);
class Pokemon extends base_pokemon_type_1.BasePokemonType {
    constructor(pokemonType, spriteElement, collisionElement, speechElement, size, left, bottom, pokemonRoot, floor, name, speed, generation, originalSpriteSize) {
        super(spriteElement, collisionElement, speechElement, size, left, bottom, pokemonRoot, floor, name, speed, generation, originalSpriteSize);
        this.sequence = {
            startingState: "sit-idle" /* States.sitIdle */,
            sequenceStates: [
                {
                    state: "sit-idle" /* States.sitIdle */,
                    possibleNextStates: ["walk-left" /* States.walkLeft */, "walk-right" /* States.walkRight */],
                },
                {
                    state: "walk-left" /* States.walkLeft */,
                    possibleNextStates: ["sit-idle" /* States.sitIdle */, "walk-right" /* States.walkRight */],
                },
                {
                    state: "walk-right" /* States.walkRight */,
                    possibleNextStates: ["sit-idle" /* States.sitIdle */, "walk-left" /* States.walkLeft */],
                }
            ],
        };
        this.config = pokemon_data_1.POKEMON_DATA[pokemonType] || pokemon_data_1.POKEMON_DATA.bulbasaur;
        this.label = pokemonType;
    }
    get generation() {
        return this.config.generation;
    }
    get pokedexNumber() {
        return this.config.id;
    }
    showSpeechBubble(duration = 3000, friend) {
        super.showSpeechBubble(duration, friend);
    }
    static getPokemonData(type) {
        return pokemon_data_1.POKEMON_DATA[type];
    }
}
exports.Pokemon = Pokemon;
Pokemon.possibleColors = ["default" /* PokemonColor.default */];
exports.POKEMON_NAMES = [
    'Bella',
    'Charlie',
    'Molly',
    'Coco',
    'Ruby',
    'Oscar',
    'Lucy',
    'Bailey',
    'Milo',
    'Daisy',
    'Archie',
    'Ollie',
    'Rosie',
    'Lola',
    'Frankie',
    'Roxy',
    'Poppy',
    'Luna',
    'Jack',
    'Millie',
    'Teddy',
    'Cooper',
    'Bear',
    'Rocky',
    'Alfie',
    'Hugo',
    'Bonnie',
    'Pepper',
    'Lily',
    'Tilly',
    'Leo',
    'Maggie',
    'George',
    'Mia',
    'Marley',
    'Harley',
    'Chloe',
    'Lulu',
    'Missy',
    'Jasper',
    'Billy',
    'Nala',
    'Monty',
    'Ziggy',
    'Winston',
    'Zeus',
    'Zoe',
    'Stella',
    'Sasha',
    'Rusty',
    'Gus',
    'Baxter',
    'Dexter',
    'Willow',
    'Barney',
    'Bruno',
    'Penny',
    'Honey',
    'Milly',
    'Murphy',
    'Simba',
    'Holly',
    'Benji',
    'Henry',
    'Lilly',
    'Pippa',
    'Shadow',
    'Sam',
    'Lucky',
    'Ellie',
    'Duke',
    'Jessie',
    'Cookie',
    'Harvey',
    'Bruce',
    'Jax',
    'Rex',
    'Louie',
    'Jet',
    'Banjo',
];


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRandomPokemonConfig = exports.getDefaultPokemon = exports.getPokemonByGeneration = exports.getAllPokemon = exports.POKEMON_DATA = void 0;
const types_1 = __webpack_require__(2);
exports.POKEMON_DATA = {
    bulbasaur: {
        id: 1,
        name: 'Bulbasaur',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Bulbasaur!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    ivysaur: {
        id: 2,
        name: 'Ivysaur',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Ivysaur!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    venusaur: {
        id: 3,
        name: 'Venusaur',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Venusaur!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    charmander: {
        id: 4,
        name: 'Charmander',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Charmander!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    charmeleon: {
        id: 5,
        name: 'Charmeleon',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Charmeleon!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    charizard: {
        id: 6,
        name: 'Charizard',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Charizard!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    squirtle: {
        id: 7,
        name: 'Squirtle',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Squritle!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    wartortle: {
        id: 8,
        name: 'Wartortle',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Wartortle!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    blastoise: {
        id: 9,
        name: 'Blastoise',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Blastoise!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    caterpie: {
        id: 10,
        name: 'Caterpie',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Caterpie!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    metapod: {
        id: 11,
        name: 'Metapod',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Metapod!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    butterfree: {
        id: 12,
        name: 'Butterfree',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Butterfree!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    weedle: {
        id: 13,
        name: 'Weedle',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Weedle!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    kakuna: {
        id: 14,
        name: 'Kakuna',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kakuna!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    beedrill: {
        id: 15,
        name: 'Beedrill',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Beedrill!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    pidgey: {
        id: 16,
        name: 'Pidgey',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Pidgey!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    pidgeotto: {
        id: 17,
        name: 'Pidgeotto',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Pidgeotto!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    pidgeot: {
        id: 18,
        name: 'Pidgeot',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Pidgeot!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    rattata: {
        id: 19,
        name: 'Rattata',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Rattata!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    raticate: {
        id: 20,
        name: 'Raticate',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Raticate!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    spearow: {
        id: 21,
        name: 'Spearow',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Spearow!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    fearow: {
        id: 22,
        name: 'Fearow',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Fearow!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    ekans: {
        id: 23,
        name: 'Ekans',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Ekans!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    arbok: {
        id: 24,
        name: 'Arbok',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Arbok!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    pikachu: {
        id: 25,
        name: 'Pikachu',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Pikachu!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    raichu: {
        id: 26,
        name: 'Raichu',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Raichu!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    sandshrew: {
        id: 27,
        name: 'Sandshrew',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Sandshrew!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    sandslash: {
        id: 28,
        name: 'Sandslash',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Sandslash!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    nidoran_female: {
        id: 29,
        name: 'Nidoran♀',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Nidoran!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    nidorina: {
        id: 30,
        name: 'Nidorina',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Nidorina!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    nidoqueen: {
        id: 31,
        name: 'Nidoqueen',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Nidoqueen!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    nidoran_male: {
        id: 32,
        name: 'Nidoran♂',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Nidoran!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    nidorino: {
        id: 33,
        name: 'Nidorino',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Nidorino!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    nidoking: {
        id: 34,
        name: 'Nidoking',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Nidoking!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    clefairy: {
        id: 35,
        name: 'Clefairy',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Clefairy!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    clefable: {
        id: 36,
        name: 'Clefable',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Clefable!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    vulpix: {
        id: 37,
        name: 'Vulpix',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Vulpix!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    ninetales: {
        id: 38,
        name: 'Ninetales',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Ninetales!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    jigglypuff: {
        id: 39,
        name: 'Jigglypuff',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Jigglypuff!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    wigglytuff: {
        id: 40,
        name: 'Wigglytuff',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Wigglytuff!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    zubat: {
        id: 41,
        name: 'Zubat',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Zubat!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    golbat: {
        id: 42,
        name: 'Golbat',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Golbat!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    oddish: {
        id: 43,
        name: 'Oddish',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Oddish!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    gloom: {
        id: 44,
        name: 'Gloom',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Gloom!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    vileplume: {
        id: 45,
        name: 'Vileplume',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Vileplume!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    paras: {
        id: 46,
        name: 'Paras',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Paras!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    parasect: {
        id: 47,
        name: 'Parasect',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Parasect!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    venonat: {
        id: 48,
        name: 'Venonat',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Venonat!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    venomoth: {
        id: 49,
        name: 'Venomoth',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Venomoth!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    diglett: {
        id: 50,
        name: 'Diglett',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Diglett!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    dugtrio: {
        id: 51,
        name: 'Dugtrio',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Dugtrio!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    meowth: {
        id: 52,
        name: 'Meowth',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Meowth!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    persian: {
        id: 53,
        name: 'Persian',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Persian!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    psyduck: {
        id: 54,
        name: 'Psyduck',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Psyduck!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    golduck: {
        id: 55,
        name: 'Golduck',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Golduck!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    mankey: {
        id: 56,
        name: 'Mankey',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Mankey!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    primeape: {
        id: 57,
        name: 'Primeape',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Primeape!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    growlithe: {
        id: 58,
        name: 'Growlithe',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Growlithe!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    arcanine: {
        id: 59,
        name: 'Arcanine',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Arcanine!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    poliwag: {
        id: 60,
        name: 'Poliwag',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Poliwag!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    poliwhirl: {
        id: 61,
        name: 'Poliwhirl',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Poliwhirl!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    poliwrath: {
        id: 62,
        name: 'Poliwrath',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Poliwrath!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    abra: {
        id: 63,
        name: 'Abra',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Abra!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    kadabra: {
        id: 64,
        name: 'Kadabra',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kadabra!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    alakazam: {
        id: 65,
        name: 'Alakazam',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Alakazam!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    machop: {
        id: 66,
        name: 'Machop',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Machop!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    machoke: {
        id: 67,
        name: 'Machoke',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Machoke!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    machamp: {
        id: 68,
        name: 'Machamp',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Alakazam!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    bellsprout: {
        id: 69,
        name: 'Bellsprout',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Bellsprout!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    weepinbell: {
        id: 70,
        name: 'Weepinbell',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Weepinbell!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    victreebel: {
        id: 71,
        name: 'Victreebel',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Victreebel!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    tentacool: {
        id: 72,
        name: 'Tentacool',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Tentacool!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    tentacruel: {
        id: 73,
        name: 'Tentacruel',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Tentacruel!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    geodude: {
        id: 74,
        name: 'Geodude',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Geodude!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    graveler: {
        id: 75,
        name: 'Graveler',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Graveler!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    golem: {
        id: 76,
        name: 'Golem',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Golem!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    ponyta: {
        id: 77,
        name: 'Ponyta',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Ponyta!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    rapidash: {
        id: 78,
        name: 'Rapidash',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Rapidash!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    slowpoke: {
        id: 79,
        name: 'Slowpoke',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Slowpoke!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    slowbro: {
        id: 80,
        name: 'Slowbro',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Slowbro!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    magnemite: {
        id: 81,
        name: 'Magnemite',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Magnemite!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    magneton: {
        id: 82,
        name: 'Magneton',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Magneton!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    farfetchd: {
        id: 83,
        name: 'Farfetch\'d',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Farfetch\'d!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    doduo: {
        id: 84,
        name: 'Doduo',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Doduo!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    dodrio: {
        id: 85,
        name: 'Dodrio',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Dodrio!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    seel: {
        id: 86,
        name: 'Seel',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Seel!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    dewgong: {
        id: 87,
        name: 'Dewgong',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Dewgong!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    grimer: {
        id: 88,
        name: 'Grimer',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Grimer!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    muk: {
        id: 89,
        name: 'Muk',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Muk!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    shellder: {
        id: 90,
        name: 'Shellder',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Shellder!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    cloyster: {
        id: 91,
        name: 'Cloyster',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Cloyster!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    gastly: {
        id: 92,
        name: 'Gastly',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Gastly!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    haunter: {
        id: 93,
        name: 'Haunter',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Haunter!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    gengar: {
        id: 94,
        name: 'Gengar',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Gengar!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    onix: {
        id: 95,
        name: 'Onix',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Onix!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    drowzee: {
        id: 96,
        name: 'Drowzee',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Drowzee!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    hypno: {
        id: 97,
        name: 'Hypno',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Hypno!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    krabby: {
        id: 98,
        name: 'Krabby',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Krabby!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    kingler: {
        id: 99,
        name: 'Kingler',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kingler!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    voltorb: {
        id: 100,
        name: 'Voltorb',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Voltorb!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    electrode: {
        id: 101,
        name: 'Electrode',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Electrode!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    exeggcute: {
        id: 102,
        name: 'Exeggcute',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Exeggcute!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    exeggutor: {
        id: 103,
        name: 'Exeggutor',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Exeggutor!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    cubone: {
        id: 104,
        name: 'Cubone',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Cubone!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    marowak: {
        id: 105,
        name: 'Marowak',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Marowak!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    hitmonlee: {
        id: 106,
        name: 'Hitmonlee',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Hitmonlee!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    hitmonchan: {
        id: 107,
        name: 'Hitmonchan',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Hitmonchan!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    lickitung: {
        id: 108,
        name: 'Lickitung',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Lickitung!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    koffing: {
        id: 109,
        name: 'Koffing',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Koffing!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    weezing: {
        id: 110,
        name: 'Weezing',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Weezing!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    rhyhorn: {
        id: 111,
        name: 'Rhyhorn',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Rhyhorn!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    rhydon: {
        id: 112,
        name: 'Rhydon',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Rhydon!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    chansey: {
        id: 113,
        name: 'Chansey',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Chansey!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    tangela: {
        id: 114,
        name: 'Tangela',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Tangela!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    kangaskhan: {
        id: 115,
        name: 'Kangaskhan',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kangaskhan!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    horsea: {
        id: 116,
        name: 'Horsea',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Horsea!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    seadra: {
        id: 117,
        name: 'Seadra',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Seadra!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    goldeen: {
        id: 118,
        name: 'Goldeen',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Goldeen!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    seaking: {
        id: 119,
        name: 'Seaking',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Seaking!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    staryu: {
        id: 120,
        name: 'Staryu',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Staryu!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    starmie: {
        id: 121,
        name: 'Starmie',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Starmie!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    mrmime: {
        id: 122,
        name: 'Mr. Mime',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Mr. Mime!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    scyther: {
        id: 123,
        name: 'Scyther',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Scyther!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    jynx: {
        id: 124,
        name: 'Jynx',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Jynx!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    electabuzz: {
        id: 125,
        name: 'Electabuzz',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Electabuzz!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    magmar: {
        id: 126,
        name: 'Magmar',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Magmar!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    pinsir: {
        id: 127,
        name: 'Pinsir',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Pinsir!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    tauros: {
        id: 128,
        name: 'Tauros',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Tauros!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    magikarp: {
        id: 129,
        name: 'Magikarp',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Magikarp!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    gyarados: {
        id: 130,
        name: 'Gyarados',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Gyarados!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    lapras: {
        id: 131,
        name: 'Lapras',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Lapras!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    ditto: {
        id: 132,
        name: 'Ditto',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Ditto!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    eevee: {
        id: 133,
        name: 'Eevee',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Eevee!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    vaporeon: {
        id: 134,
        name: 'Vaporeon',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Vaporeon!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    jolteon: {
        id: 135,
        name: 'Jolteon',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Jolteon!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    flareon: {
        id: 136,
        name: 'Flareon',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Flareon!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    porygon: {
        id: 137,
        name: 'Porygon',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Porygon!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    omanyte: {
        id: 138,
        name: 'Omanyte',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Omanyte!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    omastar: {
        id: 139,
        name: 'Omastar',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Omastar!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    kabuto: {
        id: 140,
        name: 'Kabuto',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kabuto!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    kabutops: {
        id: 141,
        name: 'Kabutops',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kabutops!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    aerodactyl: {
        id: 142,
        name: 'Aerodactyl',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Aerodactyl!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    snorlax: {
        id: 143,
        name: 'Snorlax',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Snorlax!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    articuno: {
        id: 144,
        name: 'Articuno',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Articuno!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    zapdos: {
        id: 145,
        name: 'Zapdos',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Zapdos!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    moltres: {
        id: 146,
        name: 'Moltres',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Moltres!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    dratini: {
        id: 147,
        name: 'Dratini',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Dratini!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    dragonair: {
        id: 148,
        name: 'Dragonair',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Dragonair!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    dragonite: {
        id: 149,
        name: 'Dragonite',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Dragonite!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    mewtwo: {
        id: 150,
        name: 'Mewtwo',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Mewtwo!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    mew: {
        id: 151,
        name: 'Mew',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Mew!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    chikorita: {
        id: 152,
        name: 'Chikorita',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Chikorita!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    bayleef: {
        id: 153,
        name: 'Bayleef',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Bayleef!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    meganium: {
        id: 154,
        name: 'Meganium',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Meganium!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    cyndaquil: {
        id: 155,
        name: 'Cyndaquil',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Cyndaquil!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    quilava: {
        id: 156,
        name: 'Quilava',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Quilava!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    typhlosion: {
        id: 157,
        name: 'Typhlosion',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Typhlosion!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    totodile: {
        id: 158,
        name: 'Totodile',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Totodile!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    croconaw: {
        id: 159,
        name: 'Croconaw',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Croconaw!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    feraligatr: {
        id: 160,
        name: 'Feraligatr',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Feraligatr!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    sentret: {
        id: 161,
        name: 'Sentret',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Sentret!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    furret: {
        id: 162,
        name: 'Furret',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Furret!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    hoothoot: {
        id: 163,
        name: 'Hoothoot',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Hoothoot!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    noctowl: {
        id: 164,
        name: 'Noctowl',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Noctowl!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    ledyba: {
        id: 165,
        name: 'Ledyba',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Ledyba!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    ledian: {
        id: 166,
        name: 'Ledian',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Ledian!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    spinarak: {
        id: 167,
        name: 'Spinarak',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Spinarak!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    ariados: {
        id: 168,
        name: 'Ariados',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Ariados!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    crobat: {
        id: 169,
        name: 'Crobat',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Crobat!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    chinchou: {
        id: 170,
        name: 'Chinchou',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Chinchou!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    lanturn: {
        id: 171,
        name: 'Lanturn',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Lanturn!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    pichu: {
        id: 172,
        name: 'Pichu',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Pichu!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    cleffa: {
        id: 173,
        name: 'Cleffa',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Cleffa!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    igglybuff: {
        id: 174,
        name: 'Igglybuff',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Igglybuff!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    togepi: {
        id: 175,
        name: 'Togepi',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Togepi!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    togetic: {
        id: 176,
        name: 'Togetic',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Togetic!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    natu: {
        id: 177,
        name: 'Natu',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Natu!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    xatu: {
        id: 178,
        name: 'Xatu',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Xatu!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    mareep: {
        id: 179,
        name: 'Mareep',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Mareep!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    flaaffy: {
        id: 180,
        name: 'Flaaffy',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Flaaffy!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    ampharos: {
        id: 181,
        name: 'Ampharos',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Ampharos!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    bellossom: {
        id: 182,
        name: 'Bellossom',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Bellossom!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    marill: {
        id: 183,
        name: 'Marill',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Marill!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    azumarill: {
        id: 184,
        name: 'Azumarill',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Azumarill!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    sudowoodo: {
        id: 185,
        name: 'Sudowoodo',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Sudowoodo!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    politoed: {
        id: 186,
        name: 'Politoed',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Politoed!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    hoppip: {
        id: 187,
        name: 'Hoppip',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Hoppip!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    skiploom: {
        id: 188,
        name: 'Skiploom',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Skiploom!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    jumpluff: {
        id: 189,
        name: 'Jumpluff',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Jumpluff!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    aipom: {
        id: 190,
        name: 'Aipom',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Aipom!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    sunkern: {
        id: 191,
        name: 'Sunkern',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Sunkern!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    sunflora: {
        id: 192,
        name: 'Sunflora',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Sunflora!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    yanma: {
        id: 193,
        name: 'Yanma',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Yanma!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    wooper: {
        id: 194,
        name: 'Wooper',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Wooper!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    quagsire: {
        id: 195,
        name: 'Quagsire',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Quagsire!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    espeon: {
        id: 196,
        name: 'Espeon',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Espeon!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    umbreon: {
        id: 197,
        name: 'Umbreon',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Umbreon!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    murkrow: {
        id: 198,
        name: 'Murkrow',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Murkrow!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    slowking: {
        id: 199,
        name: 'Slowking',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Slowking!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    misdreavus: {
        id: 200,
        name: 'Misdreavus',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Misdreavus!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    wobbuffet: {
        id: 202,
        name: 'Wobbuffet',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Wobbuffet!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    girafarig: {
        id: 203,
        name: 'Girafarig',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Girafarig!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    pineco: {
        id: 204,
        name: 'Pineco',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Pineco!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    forretress: {
        id: 205,
        name: 'Forretress',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Forretress!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    dunsparce: {
        id: 206,
        name: 'Dunsparce',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Dunsparce!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    gligar: {
        id: 207,
        name: 'Gligar',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Gligar!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    steelix: {
        id: 208,
        name: 'Steelix',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Steelix!',
        possibleColors: ["default" /* PokemonColor.default */],
        originalSpriteSize: 64,
    },
    snubbull: {
        id: 209,
        name: 'Snubbull',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Snubbull!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    granbull: {
        id: 210,
        name: 'Granbull',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Granbull!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    qwilfish: {
        id: 211,
        name: 'Qwilfish',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Qwilfish!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    scizor: {
        id: 212,
        name: 'Scizor',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Scizor!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    shuckle: {
        id: 213,
        name: 'Shuckle',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Shuckle!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    heracross: {
        id: 214,
        name: 'Heracross',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Heracross!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    sneasel: {
        id: 215,
        name: 'Sneasel',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Sneasel!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    teddiursa: {
        id: 216,
        name: 'Teddiursa',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Teddiursa!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    ursaring: {
        id: 217,
        name: 'Ursaring',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Ursaring!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    slugma: {
        id: 218,
        name: 'Slugma',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Slugma!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    magcargo: {
        id: 219,
        name: 'Magcargo',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Magcargo!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    swinub: {
        id: 220,
        name: 'Swinub',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Swinub!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    piloswine: {
        id: 221,
        name: 'Piloswine',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Piloswine!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    corsola: {
        id: 222,
        name: 'Corsola',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Corsola!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    remoraid: {
        id: 223,
        name: 'Remoraid',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Remoraid!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    octillery: {
        id: 224,
        name: 'Octillery',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Octillery!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    delibird: {
        id: 225,
        name: 'Delibird',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Delibird!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    mantine: {
        id: 226,
        name: 'Mantine',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Mantine!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    skarmory: {
        id: 227,
        name: 'Skarmory',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Skarmory!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    houndour: {
        id: 228,
        name: 'Houndour',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Houndour!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    houndoom: {
        id: 229,
        name: 'Houndoom',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Houndoom!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    kingdra: {
        id: 230,
        name: 'Kingdra',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Kingdra!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    phanpy: {
        id: 231,
        name: 'Phanpy',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Phanpy!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    donphan: {
        id: 232,
        name: 'Donphan',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Donphan!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    porygon2: {
        id: 233,
        name: 'Porygon2',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Porygon2!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    stantler: {
        id: 234,
        name: 'Stantler',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Stantler!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    smeargle: {
        id: 235,
        name: 'Smeargle',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Smeargle!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    tyrogue: {
        id: 236,
        name: 'Tyrogue',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Tyrogue!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    hitmontop: {
        id: 237,
        name: 'Hitmontop',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Hitmontop!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    smoochum: {
        id: 238,
        name: 'Smoochum',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Smoochum!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    elekid: {
        id: 239,
        name: 'Elekid',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Elekid!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    magby: {
        id: 240,
        name: 'Magby',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Magby!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    miltank: {
        id: 241,
        name: 'Miltank',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Miltank!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    blissey: {
        id: 242,
        name: 'Blissey',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Blissey!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    raikou: {
        id: 243,
        name: 'Raikou',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Raikou!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    entei: {
        id: 244,
        name: 'Entei',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Entei!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    suicune: {
        id: 245,
        name: 'Suicune',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Suicune!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    larvitar: {
        id: 246,
        name: 'Larvitar',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Larvitar!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    pupitar: {
        id: 247,
        name: 'Pupitar',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Pupitar!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    tyranitar: {
        id: 248,
        name: 'Tyranitar',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Tyranitar!',
        possibleColors: ["default" /* PokemonColor.default */]
    },
    lugia: {
        id: 249,
        name: 'Lugia',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Lugia!',
        possibleColors: ["default" /* PokemonColor.default */],
        originalSpriteSize: 64
    },
    hooh: {
        id: 255,
        name: 'Ho-Oh',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Ho-Oh!',
        possibleColors: ["default" /* PokemonColor.default */],
        originalSpriteSize: 64,
    },
};
function getAllPokemon() {
    return Object.keys(exports.POKEMON_DATA);
}
exports.getAllPokemon = getAllPokemon;
function getPokemonByGeneration(generation) {
    return Object.entries(exports.POKEMON_DATA)
        .filter(([_, config]) => config.generation === generation)
        .map(([key, _]) => key);
}
exports.getPokemonByGeneration = getPokemonByGeneration;
function getDefaultPokemon() {
    return 'bulbasaur';
}
exports.getDefaultPokemon = getDefaultPokemon;
function getRandomPokemonConfig() {
    var keys = Object.keys(exports.POKEMON_DATA);
    var randomKey = keys[Math.floor(Math.random() * keys.length)];
    return [randomKey, exports.POKEMON_DATA[randomKey]];
}
exports.getRandomPokemonConfig = getRandomPokemonConfig;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BasePokemonType = exports.InvalidStateError = void 0;
const states_1 = __webpack_require__(7);
class InvalidStateError extends Error {
    constructor(fromState, pokemonType) {
        super(`Invalid state ${fromState} for pokemon type ${pokemonType}`);
        this.fromState = fromState;
        this.pokemonType = pokemonType;
    }
}
exports.InvalidStateError = InvalidStateError;
class BasePokemonType {
    constructor(spriteElement, collisionElement, speechElement, size, left, bottom, pokemonRoot, floor, name, speed, generation, originalSpriteSize) {
        this.label = 'base';
        this.sequence = {
            startingState: "sit-idle" /* States.sitIdle */,
            sequenceStates: [],
        };
        this.el = spriteElement;
        this.collision = collisionElement;
        this.speech = speechElement;
        this.pokemonRoot = pokemonRoot;
        this._floor = floor;
        this._left = left;
        this._bottom = bottom;
        this._originalSpriteSize = originalSpriteSize;
        this.initSprite(size, left, bottom, originalSpriteSize);
        this.currentStateEnum = this.sequence.startingState;
        this.currentState = (0, states_1.resolveState)(this.currentStateEnum, this);
        this._name = name;
        this._size = size;
        this._speed = this.randomizeSpeed(speed);
        this._generation = generation;
        // Increment the static count of the Pokemon class that the constructor belongs to
        this.constructor.count += 1;
    }
    initSprite(pokemonSize, left, bottom, originalSpriteSize) {
        const spriteSize = this.calculateSpriteWidth(pokemonSize, originalSpriteSize);
        this.el.style.left = `${left}px`;
        this.el.style.bottom = `${bottom}px`;
        this.el.style.width = `${spriteSize}px`;
        this.el.style.height = `${spriteSize}px`;
        // Remove 'auto' since it gave issues with sizing
        this.el.style.maxWidth = 'none';
        this.el.style.maxHeight = 'none';
        this.collision.style.left = `${left}px`;
        this.collision.style.bottom = `${bottom}px`;
        this.collision.style.width = `${spriteSize}px`;
        this.collision.style.height = `${spriteSize}px`;
        this.speech.style.left = `${left}px`;
        this.speech.style.bottom = `${bottom + spriteSize}px`;
        this.hideSpeechBubble();
    }
    get left() {
        return this._left;
    }
    get bottom() {
        return this._bottom;
    }
    repositionAccompanyingElements() {
        this.collision.style.left = `${this._left}px`;
        this.collision.style.bottom = `${this._bottom}px`;
        this.speech.style.left = `${this._left}px`;
        this.speech.style.bottom = `${this._bottom + this.calculateSpriteWidth(this._size, this._originalSpriteSize)}px`;
    }
    calculateSpriteWidth(size, originalSpriteSize) {
        switch (size) {
            case "nano" /* PokemonSize.nano */:
                return originalSpriteSize;
            case "small" /* PokemonSize.small */:
                return originalSpriteSize * 1.5;
            case "medium" /* PokemonSize.medium */:
                return originalSpriteSize * 2;
            case "large" /* PokemonSize.large */:
                return originalSpriteSize * 2.5;
            default:
                return originalSpriteSize;
        }
    }
    positionBottom(bottom) {
        this._bottom = bottom;
        this.el.style.bottom = `${this._bottom}px`;
        this.repositionAccompanyingElements();
    }
    positionLeft(left) {
        this._left = left;
        this.el.style.left = `${this._left}px`;
        this.repositionAccompanyingElements();
    }
    get width() {
        return this.el.width;
    }
    get floor() {
        return this._floor;
    }
    get hello() {
        // return the sound of the name of the animal
        return ` says hello 👋!`;
    }
    getState() {
        return { currentStateEnum: this.currentStateEnum };
    }
    get speed() {
        return this._speed;
    }
    randomizeSpeed(speed) {
        const min = speed * 0.7;
        const max = speed * 1.3;
        const newSpeed = Math.random() * (max - min) + min;
        return newSpeed;
    }
    get isMoving() {
        return this._speed !== 0 /* PokemonSpeed.still */;
    }
    recoverFriend(friend) {
        // Recover friends..
        this._friend = friend;
    }
    recoverState(state) {
        // TODO : Resolve a bug where if it was swiping before, it would fail
        // because holdState is no longer valid.
        this.currentStateEnum = state.currentStateEnum ?? "sit-idle" /* States.sitIdle */;
        this.currentState = (0, states_1.resolveState)(this.currentStateEnum, this);
        if (!(0, states_1.isStateAboveGround)(this.currentStateEnum)) {
            // Reset the bottom of the sprite to the floor as the theme
            // has likely changed.
            this.positionBottom(this.floor);
        }
    }
    get canSwipe() {
        return !(0, states_1.isStateAboveGround)(this.currentStateEnum);
    }
    get canChase() {
        return !(0, states_1.isStateAboveGround)(this.currentStateEnum) && this.isMoving;
    }
    showSpeechBubble(duration = 3000, friend = false) {
        // Extract the media folder
        const segments = this.pokemonRoot.split('/');
        const basePath = segments.slice(0, segments.length - 3).join('/');
        if (friend) {
            this.speech.src = `${basePath}/heart.png`;
        }
        else {
            this.speech.src = `${basePath}/happy.png`;
        }
        this.speech.style.display = 'block';
        setTimeout(() => {
            this.hideSpeechBubble();
        }, duration);
    }
    hideSpeechBubble() {
        this.speech.style.display = 'none';
    }
    swipe() {
        if (this.currentStateEnum === "swipe" /* States.swipe */) {
            return;
        }
        this.holdState = this.currentState;
        this.holdStateEnum = this.currentStateEnum;
        this.currentStateEnum = "swipe" /* States.swipe */;
        this.currentState = (0, states_1.resolveState)(this.currentStateEnum, this);
        this.showSpeechBubble();
    }
    chase(ballState, canvas) {
        this.currentStateEnum = "chase" /* States.chase */;
        this.currentState = new states_1.ChaseState(this, ballState, canvas);
    }
    faceLeft() {
        this.el.style.transform = 'scaleX(-1)';
    }
    faceRight() {
        this.el.style.transform = 'scaleX(1)';
    }
    setAnimation(face) {
        if (this.el.src.endsWith(`_${face}_8fps.gif`)) {
            return;
        }
        this.el.src = `${this.pokemonRoot}_${face}_8fps.gif`;
    }
    chooseNextState(fromState) {
        // Work out next state
        var possibleNextStates = undefined;
        for (var i = 0; i < this.sequence.sequenceStates.length; i++) {
            if (this.sequence.sequenceStates[i].state === fromState) {
                possibleNextStates =
                    this.sequence.sequenceStates[i].possibleNextStates;
            }
        }
        if (!possibleNextStates) {
            throw new InvalidStateError(fromState, this.label);
        }
        // randomly choose the next state
        const idx = Math.floor(Math.random() * possibleNextStates.length);
        return possibleNextStates[idx];
    }
    nextFrame() {
        if (this.currentState.horizontalDirection === states_1.HorizontalDirection.left) {
            this.faceLeft();
        }
        else if (this.currentState.horizontalDirection === states_1.HorizontalDirection.right) {
            this.faceRight();
        }
        this.setAnimation(this.currentState.spriteLabel);
        // What's my buddy doing?
        if (this.hasFriend &&
            this.currentStateEnum !== "chase-friend" /* States.chaseFriend */ &&
            this.isMoving) {
            if (this.friend?.isPlaying &&
                !(0, states_1.isStateAboveGround)(this.currentStateEnum)) {
                this.currentState = (0, states_1.resolveState)("chase-friend" /* States.chaseFriend */, this);
                this.currentStateEnum = "chase-friend" /* States.chaseFriend */;
                return;
            }
        }
        var frameResult = this.currentState.nextFrame();
        if (frameResult === states_1.FrameResult.stateComplete) {
            // If recovering from swipe..
            if (this.holdState && this.holdStateEnum) {
                this.currentState = this.holdState;
                this.currentStateEnum = this.holdStateEnum;
                this.holdState = undefined;
                this.holdStateEnum = undefined;
                return;
            }
            var nextState = this.chooseNextState(this.currentStateEnum);
            this.currentState = (0, states_1.resolveState)(nextState, this);
            this.currentStateEnum = nextState;
        }
        else if (frameResult === states_1.FrameResult.stateCancel) {
            if (this.currentStateEnum === "chase" /* States.chase */) {
                var nextState = this.chooseNextState("idle-with-ball" /* States.idleWithBall */);
                this.currentState = (0, states_1.resolveState)(nextState, this);
                this.currentStateEnum = nextState;
            }
            else if (this.currentStateEnum === "chase-friend" /* States.chaseFriend */) {
                var nextState = this.chooseNextState("idle-with-ball" /* States.idleWithBall */);
                this.currentState = (0, states_1.resolveState)(nextState, this);
                this.currentStateEnum = nextState;
            }
        }
    }
    get hasFriend() {
        return this._friend !== undefined;
    }
    get friend() {
        return this._friend;
    }
    get name() {
        return this._name;
    }
    makeFriendsWith(friend) {
        this._friend = friend;
        console.log(this.name, ": I'm now friends ❤️ with ", friend.name);
        return true;
    }
    get isPlaying() {
        return (this.isMoving &&
            (this.currentStateEnum === "run-right" /* States.runRight */ ||
                this.currentStateEnum === "run-left" /* States.runLeft */));
    }
    get emoji() {
        return '🐶';
    }
}
exports.BasePokemonType = BasePokemonType;
BasePokemonType.count = 0;


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StandLeftState = exports.StandRightState = exports.JumpDownLeftState = exports.ClimbWallLeftState = exports.ChaseFriendState = exports.ChaseState = exports.RunLeftState = exports.RunRightState = exports.WalkLeftState = exports.WalkRightState = exports.IdleWithBallState = exports.SwipeState = exports.LandState = exports.WallHangLeftState = exports.LieState = exports.SitIdleState = exports.resolveState = exports.isStateAboveGround = exports.BallState = exports.FrameResult = exports.HorizontalDirection = exports.PokemonPanelState = exports.PokemonElementState = exports.PokemonInstanceState = void 0;
class PokemonInstanceState {
}
exports.PokemonInstanceState = PokemonInstanceState;
class PokemonElementState {
}
exports.PokemonElementState = PokemonElementState;
class PokemonPanelState {
}
exports.PokemonPanelState = PokemonPanelState;
var HorizontalDirection;
(function (HorizontalDirection) {
    HorizontalDirection[HorizontalDirection["left"] = 0] = "left";
    HorizontalDirection[HorizontalDirection["right"] = 1] = "right";
    HorizontalDirection[HorizontalDirection["natural"] = 2] = "natural";
})(HorizontalDirection = exports.HorizontalDirection || (exports.HorizontalDirection = {}));
var FrameResult;
(function (FrameResult) {
    FrameResult[FrameResult["stateContinue"] = 0] = "stateContinue";
    FrameResult[FrameResult["stateComplete"] = 1] = "stateComplete";
    // Special states
    FrameResult[FrameResult["stateCancel"] = 2] = "stateCancel";
})(FrameResult = exports.FrameResult || (exports.FrameResult = {}));
class BallState {
    constructor(cx, cy, vx, vy) {
        this.cx = cx;
        this.cy = cy;
        this.vx = vx;
        this.vy = vy;
        this.paused = false;
    }
}
exports.BallState = BallState;
function isStateAboveGround(state) {
    return (state === "climb-wall-left" /* States.climbWallLeft */ ||
        state === "jump-down-left" /* States.jumpDownLeft */ ||
        state === "land" /* States.land */ ||
        state === "wall-hang-left" /* States.wallHangLeft */);
}
exports.isStateAboveGround = isStateAboveGround;
function resolveState(state, pokemon) {
    switch (state) {
        case "sit-idle" /* States.sitIdle */:
            return new SitIdleState(pokemon);
        case "walk-right" /* States.walkRight */:
            return new WalkRightState(pokemon);
        case "walk-left" /* States.walkLeft */:
            return new WalkLeftState(pokemon);
        case "run-right" /* States.runRight */:
            return new RunRightState(pokemon);
        case "run-left" /* States.runLeft */:
            return new RunLeftState(pokemon);
        case "lie" /* States.lie */:
            return new LieState(pokemon);
        case "wall-hang-left" /* States.wallHangLeft */:
            return new WallHangLeftState(pokemon);
        case "climb-wall-left" /* States.climbWallLeft */:
            return new ClimbWallLeftState(pokemon);
        case "jump-down-left" /* States.jumpDownLeft */:
            return new JumpDownLeftState(pokemon);
        case "land" /* States.land */:
            return new LandState(pokemon);
        case "swipe" /* States.swipe */:
            return new SwipeState(pokemon);
        case "idle-with-ball" /* States.idleWithBall */:
            return new IdleWithBallState(pokemon);
        case "chase-friend" /* States.chaseFriend */:
            return new ChaseFriendState(pokemon);
        case "stand-right" /* States.standRight */:
            return new StandRightState(pokemon);
        case "stand-left" /* States.standLeft */:
            return new StandLeftState(pokemon);
    }
    return new SitIdleState(pokemon);
}
exports.resolveState = resolveState;
class AbstractStaticState {
    constructor(pokemon) {
        this.label = "sit-idle" /* States.sitIdle */;
        this.spriteLabel = 'idle';
        this.holdTime = 50;
        this.horizontalDirection = HorizontalDirection.left;
        this.idleCounter = 0;
        this.pokemon = pokemon;
    }
    nextFrame() {
        this.idleCounter++;
        if (this.idleCounter > this.holdTime) {
            return FrameResult.stateComplete;
        }
        return FrameResult.stateContinue;
    }
}
class SitIdleState extends AbstractStaticState {
    constructor() {
        super(...arguments);
        this.label = "sit-idle" /* States.sitIdle */;
        this.spriteLabel = 'idle';
        this.horizontalDirection = HorizontalDirection.right;
        this.holdTime = 50;
    }
}
exports.SitIdleState = SitIdleState;
class LieState extends AbstractStaticState {
    constructor() {
        super(...arguments);
        this.label = "lie" /* States.lie */;
        this.spriteLabel = 'lie';
        this.horizontalDirection = HorizontalDirection.right;
        this.holdTime = 50;
    }
}
exports.LieState = LieState;
class WallHangLeftState extends AbstractStaticState {
    constructor() {
        super(...arguments);
        this.label = "wall-hang-left" /* States.wallHangLeft */;
        this.spriteLabel = 'wallgrab';
        this.horizontalDirection = HorizontalDirection.left;
        this.holdTime = 50;
    }
}
exports.WallHangLeftState = WallHangLeftState;
class LandState extends AbstractStaticState {
    constructor() {
        super(...arguments);
        this.label = "land" /* States.land */;
        this.spriteLabel = 'land';
        this.horizontalDirection = HorizontalDirection.left;
        this.holdTime = 10;
    }
}
exports.LandState = LandState;
class SwipeState extends AbstractStaticState {
    constructor() {
        super(...arguments);
        this.label = "swipe" /* States.swipe */;
        this.spriteLabel = 'idle'; // use base idle sprite
        this.horizontalDirection = HorizontalDirection.natural;
        this.holdTime = 15;
    }
}
exports.SwipeState = SwipeState;
class IdleWithBallState extends AbstractStaticState {
    constructor() {
        super(...arguments);
        this.label = "idle-with-ball" /* States.idleWithBall */;
        this.spriteLabel = 'with_ball';
        this.horizontalDirection = HorizontalDirection.left;
        this.holdTime = 30;
    }
}
exports.IdleWithBallState = IdleWithBallState;
class WalkRightState {
    constructor(pokemon) {
        this.label = "walk-right" /* States.walkRight */;
        this.spriteLabel = 'walk';
        this.horizontalDirection = HorizontalDirection.right;
        this.speedMultiplier = 1;
        this.holdTime = 60;
        this.leftBoundary = Math.floor(window.innerWidth * 0.95);
        this.pokemon = pokemon;
        this.idleCounter = 0;
    }
    nextFrame() {
        this.idleCounter++;
        this.pokemon.positionLeft(this.pokemon.left + this.pokemon.speed * this.speedMultiplier);
        if (this.pokemon.isMoving &&
            this.pokemon.left >= this.leftBoundary - this.pokemon.width) {
            return FrameResult.stateComplete;
        }
        else if (!this.pokemon.isMoving && this.idleCounter > this.holdTime) {
            return FrameResult.stateComplete;
        }
        return FrameResult.stateContinue;
    }
}
exports.WalkRightState = WalkRightState;
class WalkLeftState {
    constructor(pokemon) {
        this.label = "walk-left" /* States.walkLeft */;
        this.spriteLabel = 'walk';
        this.horizontalDirection = HorizontalDirection.left;
        this.speedMultiplier = 1;
        this.holdTime = 60;
        this.pokemon = pokemon;
        this.idleCounter = 0;
    }
    nextFrame() {
        this.pokemon.positionLeft(this.pokemon.left - this.pokemon.speed * this.speedMultiplier);
        if (this.pokemon.isMoving && this.pokemon.left <= 0) {
            return FrameResult.stateComplete;
        }
        else if (!this.pokemon.isMoving && this.idleCounter > this.holdTime) {
            return FrameResult.stateComplete;
        }
        return FrameResult.stateContinue;
    }
}
exports.WalkLeftState = WalkLeftState;
class RunRightState extends WalkRightState {
    constructor() {
        super(...arguments);
        this.label = "run-right" /* States.runRight */;
        this.spriteLabel = 'walk_fast';
        this.speedMultiplier = 1.6;
        this.holdTime = 130;
    }
}
exports.RunRightState = RunRightState;
class RunLeftState extends WalkLeftState {
    constructor() {
        super(...arguments);
        this.label = "run-left" /* States.runLeft */;
        this.spriteLabel = 'walk_fast';
        this.speedMultiplier = 1.6;
        this.holdTime = 130;
    }
}
exports.RunLeftState = RunLeftState;
class ChaseState {
    constructor(pokemon, ballState, canvas) {
        this.label = "chase" /* States.chase */;
        this.spriteLabel = 'run';
        this.horizontalDirection = HorizontalDirection.left;
        this.pokemon = pokemon;
        this.ballState = ballState;
        this.canvas = canvas;
    }
    nextFrame() {
        if (this.ballState.paused) {
            return FrameResult.stateCancel; // Ball is already caught
        }
        if (this.pokemon.left > this.ballState.cx) {
            this.horizontalDirection = HorizontalDirection.left;
            this.pokemon.positionLeft(this.pokemon.left - this.pokemon.speed);
        }
        else {
            this.horizontalDirection = HorizontalDirection.right;
            this.pokemon.positionLeft(this.pokemon.left + this.pokemon.speed);
        }
        if (this.canvas.height - this.ballState.cy <
            this.pokemon.width + this.pokemon.floor &&
            this.ballState.cx < this.pokemon.left &&
            this.pokemon.left < this.ballState.cx + 15) {
            // hide ball
            this.canvas.style.display = 'none';
            this.ballState.paused = true;
            return FrameResult.stateComplete;
        }
        return FrameResult.stateContinue;
    }
}
exports.ChaseState = ChaseState;
class ChaseFriendState {
    constructor(pokemon) {
        this.label = "chase-friend" /* States.chaseFriend */;
        this.spriteLabel = 'run';
        this.horizontalDirection = HorizontalDirection.left;
        this.pokemon = pokemon;
    }
    nextFrame() {
        if (!this.pokemon.hasFriend || !this.pokemon.friend?.isPlaying) {
            return FrameResult.stateCancel; // Friend is no longer playing.
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (this.pokemon.left > this.pokemon.friend.left) {
            this.horizontalDirection = HorizontalDirection.left;
            this.pokemon.positionLeft(this.pokemon.left - this.pokemon.speed);
        }
        else {
            this.horizontalDirection = HorizontalDirection.right;
            this.pokemon.positionLeft(this.pokemon.left + this.pokemon.speed);
        }
        return FrameResult.stateContinue;
    }
}
exports.ChaseFriendState = ChaseFriendState;
class ClimbWallLeftState {
    constructor(pokemon) {
        this.label = "climb-wall-left" /* States.climbWallLeft */;
        this.spriteLabel = 'wallclimb';
        this.horizontalDirection = HorizontalDirection.left;
        this.pokemon = pokemon;
    }
    nextFrame() {
        this.pokemon.positionBottom(this.pokemon.bottom + 1);
        if (this.pokemon.bottom >= 100) {
            return FrameResult.stateComplete;
        }
        return FrameResult.stateContinue;
    }
}
exports.ClimbWallLeftState = ClimbWallLeftState;
class JumpDownLeftState {
    constructor(pokemon) {
        this.label = "jump-down-left" /* States.jumpDownLeft */;
        this.spriteLabel = 'fall_from_grab';
        this.horizontalDirection = HorizontalDirection.right;
        this.pokemon = pokemon;
    }
    nextFrame() {
        this.pokemon.positionBottom(this.pokemon.bottom - 5);
        if (this.pokemon.bottom <= this.pokemon.floor) {
            this.pokemon.positionBottom(this.pokemon.floor);
            return FrameResult.stateComplete;
        }
        return FrameResult.stateContinue;
    }
}
exports.JumpDownLeftState = JumpDownLeftState;
class StandRightState extends AbstractStaticState {
    constructor() {
        super(...arguments);
        this.label = "stand-right" /* States.standRight */;
        this.spriteLabel = 'stand';
        this.horizontalDirection = HorizontalDirection.right;
        this.holdTime = 60;
    }
}
exports.StandRightState = StandRightState;
class StandLeftState extends AbstractStaticState {
    constructor() {
        super(...arguments);
        this.label = "stand-right" /* States.standRight */;
        this.spriteLabel = 'stand';
        this.horizontalDirection = HorizontalDirection.left;
        this.holdTime = 60;
    }
}
exports.StandLeftState = StandLeftState;


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stringListAsQuickPickItemList = exports.TranslatedQuickPickItem = void 0;
const vscode = __webpack_require__(1);
class TranslatedQuickPickItem {
    constructor(label, value) {
        this.label = label;
        this.value = value;
    }
}
exports.TranslatedQuickPickItem = TranslatedQuickPickItem;
function stringListAsQuickPickItemList(collection) {
    return collection.map((el) => {
        return { label: vscode.l10n.t(String(el)), value: el };
    });
}
exports.stringListAsQuickPickItemList = stringListAsQuickPickItemList;


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.normalizeColor = exports.availableColors = exports.createPokemon = exports.InvalidPokemonException = exports.PokemonCollection = exports.PokemonElement = void 0;
const pokemon_1 = __webpack_require__(4);
class PokemonElement {
    remove() {
        this.el.remove();
        this.collision.remove();
        this.speech.remove();
        this.color = "null" /* PokemonColor.null */;
    }
    constructor(el, collision, speech, pokemon, color, type, generation, originalSpriteSize) {
        this.el = el;
        this.collision = collision;
        this.speech = speech;
        this.pokemon = pokemon;
        this.color = color;
        this.type = type;
        this.generation = generation;
        this.originalSpriteSize = originalSpriteSize;
    }
}
exports.PokemonElement = PokemonElement;
class PokemonCollection {
    constructor() {
        this._pokemonCollection = new Array(0);
    }
    get pokemonCollection() {
        return this._pokemonCollection;
    }
    push(pokemon) {
        this._pokemonCollection.push(pokemon);
    }
    reset() {
        this._pokemonCollection.forEach((pokemon) => {
            pokemon.remove();
        });
        this._pokemonCollection = [];
    }
    locate(name) {
        return this._pokemonCollection.find((collection) => {
            return collection.pokemon.name === name;
        });
    }
    remove(name) {
        this._pokemonCollection.forEach((pokemon) => {
            if (pokemon.pokemon.name === name) {
                pokemon.remove();
            }
        });
        this._pokemonCollection = this._pokemonCollection.filter((pokemon) => {
            return pokemon.pokemon.name !== name;
        });
    }
    seekNewFriends() {
        if (this._pokemonCollection.length <= 1) {
            return [];
        } // You can't be friends with yourself.
        var messages = new Array(0);
        this._pokemonCollection.forEach((pokemonInCollection) => {
            if (pokemonInCollection.pokemon.hasFriend) {
                return;
            } // I already have a friend!
            this._pokemonCollection.forEach((potentialFriend) => {
                if (potentialFriend.pokemon.hasFriend) {
                    return;
                } // Already has a friend. sorry.
                if (!potentialFriend.pokemon.canChase) {
                    return;
                } // Pokemon is busy doing something else.
                if (potentialFriend.pokemon.left > pokemonInCollection.pokemon.left &&
                    potentialFriend.pokemon.left <
                        pokemonInCollection.pokemon.left + pokemonInCollection.pokemon.width) {
                    // We found a possible new friend..
                    console.log(pokemonInCollection.pokemon.name, ' wants to be friends with ', potentialFriend.pokemon.name, '.');
                    if (pokemonInCollection.pokemon.makeFriendsWith(potentialFriend.pokemon)) {
                        potentialFriend.pokemon.showSpeechBubble(2000, true);
                        pokemonInCollection.pokemon.showSpeechBubble(2000, true);
                    }
                }
            });
        });
        return messages;
    }
}
exports.PokemonCollection = PokemonCollection;
class InvalidPokemonException {
    constructor(message) {
        this.message = message;
    }
}
exports.InvalidPokemonException = InvalidPokemonException;
function createPokemon(pokemonType, el, collision, speech, size, left, bottom, pokemonRoot, floor, name, generation, originalSpriteSize) {
    if (!name) {
        throw new InvalidPokemonException('name is undefined');
    }
    try {
        return new pokemon_1.Pokemon(pokemonType, el, collision, speech, size, left, bottom, pokemonRoot, floor, name, 3 /* PokemonSpeed.normal */, generation, originalSpriteSize);
    }
    catch (error) {
        throw new InvalidPokemonException(`Invalid Pokemon type: ${pokemonType}`);
    }
}
exports.createPokemon = createPokemon;
function availableColors(pokemonType) {
    const pokemon = pokemon_1.Pokemon.getPokemonData(pokemonType);
    return pokemon ? pokemon.possibleColors : ["default" /* PokemonColor.default */];
}
exports.availableColors = availableColors;
function normalizeColor(pokemonColor, pokemonType) {
    const colors = availableColors(pokemonType);
    return colors.includes(pokemonColor) ? pokemonColor : colors[0];
}
exports.normalizeColor = normalizeColor;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.spawnPokemonDeactivate = exports.activate = exports.storeCollectionAsMemento = exports.PokemonSpecification = void 0;
const vscode = __webpack_require__(1);
const types_1 = __webpack_require__(2);
const names_1 = __webpack_require__(3);
const localize = __webpack_require__(8);
const pokemon_collection_1 = __webpack_require__(9);
const pokemon_data_1 = __webpack_require__(5);
const EXTRA_POKEMON_KEY = 'vscode-pokemon.extra-pokemon';
const EXTRA_POKEMON_KEY_TYPES = EXTRA_POKEMON_KEY + '.types';
const EXTRA_POKEMON_KEY_COLORS = EXTRA_POKEMON_KEY + '.colors';
const EXTRA_POKEMON_KEY_NAMES = EXTRA_POKEMON_KEY + '.names';
const DEFAULT_POKEMON_SCALE = "nano" /* PokemonSize.nano */;
const DEFAULT_COLOR = "default" /* PokemonColor.default */;
const DEFAULT_POKEMON_TYPE = (0, pokemon_data_1.getDefaultPokemon)();
const DEFAULT_POSITION = "panel" /* ExtPosition.panel */;
const DEFAULT_THEME = "none" /* Theme.none */;
class PokemonQuickPickItem {
    constructor(name_, type, color) {
        this.name_ = name_;
        this.type = type;
        this.color = color;
        this.name = name_;
        this.label = name_;
        this.description = `${color} ${type}`;
    }
}
let webviewViewProvider;
function getConfiguredSize() {
    var size = vscode.workspace
        .getConfiguration('vscode-pokemon')
        .get('pokemonSize', DEFAULT_POKEMON_SCALE);
    if (types_1.ALL_SCALES.lastIndexOf(size) === -1) {
        size = DEFAULT_POKEMON_SCALE;
    }
    return size;
}
function getConfiguredTheme() {
    var theme = vscode.workspace
        .getConfiguration('vscode-pokemon')
        .get('theme', DEFAULT_THEME);
    if (types_1.ALL_THEMES.lastIndexOf(theme) === -1) {
        theme = DEFAULT_THEME;
    }
    return theme;
}
function getConfiguredThemeKind() {
    return vscode.window.activeColorTheme.kind;
}
function getConfigurationPosition() {
    return vscode.workspace
        .getConfiguration('vscode-pokemon')
        .get('position', DEFAULT_POSITION);
}
function getThrowWithMouseConfiguration() {
    return vscode.workspace
        .getConfiguration('vscode-pokemon')
        .get('throwBallWithMouse', true);
}
function updatePanelThrowWithMouse() {
    const panel = getPokemonPanel();
    if (panel !== undefined) {
        panel.setThrowWithMouse(getThrowWithMouseConfiguration());
    }
}
async function updateExtensionPositionContext() {
    await vscode.commands.executeCommand('setContext', 'vscode-pokemon.position', getConfigurationPosition());
}
class PokemonSpecification {
    constructor(color, type, size, name, generation, originalSpriteSize) {
        this.color = color;
        this.type = type;
        this.size = size;
        if (!name) {
            this.name = (0, names_1.randomName)(type);
        }
        else {
            this.name = name;
        }
        this.generation = generation || `gen${pokemon_data_1.POKEMON_DATA[type].generation}`;
        this.originalSpriteSize = pokemon_data_1.POKEMON_DATA[type].originalSpriteSize || 32;
    }
    static fromConfiguration() {
        var color = vscode.workspace
            .getConfiguration('vscode-pokemon')
            .get('pokemonColor', DEFAULT_COLOR);
        if (types_1.ALL_COLORS.lastIndexOf(color) === -1) {
            color = DEFAULT_COLOR;
        }
        var type = vscode.workspace
            .getConfiguration('vscode-pokemon')
            .get('pokemonType', DEFAULT_POKEMON_TYPE);
        // Use POKEMON_DATA to validate the type
        if (!pokemon_data_1.POKEMON_DATA[type]) {
            type = DEFAULT_POKEMON_TYPE;
        }
        return new PokemonSpecification(color, type, getConfiguredSize());
    }
    static collectionFromMemento(context, size) {
        var contextTypes = context.globalState.get(EXTRA_POKEMON_KEY_TYPES, []);
        var contextColors = context.globalState.get(EXTRA_POKEMON_KEY_COLORS, []);
        var contextNames = context.globalState.get(EXTRA_POKEMON_KEY_NAMES, []);
        var result = new Array();
        for (let index = 0; index < contextTypes.length; index++) {
            result.push(new PokemonSpecification(contextColors?.[index] ?? DEFAULT_COLOR, contextTypes[index], size, contextNames[index]));
        }
        return result;
    }
}
exports.PokemonSpecification = PokemonSpecification;
async function storeCollectionAsMemento(context, collection) {
    var contextTypes = new Array(collection.length);
    var contextColors = new Array(collection.length);
    var contextNames = new Array(collection.length);
    for (let index = 0; index < collection.length; index++) {
        contextTypes[index] = collection[index].type;
        contextColors[index] = collection[index].color;
        contextNames[index] = collection[index].name;
    }
    await context.globalState.update(EXTRA_POKEMON_KEY_TYPES, contextTypes);
    await context.globalState.update(EXTRA_POKEMON_KEY_COLORS, contextColors);
    await context.globalState.update(EXTRA_POKEMON_KEY_NAMES, contextNames);
    context.globalState.setKeysForSync([
        EXTRA_POKEMON_KEY_TYPES,
        EXTRA_POKEMON_KEY_COLORS,
        EXTRA_POKEMON_KEY_NAMES,
    ]);
}
exports.storeCollectionAsMemento = storeCollectionAsMemento;
let spawnPokemonStatusBar;
async function handleRemovePokemonMessage(message) {
    var pokemonList = Array();
    switch (message.command) {
        case 'list-pokemon':
            message.text.split('\n').forEach((pokemon) => {
                if (!pokemon) {
                    return;
                }
                var parts = pokemon.split(',');
                pokemonList.push({
                    type: parts[0],
                    name: parts[1],
                    color: parts[2],
                });
            });
            break;
        default:
            return;
    }
    if (!pokemonList) {
        return;
    }
    if (!pokemonList.length) {
        await vscode.window.showErrorMessage(vscode.l10n.t('There are no pokemon to remove.'));
        return;
    }
    await vscode.window
        .showQuickPick(pokemonList.map((val) => {
        return new PokemonQuickPickItem(val.name, val.type, val.color);
    }), {
        placeHolder: vscode.l10n.t('Select the pokemon to remove.'),
    })
        .then(async (pokemon) => {
        if (pokemon) {
            const panel = getPokemonPanel();
            if (panel !== undefined) {
                panel.deletePokemon(pokemon.name);
                const collection = pokemonList
                    .filter((item) => {
                    return item.name !== pokemon.name;
                })
                    .map((item) => {
                    return new PokemonSpecification(item.color, item.type, "medium" /* PokemonSize.medium */, item.name);
                });
                await storeCollectionAsMemento(this, collection);
            }
        }
    });
}
function getPokemonPanel() {
    if (getConfigurationPosition() === "explorer" /* ExtPosition.explorer */ &&
        webviewViewProvider) {
        return webviewViewProvider;
    }
    else if (PokemonPanel.currentPanel) {
        return PokemonPanel.currentPanel;
    }
    else {
        return undefined;
    }
}
function getWebview() {
    if (getConfigurationPosition() === "explorer" /* ExtPosition.explorer */ &&
        webviewViewProvider) {
        return webviewViewProvider.getWebview();
    }
    else if (PokemonPanel.currentPanel) {
        return PokemonPanel.currentPanel.getWebview();
    }
}
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pokemon.start', async () => {
        if (getConfigurationPosition() === "explorer" /* ExtPosition.explorer */ &&
            webviewViewProvider) {
            await vscode.commands.executeCommand('pokemonView.focus');
        }
        else {
            const spec = PokemonSpecification.fromConfiguration();
            PokemonPanel.createOrShow(context.extensionUri, spec.color, spec.type, spec.size, spec.generation, spec.originalSpriteSize, getConfiguredTheme(), getConfiguredThemeKind(), getThrowWithMouseConfiguration());
            if (PokemonPanel.currentPanel) {
                var collection = PokemonSpecification.collectionFromMemento(context, getConfiguredSize());
                collection.forEach((item) => {
                    PokemonPanel.currentPanel?.spawnPokemon(item);
                });
                // Store the collection in the memento, incase any of the null values (e.g. name) have been set
                await storeCollectionAsMemento(context, collection);
            }
        }
    }));
    spawnPokemonStatusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    spawnPokemonStatusBar.command = 'vscode-pokemon.spawn-pokemon';
    context.subscriptions.push(spawnPokemonStatusBar);
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateStatusBar));
    context.subscriptions.push(vscode.window.onDidChangeTextEditorSelection(updateStatusBar));
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateExtensionPositionContext));
    updateStatusBar();
    const spec = PokemonSpecification.fromConfiguration();
    webviewViewProvider = new PokemonWebviewViewProvider(context.extensionUri, spec.color, spec.type, spec.size, spec.generation, spec.originalSpriteSize, getConfiguredTheme(), getConfiguredThemeKind(), getThrowWithMouseConfiguration());
    updateExtensionPositionContext().catch((e) => {
        console.error(e);
    });
    context.subscriptions.push(vscode.window.registerWebviewViewProvider(PokemonWebviewViewProvider.viewType, webviewViewProvider));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pokemon.delete-pokemon', async () => {
        const panel = getPokemonPanel();
        if (panel !== undefined) {
            panel.listPokemon();
            getWebview()?.onDidReceiveMessage(handleRemovePokemonMessage, context);
        }
        else {
            await createPokemonPlayground(context);
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pokemon.roll-call', async () => {
        const panel = getPokemonPanel();
        if (panel !== undefined) {
            panel.rollCall();
        }
        else {
            await createPokemonPlayground(context);
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pokemon.export-pokemon-list', async () => {
        const pokemonCollection = PokemonSpecification.collectionFromMemento(context, getConfiguredSize());
        const pokemonJson = JSON.stringify(pokemonCollection, null, 2);
        const fileName = `pokemonCollection-${Date.now()}.json`;
        if (!vscode.workspace.workspaceFolders) {
            await vscode.window.showErrorMessage(vscode.l10n.t('You must have a folder or workspace open to export pokemonCollection.'));
            return;
        }
        const filePath = vscode.Uri.joinPath(vscode.workspace.workspaceFolders[0].uri, fileName);
        const newUri = vscode.Uri.file(fileName).with({
            scheme: 'untitled',
            path: filePath.fsPath,
        });
        await vscode.workspace
            .openTextDocument(newUri)
            .then(async (doc) => {
            await vscode.window
                .showTextDocument(doc)
                .then(async (editor) => {
                await editor.edit((edit) => {
                    edit.insert(new vscode.Position(0, 0), pokemonJson);
                });
            });
        });
    }));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pokemon.import-pokemon-list', async () => {
        const options = {
            canSelectMany: false,
            openLabel: 'Open pokemonCollection.json',
            filters: {
                json: ['json'],
            },
        };
        const fileUri = await vscode.window.showOpenDialog(options);
        if (fileUri && fileUri[0]) {
            console.log('Selected file: ' + fileUri[0].fsPath);
            try {
                const fileContents = await vscode.workspace.fs.readFile(fileUri[0]);
                const pokemonToLoad = JSON.parse(String.fromCharCode.apply(null, Array.from(fileContents)));
                // load the pokemon into the collection
                var collection = PokemonSpecification.collectionFromMemento(context, getConfiguredSize());
                // fetch just the pokemon types
                const panel = getPokemonPanel();
                for (let i = 0; i < pokemonToLoad.length; i++) {
                    const pokemon = pokemonToLoad[i];
                    const pokemonSpec = new PokemonSpecification((0, pokemon_collection_1.normalizeColor)(pokemon.color, pokemon.type), pokemon.type, pokemon.size, pokemon.name);
                    collection.push(pokemonSpec);
                    if (panel !== undefined) {
                        panel.spawnPokemon(pokemonSpec);
                    }
                }
                await storeCollectionAsMemento(context, collection);
            }
            catch (e) {
                await vscode.window.showErrorMessage(vscode.l10n.t('Failed to import pokemon: {0}', e?.message));
            }
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pokemon.spawn-pokemon', async () => {
        const panel = getPokemonPanel();
        if (getConfigurationPosition() === "explorer" /* ExtPosition.explorer */ && webviewViewProvider) {
            await vscode.commands.executeCommand('pokemonView.focus');
        }
        if (panel) {
            // First, select a generation
            const generations = Object.values(types_1.PokemonGeneration)
                .filter(gen => typeof gen === 'number')
                .map(gen => ({
                label: `Generation ${gen}`,
                value: gen,
                description: `Gen ${gen} Pokémon`
            }));
            const selectedGeneration = await vscode.window.showQuickPick(generations, {
                placeHolder: vscode.l10n.t('Select a generation'),
            });
            if (!selectedGeneration) {
                console.log('Cancelled Spawning Pokemon - No Generation Selected');
                return;
            }
            // Get Pokémon from selected generation
            const pokemonInGeneration = (0, pokemon_data_1.getPokemonByGeneration)(selectedGeneration.value);
            const pokemonOptions = pokemonInGeneration.map(type => ({
                label: pokemon_data_1.POKEMON_DATA[type].name,
                value: type,
                description: `#${pokemon_data_1.POKEMON_DATA[type].id.toString().padStart(4, '0')}`
            }));
            const selectedPokemonType = await vscode.window.showQuickPick(pokemonOptions, {
                placeHolder: vscode.l10n.t('Select a Pokémon'),
            });
            if (!selectedPokemonType) {
                console.log('Cancelled Spawning Pokemon - No Pokémon Selected');
                return;
            }
            // Rest of the existing code
            var pokemonColor = DEFAULT_COLOR;
            const possibleColors = (0, pokemon_collection_1.availableColors)(selectedPokemonType.value);
            if (possibleColors.length > 1) {
                var selectedColor = await vscode.window.showQuickPick(localize.stringListAsQuickPickItemList(possibleColors), {
                    placeHolder: vscode.l10n.t('Select a color'),
                });
                if (!selectedColor) {
                    console.log('Cancelled Spawning Pokemon - No Color Selected');
                    return;
                }
                pokemonColor = selectedColor.value;
            }
            else {
                pokemonColor = possibleColors[0];
            }
            const name = await vscode.window.showInputBox({
                placeHolder: vscode.l10n.t('Leave blank for a random name'),
                prompt: vscode.l10n.t('Name your Pokémon'),
                value: (0, names_1.randomName)(selectedPokemonType.value),
            });
            const spec = new PokemonSpecification(pokemonColor, selectedPokemonType.value, getConfiguredSize(), name);
            panel.spawnPokemon(spec);
            var collection = PokemonSpecification.collectionFromMemento(context, getConfiguredSize());
            collection.push(spec);
            await storeCollectionAsMemento(context, collection);
        }
        else {
            await createPokemonPlayground(context);
            await vscode.window.showInformationMessage(vscode.l10n.t("A Pokemon Playground has been created. You can now use the 'Spawn Additional Pokemon' Command to add more Pokemon."));
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pokemon.spawn-random-pokemon', async () => {
        const panel = getPokemonPanel();
        if (getConfigurationPosition() === "explorer" /* ExtPosition.explorer */ && webviewViewProvider) {
            await vscode.commands.executeCommand('pokemonView.focus');
        }
        if (panel) {
            var [randomPokemonType, randomPokemonConfig] = (0, pokemon_data_1.getRandomPokemonConfig)();
            const spec = new PokemonSpecification(randomPokemonConfig.possibleColors[0], randomPokemonType, getConfiguredSize(), randomPokemonConfig.name);
            panel.spawnPokemon(spec);
            var collection = PokemonSpecification.collectionFromMemento(context, getConfiguredSize());
            collection.push(spec);
            await storeCollectionAsMemento(context, collection);
        }
        else {
            await createPokemonPlayground(context);
            await vscode.window.showInformationMessage(vscode.l10n.t("A Pokemon Playground has been created. You can now use the 'Remove All Pokemon' Command to remove all Pokemon."));
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pokemon.remove-all-pokemon', async () => {
        const panel = getPokemonPanel();
        if (panel !== undefined) {
            panel.resetPokemon();
            await storeCollectionAsMemento(context, []);
        }
        else {
            await createPokemonPlayground(context);
            await vscode.window.showInformationMessage(vscode.l10n.t("A Pokemon Playground has been created. You can now use the 'Remove All Pokemon' Command to remove all Pokemon."));
        }
    }));
    // Listening to configuration changes
    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration((e) => {
        if (e.affectsConfiguration('vscode-pokemon.pokemonColor') ||
            e.affectsConfiguration('vscode-pokemon.pokemonType') ||
            e.affectsConfiguration('vscode-pokemon.pokemonSize') ||
            e.affectsConfiguration('vscode-pokemon.theme') ||
            e.affectsConfiguration('workbench.colorTheme')) {
            const spec = PokemonSpecification.fromConfiguration();
            const panel = getPokemonPanel();
            if (panel) {
                panel.updatePokemonColor(spec.color);
                panel.updatePokemonSize(spec.size);
                panel.updatePokemonType(spec.type);
                panel.updateTheme(getConfiguredTheme(), getConfiguredThemeKind());
                panel.update();
            }
        }
        if (e.affectsConfiguration('vscode-pokemon.position')) {
            void updateExtensionPositionContext();
        }
        if (e.affectsConfiguration('vscode-pokemon.throwBallWithMouse')) {
            updatePanelThrowWithMouse();
        }
    }));
    if (vscode.window.registerWebviewPanelSerializer) {
        // Make sure we register a serializer in activation event
        vscode.window.registerWebviewPanelSerializer(PokemonPanel.viewType, {
            async deserializeWebviewPanel(webviewPanel) {
                // Reset the webview options so we use latest uri for `localResourceRoots`.
                webviewPanel.webview.options = getWebviewOptions(context.extensionUri);
                const spec = PokemonSpecification.fromConfiguration();
                PokemonPanel.revive(webviewPanel, context.extensionUri, spec.color, spec.type, spec.size, spec.generation, spec.originalSpriteSize, getConfiguredTheme(), getConfiguredThemeKind(), getThrowWithMouseConfiguration());
            },
        });
    }
}
exports.activate = activate;
function updateStatusBar() {
    spawnPokemonStatusBar.text = `$(squirrel)`;
    spawnPokemonStatusBar.tooltip = vscode.l10n.t('Spawn Pokemon');
    spawnPokemonStatusBar.show();
}
function spawnPokemonDeactivate() {
    spawnPokemonStatusBar.dispose();
}
exports.spawnPokemonDeactivate = spawnPokemonDeactivate;
function getWebviewOptions(extensionUri) {
    return {
        // Enable javascript in the webview
        enableScripts: true,
        // And restrict the webview to only loading content from our extension's `media` directory.
        localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'media')],
    };
}
class PokemonWebviewContainer {
    constructor(extensionUri, color, type, size, generation, originalSpriteSize, theme, themeKind, throwBallWithMouse) {
        this._disposables = [];
        this._extensionUri = extensionUri;
        this._pokemonColor = color;
        this._pokemonType = type;
        this._pokemonSize = size;
        this._pokemonGeneration = generation;
        this._pokemonOriginalSpriteSize = originalSpriteSize;
        this._theme = theme;
        this._themeKind = themeKind;
        this._throwBallWithMouse = throwBallWithMouse;
    }
    pokemonColor() {
        return (0, pokemon_collection_1.normalizeColor)(this._pokemonColor, this._pokemonType);
    }
    pokemonType() {
        return this._pokemonType;
    }
    pokemonSize() {
        return this._pokemonSize;
    }
    pokemonGeneration() {
        return this._pokemonGeneration;
    }
    pokemonOriginalSpriteSize() {
        return this._pokemonOriginalSpriteSize;
    }
    theme() {
        return this._theme;
    }
    themeKind() {
        return this._themeKind;
    }
    throwBallWithMouse() {
        return this._throwBallWithMouse;
    }
    updatePokemonColor(newColor) {
        this._pokemonColor = newColor;
    }
    updatePokemonType(newType) {
        this._pokemonType = newType;
    }
    updatePokemonSize(newSize) {
        this._pokemonSize = newSize;
    }
    updatePokemonGeneration(newGeneration) {
        this._pokemonGeneration = newGeneration;
    }
    updateTheme(newTheme, themeKind) {
        this._theme = newTheme;
        this._themeKind = themeKind;
    }
    setThrowWithMouse(newThrowWithMouse) {
        this._throwBallWithMouse = newThrowWithMouse;
        void this.getWebview().postMessage({
            command: 'throw-with-mouse',
            enabled: newThrowWithMouse,
        });
    }
    throwBall() {
        void this.getWebview().postMessage({
            command: 'throw-ball',
        });
    }
    resetPokemon() {
        void this.getWebview().postMessage({
            command: 'reset-pokemon',
        });
    }
    spawnPokemon(spec) {
        void this.getWebview().postMessage({
            command: 'spawn-pokemon',
            type: spec.type,
            color: spec.color,
            name: spec.name,
            generation: spec.generation,
            originalSpriteSize: spec.originalSpriteSize,
        });
        void this.getWebview().postMessage({
            command: 'set-size',
            size: spec.size,
        });
    }
    listPokemon() {
        void this.getWebview().postMessage({ command: 'list-pokemon' });
    }
    rollCall() {
        void this.getWebview().postMessage({ command: 'roll-call' });
    }
    deletePokemon(pokemonName) {
        void this.getWebview().postMessage({
            command: 'delete-pokemon',
            name: pokemonName,
        });
    }
    getWebview() {
        throw new Error('Not implemented');
    }
    _update() {
        const webview = this.getWebview();
        webview.html = this._getHtmlForWebview(webview);
    }
    update() { }
    _getHtmlForWebview(webview) {
        // Local path to main script run in the webview
        const scriptPathOnDisk = vscode.Uri.joinPath(this._extensionUri, 'media', 'main-bundle.js');
        // And the uri we use to load this script in the webview
        const scriptUri = webview.asWebviewUri(scriptPathOnDisk);
        // Local path to css styles
        const styleResetPath = vscode.Uri.joinPath(this._extensionUri, 'media', 'reset.css');
        const stylesPathMainPath = vscode.Uri.joinPath(this._extensionUri, 'media', 'pokemon.css');
        const silkScreenFontPath = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'Silkscreen-Regular.ttf'));
        // Uri to load styles into webview
        const stylesResetUri = webview.asWebviewUri(styleResetPath);
        const stylesMainUri = webview.asWebviewUri(stylesPathMainPath);
        // Get path to resource on disk
        const basePokemonUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media'));
        // Use a nonce to only allow specific scripts to be run
        const nonce = getNonce();
        return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<!--
					Use a content security policy to only allow loading images from https or from our extension directory,
					and only allow scripts that have a specific nonce.
				-->
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'nonce-${nonce}'; img-src ${webview.cspSource} https:; script-src 'nonce-${nonce}';
                font-src ${webview.cspSource};">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link href="${stylesResetUri}" rel="stylesheet" nonce="${nonce}">
				<link href="${stylesMainUri}" rel="stylesheet" nonce="${nonce}">
                <style nonce="${nonce}">
                @font-face {
                    font-family: 'silkscreen';
                    src: url('${silkScreenFontPath}') format('truetype');
                }
                </style>
				<title>VS Code Pokemon</title>
			</head>
			<body>
                <canvas id="pokemonCanvas"></canvas>
                <div id="pokemonContainer"></div>
                <div id="foreground"></div>
                <script nonce="${nonce}" src="${scriptUri}"></script>
                <script nonce="${nonce}">
                    pokemonApp.pokemonPanelApp(
                        "${basePokemonUri}",
                        "${this.theme()}",
                        ${this.themeKind()},
                        "${this.pokemonColor()}",
                        "${this.pokemonSize()}",
                        "${this.pokemonType()}",
                        "${this.throwBallWithMouse()}",
                        "${this.pokemonGeneration()}",
                        "${this.pokemonOriginalSpriteSize()}",
                    );
                </script>
            </body>
			</html>`;
    }
}
function handleWebviewMessage(message) {
    switch (message.command) {
        case 'alert':
            void vscode.window.showErrorMessage(message.text);
            return;
        case 'info':
            void vscode.window.showInformationMessage(message.text);
            return;
    }
}
/**
 * Manages pokemon coding webview panels
 */
class PokemonPanel extends PokemonWebviewContainer {
    static createOrShow(extensionUri, pokemonColor, pokemonType, pokemonSize, pokemonGeneration, pokemonOriginalSpriteSize, theme, themeKind, throwBallWithMouse) {
        const column = vscode.window.activeTextEditor
            ? vscode.window.activeTextEditor.viewColumn
            : undefined;
        // If we already have a panel, show it.
        if (PokemonPanel.currentPanel) {
            if (pokemonColor === PokemonPanel.currentPanel.pokemonColor() &&
                pokemonType === PokemonPanel.currentPanel.pokemonType() &&
                pokemonSize === PokemonPanel.currentPanel.pokemonSize() &&
                pokemonGeneration === PokemonPanel.currentPanel.pokemonGeneration()) {
                PokemonPanel.currentPanel._panel.reveal(column);
                return;
            }
            else {
                PokemonPanel.currentPanel.updatePokemonColor(pokemonColor);
                PokemonPanel.currentPanel.updatePokemonType(pokemonType);
                PokemonPanel.currentPanel.updatePokemonSize(pokemonSize);
                PokemonPanel.currentPanel.update();
            }
        }
        // Otherwise, create a new panel.
        const panel = vscode.window.createWebviewPanel(PokemonPanel.viewType, vscode.l10n.t('Pokemon Panel'), vscode.ViewColumn.Two, getWebviewOptions(extensionUri));
        PokemonPanel.currentPanel = new PokemonPanel(panel, extensionUri, pokemonColor, pokemonType, pokemonSize, pokemonGeneration, pokemonOriginalSpriteSize, theme, themeKind, throwBallWithMouse);
    }
    resetPokemon() {
        void this.getWebview().postMessage({ command: 'reset-pokemon' });
    }
    listPokemon() {
        void this.getWebview().postMessage({ command: 'list-pokemon' });
    }
    rollCall() {
        void this.getWebview().postMessage({ command: 'roll-call' });
    }
    deletePokemon(pokemonName) {
        void this.getWebview().postMessage({
            command: 'delete-pokemon',
            name: pokemonName,
        });
    }
    static revive(panel, extensionUri, pokemonColor, pokemonType, pokemonSize, pokemonGeneration, pokemonOriginalSpriteSize, theme, themeKind, throwBallWithMouse) {
        PokemonPanel.currentPanel = new PokemonPanel(panel, extensionUri, pokemonColor, pokemonType, pokemonSize, pokemonGeneration, pokemonOriginalSpriteSize, theme, themeKind, throwBallWithMouse);
    }
    constructor(panel, extensionUri, color, type, size, generation, originalSpriteSize, theme, themeKind, throwBallWithMouse) {
        super(extensionUri, color, type, size, generation, originalSpriteSize, theme, themeKind, throwBallWithMouse);
        this._panel = panel;
        // Set the webview's initial html content
        this._update();
        // Listen for when the panel is disposed
        // This happens when the user closes the panel or when the panel is closed programmatically
        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
        // Update the content based on view changes
        this._panel.onDidChangeViewState(() => {
            this.update();
        }, null, this._disposables);
        // Handle messages from the webview
        this._panel.webview.onDidReceiveMessage(handleWebviewMessage, null, this._disposables);
    }
    dispose() {
        PokemonPanel.currentPanel = undefined;
        // Clean up our resources
        this._panel.dispose();
        while (this._disposables.length) {
            const x = this._disposables.pop();
            if (x) {
                x.dispose();
            }
        }
    }
    update() {
        if (this._panel.visible) {
            this._update();
        }
    }
    getWebview() {
        return this._panel.webview;
    }
}
PokemonPanel.viewType = 'pokemonCoding';
class PokemonWebviewViewProvider extends PokemonWebviewContainer {
    resolveWebviewView(webviewView) {
        this._webviewView = webviewView;
        webviewView.webview.options = getWebviewOptions(this._extensionUri);
        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
        webviewView.webview.onDidReceiveMessage(handleWebviewMessage, null, this._disposables);
    }
    update() {
        this._update();
    }
    getWebview() {
        if (this._webviewView === undefined) {
            throw new Error(vscode.l10n.t('Panel not active, make sure the pokemon view is visible before running this command.'));
        }
        else {
            return this._webviewView.webview;
        }
    }
}
PokemonWebviewViewProvider.viewType = 'pokemonView';
function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
async function createPokemonPlayground(context) {
    const spec = PokemonSpecification.fromConfiguration();
    PokemonPanel.createOrShow(context.extensionUri, spec.color, spec.type, spec.size, spec.generation, spec.originalSpriteSize, getConfiguredTheme(), getConfiguredThemeKind(), getThrowWithMouseConfiguration());
    if (PokemonPanel.currentPanel) {
        var collection = PokemonSpecification.collectionFromMemento(context, getConfiguredSize());
        collection.forEach((item) => {
            PokemonPanel.currentPanel?.spawnPokemon(item);
        });
        await storeCollectionAsMemento(context, collection);
    }
    else {
        var collection = PokemonSpecification.collectionFromMemento(context, getConfiguredSize());
        collection.push(spec);
        await storeCollectionAsMemento(context, collection);
    }
}

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=extension-web.js.map