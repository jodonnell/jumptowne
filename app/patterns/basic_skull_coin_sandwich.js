import Coin from '../coin';
import Skull from '../skull';

class BasicSkullCoinSandwich {
    constructor(onscreenSprites) {
        this.onscreenSprites = onscreenSprites;
        this.timer = 0;
    }

    update() {
        this.timer += 1;

        if (this.timer === 40 ||
            this.timer === 80 ||
            this.timer === 120)
        {
            this.onscreenSprites.coins.push(new Coin());
        }

        if (this.timer === 20 ||
            this.timer === 140)
        {
            this.onscreenSprites.enemies.push(new Skull());
        }
    }

    isOver() {
        return this.timer > 160;
    }
}

export default BasicSkullCoinSandwich;
