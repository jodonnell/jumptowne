import Sprite from './sprite';

class Player extends Sprite {
    constructor(x, y, control) {
        super();
        this.x = x;
        this.y = y;
        this._control = control;
        this.currentImage = 'player';
    }

    update() {
    }

    draw() {
        let image = window.gameImages[this.getCurrentImage()];
        window.gameContext.drawImage(image, 0, 0, 64, 128, this.x, this.y, 32, 64);
    }
}

export default Player;
