import MovingObject from './moving_objects';
import Player from './player';
// import Util from './util';

class Squidward extends MovingObject {
  constructor(options = {}) {
    options.rad = options.rad;
    options.pos = options.pos || options.game.randomPosition();
    options.color = "orange";
    // options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
    super(options);

    let squidward = new Image();
    squidward.src = "assets/good-squid.png";
    this.squidward = squidward;
  }

  draw(ctx) {
    ctx.drawImage(this.squidward, this.pos[0], this.pos[1], this.height, this.width);
  }

  collideWith(otherObject) {
    if (otherObject instanceof Squidward) {
      // otherObject.relocate();
      // return true;
    } else if (otherObject instanceof Player) {
      // this.remove();
      // otherObject.remove();
      alert('GAME OVER! REFRESH TO RESTART');
      // return true;
    }

    return false;
  }

}

export default Squidward;