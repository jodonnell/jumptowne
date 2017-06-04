import Player from './player';
import GameInit from './game_init';

class GameController {
    constructor(control) {
        this.control = control;
        this.player = new Player(this.control);
    }

    draw() {
        let image = window.gameImages['background'];
        window.gameContext.drawImage(image, 0, 0, 640, 1136, 0, 0, GameInit.width, GameInit.height);

        this.player.draw();
    }

    update() {
        this.player.update();
    }
}

export default GameController;
