"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandLeftState = exports.StandRightState = exports.JumpDownLeftState = exports.ClimbWallLeftState = exports.ChaseFriendState = exports.ChaseState = exports.RunLeftState = exports.RunRightState = exports.WalkLeftState = exports.WalkRightState = exports.IdleWithBallState = exports.SwipeState = exports.LandState = exports.WallHangLeftState = exports.LieState = exports.SitIdleState = exports.resolveState = exports.isStateAboveGround = exports.BallState = exports.FrameResult = exports.HorizontalDirection = exports.PokemonPanelState = exports.PokemonElementState = exports.PokemonInstanceState = void 0;
class PokemonInstanceState {
    currentStateEnum;
}
exports.PokemonInstanceState = PokemonInstanceState;
class PokemonElementState {
    pokemonState;
    pokemonGeneration;
    originalSpriteSize;
    pokemonType;
    pokemonColor;
    elLeft;
    elBottom;
    pokemonName;
    pokemonFriend;
}
exports.PokemonElementState = PokemonElementState;
class PokemonPanelState {
    pokemonStates;
    pokemonCounter;
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
    cx;
    cy;
    vx;
    vy;
    paused;
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
    label = "sit-idle" /* States.sitIdle */;
    idleCounter;
    spriteLabel = 'idle';
    holdTime = 50;
    pokemon;
    horizontalDirection = HorizontalDirection.left;
    constructor(pokemon) {
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
    label = "sit-idle" /* States.sitIdle */;
    spriteLabel = 'idle';
    horizontalDirection = HorizontalDirection.right;
    holdTime = 50;
}
exports.SitIdleState = SitIdleState;
class LieState extends AbstractStaticState {
    label = "lie" /* States.lie */;
    spriteLabel = 'lie';
    horizontalDirection = HorizontalDirection.right;
    holdTime = 50;
}
exports.LieState = LieState;
class WallHangLeftState extends AbstractStaticState {
    label = "wall-hang-left" /* States.wallHangLeft */;
    spriteLabel = 'wallgrab';
    horizontalDirection = HorizontalDirection.left;
    holdTime = 50;
}
exports.WallHangLeftState = WallHangLeftState;
class LandState extends AbstractStaticState {
    label = "land" /* States.land */;
    spriteLabel = 'land';
    horizontalDirection = HorizontalDirection.left;
    holdTime = 10;
}
exports.LandState = LandState;
class SwipeState extends AbstractStaticState {
    label = "swipe" /* States.swipe */;
    spriteLabel = 'idle'; // use base idle sprite
    horizontalDirection = HorizontalDirection.natural;
    holdTime = 15;
}
exports.SwipeState = SwipeState;
class IdleWithBallState extends AbstractStaticState {
    label = "idle-with-ball" /* States.idleWithBall */;
    spriteLabel = 'with_ball';
    horizontalDirection = HorizontalDirection.left;
    holdTime = 30;
}
exports.IdleWithBallState = IdleWithBallState;
class WalkRightState {
    label = "walk-right" /* States.walkRight */;
    pokemon;
    spriteLabel = 'walk';
    horizontalDirection = HorizontalDirection.right;
    leftBoundary;
    speedMultiplier = 1;
    idleCounter;
    holdTime = 60;
    constructor(pokemon) {
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
    label = "walk-left" /* States.walkLeft */;
    spriteLabel = 'walk';
    horizontalDirection = HorizontalDirection.left;
    pokemon;
    speedMultiplier = 1;
    idleCounter;
    holdTime = 60;
    constructor(pokemon) {
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
    label = "run-right" /* States.runRight */;
    spriteLabel = 'walk_fast';
    speedMultiplier = 1.6;
    holdTime = 130;
}
exports.RunRightState = RunRightState;
class RunLeftState extends WalkLeftState {
    label = "run-left" /* States.runLeft */;
    spriteLabel = 'walk_fast';
    speedMultiplier = 1.6;
    holdTime = 130;
}
exports.RunLeftState = RunLeftState;
class ChaseState {
    label = "chase" /* States.chase */;
    spriteLabel = 'run';
    horizontalDirection = HorizontalDirection.left;
    ballState;
    canvas;
    pokemon;
    constructor(pokemon, ballState, canvas) {
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
    label = "chase-friend" /* States.chaseFriend */;
    spriteLabel = 'run';
    horizontalDirection = HorizontalDirection.left;
    pokemon;
    constructor(pokemon) {
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
    label = "climb-wall-left" /* States.climbWallLeft */;
    spriteLabel = 'wallclimb';
    horizontalDirection = HorizontalDirection.left;
    pokemon;
    constructor(pokemon) {
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
    label = "jump-down-left" /* States.jumpDownLeft */;
    spriteLabel = 'fall_from_grab';
    horizontalDirection = HorizontalDirection.right;
    pokemon;
    constructor(pokemon) {
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
    label = "stand-right" /* States.standRight */;
    spriteLabel = 'stand';
    horizontalDirection = HorizontalDirection.right;
    holdTime = 60;
}
exports.StandRightState = StandRightState;
class StandLeftState extends AbstractStaticState {
    label = "stand-right" /* States.standRight */;
    spriteLabel = 'stand';
    horizontalDirection = HorizontalDirection.left;
    holdTime = 60;
}
exports.StandLeftState = StandLeftState;
//# sourceMappingURL=states.js.map