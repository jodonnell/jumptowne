import Sprite from './sprite';
import GameInit from './game_init';

class Skull extends Sprite {
    constructor(speed, yOffset) {
        super();
        this.x = GameInit.width;
        this.y = GameInit.groundY - 100 + yOffset;
        this.speed = speed;

        this.currentImage = 'skull';
    }

    update() {
        this.x -= this.speed;
    }
}

export default Skull;
