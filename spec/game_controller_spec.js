import GameController from '../app/game_controller';
import Coin from '../app/coin';
import Skull from '../app/skull';

describe('GameController', function () {
    let gameController, playerImageObj, coinImageObj, skullObj;

    beforeEach(function () {
        gameController = new GameController({isJumpPressed: () => {return false;},
                                             isJumpReleased: () => {return false;}});

        playerImageObj = {height: 128, width: 64};
        coinImageObj = {width: 24, height: 36};
        skullObj = {width: 58 / 2, height: 64 / 2};
        window.gameImages = {background: 'yum', player: playerImageObj, coin: coinImageObj,
                             skull: skullObj};
        window.gameContext = {drawImage: () => {}, fillText: () => {}, measureText: () => {return {width: 20};}};

        gameController.onscreenSprites.enemies.push(new Skull());
        gameController.onscreenSprites.coins.push(new Coin());
    });

    it('updates', function () {
        expect(gameController.update()).toBe(undefined);
    });

    it('draws', function () {
        const contextSpy = spyOn(window.gameContext, 'drawImage');

        gameController.draw();

        expect(contextSpy).toHaveBeenCalledWith('yum', 0, 0, 640, 1136, 0, 0, 375, 667);
        expect(contextSpy).toHaveBeenCalledWith(playerImageObj, 0, 0, 64, 128, 171.5, 477, 32, 64);
    });

    it('draws the score', () => {
        const contextSpy = spyOn(window.gameContext, 'fillText');

        gameController.score = 1;
        gameController.draw();

        expect(contextSpy).toHaveBeenCalledWith(1, 177.5, 90);
    });

    it('updates the score when you collide with a coin', () => {
        gameController.onscreenSprites.player.x = 40;
        gameController.onscreenSprites.player.y = 40;
        gameController.onscreenSprites.coins[0].x = 41;
        gameController.onscreenSprites.coins[0].y = 41;
        gameController.update();

        expect(gameController.score).toBe(1);
    });

    it('kills you when you touch the skull', () => {
        gameController.onscreenSprites.player.x = 40;
        gameController.onscreenSprites.player.y = 40;
        gameController.onscreenSprites.enemies[0].x = 41;
        gameController.onscreenSprites.enemies[0].y = 41;
        gameController.update();

        expect(gameController.onscreenSprites.player.x).toBe(171.5);
    });

    it('has an enemy', () => {
        expect(gameController.onscreenSprites.enemies.length).toBe(1);
    });

});
