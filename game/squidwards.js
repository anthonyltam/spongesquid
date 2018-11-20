import MovingObject from './moving_objects';
import Player from './player';

class Squidward extends MovingObject {
  constructor(options = {}) {
    options.rad = options.rad;
    options.pos = options.pos || options.game.randomPosition();
    options.color = "orange";
    
    super(options);

    let squidward = new Image();
    squidward.src = "assets/good-squid.png";
    this.squidward = squidward;
  }

  draw(ctx) {
    ctx.drawImage(
      this.squidward,
      this.pos[0],
      this.pos[1],
      this.height,
      this.width 
    );
  }

  collideWith(otherObject) {
    if (otherObject instanceof Squidward) {
    } else if (otherObject instanceof Player) {
      alert("SQUIDWARD GOT YOU! REFRESHING TO RESTART");
      setTimeout(() => {
        document.location.reload();
      }, 10);
    }

    return false;
  }
}

export default Squidward;