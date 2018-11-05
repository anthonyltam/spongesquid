/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./game/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./game/entry.js":
/*!***********************!*\
  !*** ./game/entry.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./game/game.js");
/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ "./game/game_view.js");


document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('myCanvas');
  canvas.width = _game__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_X;
  canvas.height = _game__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_Y;
  const ctx = canvas.getContext("2d");
  const game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
  new _game_view__WEBPACK_IMPORTED_MODULE_1__["default"](game, ctx).start(); // const start = document.getElementById('start');
  // start.addEventListener('click', gameStart);
  // const gameStart = () => {
  //   game.draw();
  // };

  setInterval(() => {
    game.addsquidwards();
  }, 1000);
});

/***/ }),

/***/ "./game/game.js":
/*!**********************!*\
  !*** ./game/game.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _squidwards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./squidwards */ "./game/squidwards.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./game/player.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./game/util.js");




class Game {
  constructor() {
    this.squidwards = [];
    this.user = []; // this.addPlayer();

    this.addsquidwards();
  }

  over() {
    console.log("GAME OVER!");
  }

  addPlayer() {
    const player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]({
      pos: this.playerPosition(),
      game: this
    });
    this.user.push(player);
    return player;
  }

  wrap(pos) {
    return [_util__WEBPACK_IMPORTED_MODULE_2__["default"].wrap(pos[0], Game.DIM_X), _util__WEBPACK_IMPORTED_MODULE_2__["default"].wrap(pos[1], Game.DIM_Y)];
  }

  addsquidwards() {
    for (let i = 0; i < Game.NUM_SQUIDWARDS; i++) {
      const direction = [-1, 1][Math.floor(Math.random() * 2)];
      this.squidwards.push(new _squidwards__WEBPACK_IMPORTED_MODULE_0__["default"]({
        pos: this.randomPosition(direction),
        vel: [Math.ceil(Math.random() * 5) * direction, 0],
        rad: 10,
        game: this
      }));
    }
  }

  allObjects() {
    return this.user.concat(this.squidwards);
  }

  isOutOfBounds(pos, rad = 0) {
    // rad = 0;
    if (rad === 10) rad = 0;
    return pos[0] < rad || pos[1] < rad || pos[0] + rad > Game.DIM_X || pos[1] + rad > Game.DIM_Y;
  }

  randomPosition(direction) {
    let xPosition;

    if (direction < 0) {
      xPosition = Game.DIM_X;
    } else {
      xPosition = 0;
    }

    return [xPosition, Game.DIM_Y * Math.random()];
  }

  playerPosition() {
    return [Game.DIM_X / 2, Game.DIM_Y / 2];
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y); // ctx.fillStyle = Game.BG_COLOR;
    // ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach(object => {
      object.draw(ctx);
    });
  }

  moveObjects(delta) {
    // this.user[0].move();
    this.allObjects().forEach(obj => obj.move(delta));
  }

  remove(object) {
    if (object instanceof _squidwards__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      this.squidwards.splice(this.squidwards.indexOf(object), 1);
    } else {
      let [x, y] = this.user[0].vel;
      this.user[0].vel = [0, 0];
    }
  }

  step(delta) {
    // this.movesquidwards(delta);
    this.moveObjects(delta);
    this.checkCollisions();
  }

  checkCollisions() {
    const allObjects = this.allObjects();

    for (let i = 0; i < allObjects.length; i++) {
      for (let j = 0; j < allObjects.length; j++) {
        const obj1 = allObjects[i];
        const obj2 = allObjects[j];

        if (obj1.isCollidedWith(obj2)) {
          const collision = obj1.collideWith(obj2);
          if (collision) return;
        }
      }
    }
  }

}

Game.DIM_X = 900;
Game.DIM_Y = 500;
Game.BG_COLOR = 'orange';
Game.NUM_SQUIDWARDS = 1;
/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./game/game_view.js":
/*!***************************!*\
  !*** ./game/game_view.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.player = game.addPlayer();
  }

  bindKeyHandlers() {
    const player = this.player;
    Object.keys(GameView.MOVES).forEach(k => {
      const move = GameView.MOVES[k];
      key(k, () => {
        player.power(move);
      });
    });
  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;
    requestAnimationFrame(this.animate.bind(this));
  }

}

GameView.MOVES = {
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0]
};
/* harmony default export */ __webpack_exports__["default"] = (GameView);

