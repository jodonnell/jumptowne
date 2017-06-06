import _ from 'lodash';

class CollisionDetector {
    static doesCollideWithSprites(sprite, sprites) {
        return _.find(sprites, (otherSprite) => {
            return this.doesCollideWith(sprite, otherSprite);
        });
    }

    static doesCollideWith(spriteA, spriteB) {
        if (spriteA === spriteB) {
            return false;
        }
        const xMatch = spriteA.x < spriteB.rightSide() && spriteA.rightSide() > spriteB.x;
        const yMatch = spriteA.y < spriteB.bottomSide() && spriteA.bottomSide() > spriteB.y;
        return xMatch && yMatch;
    }
}

export default CollisionDetector;
