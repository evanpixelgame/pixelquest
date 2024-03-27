export class PlayerSprite extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, texture) {
        super(scene.matter.world, x, y, texture);

        // Initialize the player sprite
        this.init();

        // Add the player sprite to the scene
        scene.add.existing(this);
        
        // Set the world property to the scene's matter world
      //  this.world = scene.matter.world;
        this.body = this.body;
       // this.player.body.setVelocity(velocityX, velocityY);
        this.gameObject = this;
       // this.layer = layer;
         //this.setVelocity = this.setVelocity.bind(this); // Bind setVelocity to this instance
     //   this.player.setVelocity(this.player.body, velocityX, velocityY);
    }
    
    init() {
        // Set up the player's physics body
        const playerWidth = this.width;
        const playerHeight = this.height;
        this.setBody({
            type: 'rectangle',
            width: playerWidth / 2,
            height: playerHeight / 2,
            isStatic: false,
            restitution: 0,
            friction: 0.1,
            frictionAir: 0.02,
        });

        // Set the player's scale and size
        this.setScale(0.5);
        const scaledWidth = playerWidth * 0.5;
        const scaledHeight = playerHeight * 0.5;
        this.setSize(scaledWidth, scaledHeight);
           // this.body.setVelocity(velocityX, velocityY);
            console.log(this.body);
            console.log(this.world);
            console.log('Player Body Worldfromplaysprite:', this.body.world);
       
 
    }
}
