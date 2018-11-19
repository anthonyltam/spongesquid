import MovingObject from './moving_objects';

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
    ctx.drawImage(
      this.spongeBob, 
      this.pos[0], 
      this.pos[1], 
      this.height, 
      this.width
    );
  }

}

Player.RADIUS = 15;

export default Player;