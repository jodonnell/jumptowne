import _ from 'lodash';

class OnscreenSprites {
    constructor(sprites) {
        if (!sprites) {
            sprites = {};
        }

        this.players = sprites.player || [];
        this.player = this.players[0];
        this.enemies = sprites.enemies || [];
        this.coins = sprites.coins || [];

        this.sprites = [this.players].concat([this.enemies], [this.coins]);

        let remove = function (element) {
            let index = this.indexOf(element);
            this.splice(index, 1);
        };

        this.enemies.remove = remove;
        this.coins.remove = remove;
    }

    hasSprite(sprite) {
        return _.some(this.sprites, (spriteTypes) => {
            return spriteTypes.includes(sprite);
        });
    }
}

export default OnscreenSprites;
