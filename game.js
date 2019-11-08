const gameState = {}; // Keeps track of the state of the game
class MainMenu extends Phaser.Scene {
    constructor() {
        super({key: MainMenu})
       
    };

    preload() {   //Loads in external files/assets

        this.load.image('bg','assets/maze.jpg'); //Loads in background image
       
    };

    create() { //Defines the GameObjects
        
        this.add.image(20,20,'bg'); //adds background image to the game

    };

    update() { // Defines animation and interaction 

    };
}

const config = { // Structures Phaser Game
    width: 400,
    height: 400,
    backgroundColor: 0,
    scene: [MainMenu] // Stores scenes of my game

};
const game = new Phaser.Game(config); // Creates Phaser game 

