import GameController from '../app/game_controller';

describe('GameController', function () {
    let gameController;

    beforeEach(function () {
        gameController = new GameController({isJumpPressed: () => {return false;},
                                             isJumpReleased: () => {return false;}});
    });

    it('updates', function () {
        expect(gameController.update()).toBe(undefined);
    });

    it('draws', function () {
        window.gameImages = {background: 'yum', player: 'player'};
        window.gameContext = {drawImage: () => {}};
        const contextSpy = spyOn(window.gameContext, 'drawImage');
        gameController.draw();

        expect(contextSpy).toHaveBeenCalledWith('yum', 0, 0, 640, 1136, 0, 0, 375, 667);
        expect(contextSpy).toHaveBeenCalledWith('player', 0, 0, 64, 128, 171.5, 467, 32, 64);
    });
});
