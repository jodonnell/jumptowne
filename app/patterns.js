import Basic3Coin from './patterns/basic_3_coin';
import BasicSkullCoinSandwich from './patterns/basic_skull_coin_sandwich';
import _ from 'lodash';

class Patterns {
    constructor(onscreenSprites) {
        this.onscreenSprites = onscreenSprites;
        this.patterns = [this._selectPattern()];
    }

    update() {
        _.each(this.patterns, (pattern) => { pattern.update(); });
        _.remove(this.patterns, (pattern) => { return pattern.isOver(); });

        if (this.patterns.length === 0) {
            this.patterns.push(this._selectPattern());
        }
    }

    _selectPattern() {
        const klass = _.sample([Basic3Coin, BasicSkullCoinSandwich]);
        return new klass(this.onscreenSprites);
    }
}

export default Patterns;
