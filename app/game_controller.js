import Player from './player';
import GameInit from './game_init';
import Patterns from './patterns';
import OnscreenSprites from './onscreen_sprites';
import CollisionDetector from './collision_detector';

class GameController {
    constructor(control) {
        this.control = control;
        this.initGame();
    }

    initGame() {
        const player = new Player(this.control);
        const coins = [];
        const enemies = [];
        this.onscreenSprites = new OnscreenSprites({player: [player],
                                                    coins: coins,
                                                    enemies: enemies });
        this.patterns = new Patterns(this.onscreenSprites);
        this.score = 0;
    }

    draw() {
        this.drawBackground();
        this._eachSprite((sprite) => { sprite.draw(); });
        this.drawScore();
    }

    update() {
        this._eachSprite((sprite) => { sprite.update({onscreenSprites: this.onscreenSprites}); });
        this.updatePatterns();
        this.coinCollision();
        this.enemCollision();
    }

    updatePatterns() {
        this.patterns.update();
    }

    enemCollision() {
        if (CollisionDetector.doesCollideWithSprites(this.onscreenSprites.player, this.onscreenSprites.enemies)) {
            this.initGame();
        }
    }

    coinCollision() {
        let collidedWith = CollisionDetector.doesCollideWithSprites(this.onscreenSprites.player, this.onscreenSprites.coins);
        if (collidedWith) {
            this.onscreenSprites.coins.remove(collidedWith);
            this.score += 1;
        }
    }

    drawBackground() {
        let image = window.gameImages['background'];
        window.gameContext.drawImage(image, 0, 0, 640, 1136, 0, 0, GameInit.width, GameInit.height);
    }

    drawScore() {
        window.gameContext.font = '90px "Munro"';
        const length = window.gameContext.measureText(this.score).width;
        window.gameContext.fillText(this.score, GameInit.centerX - (length / 2), 90);
    }

    _eachSprite(spriteAction) {
        for (let i = 0; i < this.onscreenSprites.sprites.length; i++) {
            const sprites = this.onscreenSprites.sprites[i];
            for (let j = 0; j < sprites.length; j++) {
                const sprite = this.onscreenSprites.sprites[i][j];
                spriteAction(sprite);
            }
        }
    }
}

export default GameController;
