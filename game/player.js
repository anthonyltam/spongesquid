import MovingObject from './moving_objects';
// import Squidward from './squidwards';

class Player extends MovingObject {
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

export default Player;