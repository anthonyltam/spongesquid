// import Util from './util';

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
        this.remove();
      }
    }
  }

  remove() {
    this.game.remove(this);
  }

  isCollidedWith(otherObject) {    
    if (this.pos[0] < otherObject.pos[0] + otherObject.width - 50 &&
      this.pos[0] + this.width - 50 > otherObject.pos[0] &&
      this.pos[1] < otherObject.pos[1] + otherObject.height - 10 &&
      this.height - 10 + this.pos[1] > otherObject.pos[1]) {
      return true;
    } else {
      return false;
    }  
  }

  collideWith() {}

}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default MovingObject;