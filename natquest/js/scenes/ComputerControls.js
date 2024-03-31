
export default class ComputerControls extends Phaser.Scene  {
  constructor() {
    super({ key: 'ComputerControls' });

    this.player = null; // Initialize player reference
    this.speed = 0; // Initialize speed
    //this.velocity = this.player.body.velocity;
    this.cursors = null;
    this.velocity = nuill;
   //this.player.body = player.body;
   //this.player.body.velocity = player.body.velocity;
  }


    init(data) {
    // Retrieve player reference and speed from the data object
    this.player = data.player;
    this.speed = data.speed;
      this.velocity = data.velocity;
      this.cursors = data.cursors;
  console.log("Received player in ComputerControls:", this.player); // Log player reference
       console.log("Received player body in ComputerControls:", this.player.body);
      // console.log("Received player body velocity in ComputerControls:", this.player.body.velocity); // Log player reference
      // Log player reference
  }

  
  preload() {

  }

  create() {

  // Create controls for arrow keys and WASD
  this.cursors = this.input.keyboard.addKeys({
    up: Phaser.Input.Keyboard.KeyCodes.W,
    down: Phaser.Input.Keyboard.KeyCodes.S,
    left: Phaser.Input.Keyboard.KeyCodes.A,
    right: Phaser.Input.Keyboard.KeyCodes.D,
  });


  }

update(time, delta) {

      if (!this.player) {
        return;
    }
    let velocityX = 0;
    let velocityY = 0;

    // Determine velocity based on key presses
    if (this.cursors.up.isDown) {
        this.player.body.velocity = -this.speed;
    } else if (this.cursors.down.isDown) {
        this.player.body.velocity = this.speed;
    }

    if (this.cursors.left.isDown) {
         this.player.body.velocity = -this.speed;
    } else if (this.cursors.right.isDown) {
         this.player.body.velocity = this.speed;
    }

    // Normalize velocity to prevent faster movement diagonally
    if (velocityX !== 0 && velocityY !== 0) {
        const magnitude = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
        velocityX *= this.speed / magnitude;
        velocityY *= this.speed / magnitude;
    }

    // Set the velocity of the player sprite
    this.player.setVelocity(velocityX, velocityY);

    // Play appropriate animation based on movement direction
    if (velocityX !== 0 || velocityY !== 0) {
        if (velocityX > 0) {
            this.player.anims.play('walking-right', true);
        } else if (velocityX < 0) {
            this.player.anims.play('walking-left', true);
        } else if (velocityY < 0) {
            this.player.anims.play('walking-down', true);
        } else if (velocityY > 0) {
            this.player.anims.play('walking-up', true);
        }
    } else {
        // Stop animation when no movement
        this.player.anims.stop();
    }
   this.player.setRotation(0);
}
}
window.ComputerControls = ComputerControls;
