import Util from './util';
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
    const centerDist = Util.dist(this.pos, otherObject.pos);
    return centerDist < this.rad + otherObject.rad;
  }

  collideWith() {}
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default MovingObject;