/***/ }),

/***/ "./game/moving_objects.js":
/*!********************************!*\
  !*** ./game/moving_objects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./game/util.js");
 // import Game from './game';

class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.rad = options.rad;
    this.height = 100;
    this.width = 100;
    this.color = options.color;
    this.game = options.game;
    this.wrappable = true;
    this.draw = this.draw.bind(this);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.rad, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  move(timeDelta) {
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;
    const offsetX = this.vel[0] * velocityScale;
    const offsetY = this.vel[1] * velocityScale;
    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

    if (this.game.isOutOfBounds(this.pos, this.rad)) {
      if (this.isWrappable) {
        let pos = this.game.wrap(this.pos, this);
        let [x, y] = pos;
        this.pos = [x + this.rad, y + this.rad];
      } else {
        // console.log('NEED TO REMOVE');
        // console.log(this)
        this.remove();
      }
    }
  }

  remove() {
    // console.log('in remove!')
    this.game.remove(this);
  }

  isCollidedWith(otherObject) {
    const centerDist = _util__WEBPACK_IMPORTED_MODULE_0__["default"].dist(this.pos, otherObject.pos);
    return centerDist < this.rad + otherObject.rad;
  }

  collideWith() {}

}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
/* harmony default export */ __webpack_exports__["default"] = (MovingObject);

/***/ }),

/***/ "./game/player.js":
/*!************************!*\
  !*** ./game/player.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moving_objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_objects */ "./game/moving_objects.js");
 // import Squidward from './squidwards';

class Player extends _moving_objects__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options = {}) {
    options.rad = Player.RADIUS;
    options.vel = options.vel || [0, 0];
    options.color = 'green';
    super(options);
    let spongeBob = new Image();
    spongeBob.src = "assets/sponge.png";
    this.spongeBob = spongeBob;
  }

  power(move) {
    this.vel[0] += move[0];
    this.vel[1] += move[1];
  }

  draw(ctx) {
    // ctx.beginPath();
    // ctx.rect(this.pos[0], this.pos[1], this.height, this.width);
    // ctx.fillStyle = this.color;
    // console.log(this.rect)
    // ctx.fill();
    // console.log(ctx);
    // ctx.closePath()
    // ctx.beginPath();
    // ctx.arc(this.pos[0], this.pos[1], this.rad, 0, Math.PI * 2, false);
    // ctx.fillStyle = this.color;
    // ctx.fill();
    // ctx.closePath();
    // console.log(this.spongeBob);
    // console.log(this)
    ctx.drawImage(this.spongeBob, this.pos[0], this.pos[1], this.height, this.width);
  }

}

Player.RADIUS = 15;
/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./game/squidwards.js":
/*!****************************!*\
  !*** ./game/squidwards.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moving_objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_objects */ "./game/moving_objects.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./game/player.js");

 // import Util from './util';

class Squidward extends _moving_objects__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options = {}) {
    options.rad = options.rad;
    options.pos = options.pos || options.game.randomPosition();
    options.color = "orange"; // options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);

    super(options);
    let squidward = new Image();
    squidward.src = "assets/good-squid.png";
    this.squidward = squidward;
  }

  draw(ctx) {
    ctx.drawImage(this.squidward, this.pos[0], this.pos[1], this.height, this.width);
  }

  collideWith(otherObject) {
    if (otherObject instanceof Squidward) {// otherObject.relocate();
      // return true;
    } else if (otherObject instanceof _player__WEBPACK_IMPORTED_MODULE_1__["default"]) {
      // this.remove();
      // otherObject.remove();
      alert('GAME OVER! REFRESH TO RESTART'); // return true;
    }

    return false;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Squidward);

/***/ }),

/***/ "./game/util.js":
/*!**********************!*\
  !*** ./game/util.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Util = {
  dist(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2));
  },

  wrap(coord, max, obj) {
    if (coord < 0) {
      return max - coord % max;
    } else if (coord > max) {
      return coord % max;
    } else {
      return coord;
    }
  }

};
/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map