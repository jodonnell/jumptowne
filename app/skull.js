import Sprite from './sprite';
import GameInit from './game_init';

class Skull extends Sprite {
    constructor() {
        super();
        this.x = GameInit.width;
        this.y = GameInit.groundY - 100;

        this.currentImage = 'skull';
    }

    update() {
        this.x -= 2;
    }
}

export default Skull;
