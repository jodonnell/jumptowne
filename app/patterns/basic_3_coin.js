import Coin from '../coin';

class Basic3Coin {
    constructor(onscreenSprites) {
        this.onscreenSprites = onscreenSprites;
        this.timer = 0;
    }

    update() {
        this.timer += 1;

        if (this.timer % 40 === 0) {
            this.onscreenSprites.coins.push(new Coin());
        }
    }

    isOver() {
        return this.timer > 150;
    }
}

export default Basic3Coin;