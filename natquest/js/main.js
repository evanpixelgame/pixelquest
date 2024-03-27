const width = window.innerWidth;
const height = window.innerHeight;
//const width = 800;
//const height = 600;
const config = {
  type: Phaser.AUTO,
  width: width,//1280,
  height: height,//720,
  backgroundColor: '#FDD5D5',
  parent: 'game-container',
  pixelArt: true,
  scale: {
      //  mode: Phaser.Scale.LANDSCAPE,
     mode: Phaser.Scale.RESIZE,
        // mode: Phaser.Scale.ScaleModes.WIDTH_CONTROLS_HEIGHT,
// autoCenter: Phaser.Scale.CENTER_BOTH,
        // autoCenter: Phaser.Scale.CENTER_VERTICALLY,
         //  autoCenter: Phaser.Scale.CENTER_BOTH,
 // mode: Phaser.Scale.FIT, 
   // mode: Phaser.Scale.ScaleModes.SHOW_ALL,
         //mode: Phaser.Scale.RESIZE,
        // autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "matter",
    matter: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: [
    Preloader,
    StartMenu,
    Settings,
    NameSelect,
    CharSelect,
    WelcomePlayer,
   // Player,
    OpenWorld,
    MobileControls,
    ComputerControls,
    PlayerAnimations,
    CompUI,
    InsideRoom,
   // ComputerControls,
  ],
   interpolation: true,
};

const game = new Phaser.Game(config);
