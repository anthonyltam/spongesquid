import Squidward from './squidwards';
import Player from './player';
import Util from './util';

class Game {
  constructor() {
    this.squidwards = [];
    this.user = [];
    this.lost = false;
  }

  addPlayer() {
    const player = new Player({
      pos: this.playerPosition(),
      game: this
    });

    this.user.push(player);
    return player;
  }

  wrap(pos) {
    return [Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)];
  }

  addsquidwards() {
    for (let i = 0; i < Game.NUM_SQUIDWARDS; i++) {
      const direction = [-1, 1][Math.floor(Math.random() * 2)];
      this.squidwards.push(
        new Squidward({
          pos: this.randomPosition(direction),
          vel: [Math.ceil(Math.random() * 5) * direction, 0],
          rad: 10,
          game: this
        })
      );
    }
  }

  allObjects() {
    return this.user.concat(this.squidwards);
  }

  isOutOfBounds(pos, rad = 0) {
    if (rad === 10) rad = 0;
    return (
      pos[0] < rad || pos[1] < rad || pos[0] + rad > Game.DIM_X || pos[1] + rad > Game.DIM_Y
    );
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
    // places player in middle
    return [Game.DIM_X / 2, Game.DIM_Y / 2];
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach(object => {
      object.draw(ctx);
    });

    // setInterval(() => {
    //   this.addsquidwards();
    // }, 1000);
  }

  moveObjects(delta) {
    this.allObjects().forEach(obj => obj.move(delta));
  }

  remove(object) {
    if (object instanceof Squidward) {
      this.squidwards.splice(this.squidwards.indexOf(object), 1);
    } else {
      let [x, y ] = this.user[0].vel;
      this.user[0].vel = [0 , 0];
    }
  }

  step(delta) {
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
          if (collision) {
            this.lost = true;
            return;
          }
        }
      }
    }
  }
}

Game.DIM_X = 900;
Game.DIM_Y = 500;

Game.BG_COLOR = 'orange';
Game.NUM_SQUIDWARDS = 1;

export default Game;