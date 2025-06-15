"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePokemonType = exports.InvalidStateError = void 0;
const states_1 = require("./states");
class InvalidStateError extends Error {
    fromState;
    pokemonType;
    constructor(fromState, pokemonType) {
        super(`Invalid state ${fromState} for pokemon type ${pokemonType}`);
        this.fromState = fromState;
        this.pokemonType = pokemonType;
    }
}
exports.InvalidStateError = InvalidStateError;
class BasePokemonType {
    label = 'base';
    static count = 0;
    sequence = {
        startingState: "sit-idle" /* States.sitIdle */,
        sequenceStates: [],
    };
    static possibleColors;
    currentState;
    currentStateEnum;
    holdState;
    holdStateEnum;
    el;
    collision;
    speech;
    _left;
    _bottom;
    pokemonRoot;
    _floor;
    _friend;
    _name;
    _speed;
    _size;
    _generation;
    _originalSpriteSize;
    constructor(spriteElement, collisionElement, speechElement, size, left, bottom, pokemonRoot, floor, name, speed, generation, originalSpriteSize) {
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
//# sourceMappingURL=base-pokemon-type.js.map