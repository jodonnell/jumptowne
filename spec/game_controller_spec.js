import GameController from '../app/game_controller';

describe('GameController', function () {
    let gameController;

    beforeEach(function () {
        gameController = new GameController();
    });

    it('updates', function () {
        expect(gameController.update()).toBe(undefined);
    });

    it('draws', function () {
        window.gameImages = {background: 'yum'};
        window.gameContext = {drawImage: () => {}};
        const contextSpy = spyOn(window.gameContext, 'drawImage');
        expect(gameController.draw()).toBe(undefined);
        expect(contextSpy).toHaveBeenCalledWith('yum', 0, 0);
    });
});
