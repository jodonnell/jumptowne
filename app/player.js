import Sprite from './sprite';
import GameInit from './game_init';

class Player extends Sprite {
    constructor(control) {
        super();
        this.x = GameInit.centerX - 16;
        this.y = GameInit.height - 200;
        this._control = control;
        this.currentImage = 'player';
    }

    update() {
        if (this._control.isJumpHeld()) {
            this.jump();
        }
    }

    draw() {
        let image = window.gameImages[this.getCurrentImage()];
        window.gameContext.drawImage(image, 0, 0, 64, 128, this.x, this.y, 32, 64);
    }

    jump() {
        this.y -= 10;
    }
}

export default Player;
