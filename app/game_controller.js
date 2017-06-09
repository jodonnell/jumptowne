import Player from './player';
import GameInit from './game_init';
import Pattern from './pattern';
import OnscreenSprites from './onscreen_sprites';
import CollisionDetector from './collision_detector';
import _ from 'lodash';

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
        this.patterns = [new Pattern(this.onscreenSprites)];
        this.score = 0;
    }

    draw() {
        let image = window.gameImages['background'];
        window.gameContext.drawImage(image, 0, 0, 640, 1136, 0, 0, GameInit.width, GameInit.height);

        this._eachSprite((sprite) => { sprite.draw(); });
        this.drawScore();
    }

    update() {
        this._eachSprite((sprite) => {
            sprite.update({onscreenSprites: this.onscreenSprites});
        });

        _.each(this.patterns, (pattern) => { pattern.update(); });
        _.remove(this.patterns, (pattern) => { return pattern.isOver(); });

        let collidedWith = CollisionDetector.doesCollideWithSprites(this.onscreenSprites.player, this.onscreenSprites.coins);
        if (collidedWith) {
            this.onscreenSprites.coins.remove(collidedWith);
            this.score += 1;
        }

        if (CollisionDetector.doesCollideWithSprites(this.onscreenSprites.player, this.onscreenSprites.enemies)) {
            this.initGame();
        }
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
