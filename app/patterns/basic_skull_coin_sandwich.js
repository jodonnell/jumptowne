import Coin from '../coin';
import Skull from '../skull';

class BasicSkullCoinSandwich {
    constructor(onscreenSprites, speed, y) {
        this.onscreenSprites = onscreenSprites;
        this.speed = speed;
        this.y = y;
        this.timer = 0;
    }

    update() {
        this.timer += 1;

        if (this.timer === 40 ||
            this.timer === 80 ||
            this.timer === 120)
        {
            this.onscreenSprites.coins.push(new Coin(this.speed, this.y));
        }

        if (this.timer === 20 ||
            this.timer === 140)
        {
            this.onscreenSprites.enemies.push(new Skull(this.speed, this.y));
        }
    }

    isOver() {
        return this.timer > 160;
    }
}

export default BasicSkullCoinSandwich;
