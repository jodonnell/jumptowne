import Player from './player';
import GameInit from './game_init';
import Coin from './coin';
import CollisionDetector from './collision_detector';
import _ from 'lodash';

class GameController {
    constructor(control) {
        this.control = control;
        this.player = new Player(this.control);
        this.coins = [new Coin()];
        this.score = 0;
    }

    draw() {
        let image = window.gameImages['background'];
        window.gameContext.drawImage(image, 0, 0, 640, 1136, 0, 0, GameInit.width, GameInit.height);

        _.each(this.coins, (coin) => { coin.draw(); });
        this.player.draw();

        this.drawScore();
    }

    update() {
        this.player.update();
        _.each(this.coins, (coin) => { coin.update(); });

        if (CollisionDetector.doesCollideWithSprites(this.player, this.coins)) {
            this.coins = [];
            this.score += 1;
        }
    }

    drawScore() {
        window.gameContext.font = '90px "Munro"';
        const length = window.gameContext.measureText(this.score).width;
        window.gameContext.fillText(this.score, GameInit.centerX - (length / 2), 90);
    }
}

export default GameController;
