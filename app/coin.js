import Sprite from './sprite';
import GameInit from './game_init';

class Coin extends Sprite {
    constructor() {
        super();
        this.x = GameInit.width;
        this.y = GameInit.groundY - 100;

        this.currentImage = 'coin';
    }


    update() {
        this.x -= 2;
    }
}

export default Coin;
