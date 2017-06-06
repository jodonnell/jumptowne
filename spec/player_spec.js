import Player from '../app/player';

describe('Player', function () {
    let player, control;

    beforeEach(() => {
        control = {isJumpPressed: () => {},
                   isJumpReleased: () => {}};
        player = new Player(control);
    });

    it('updates', function () {
        control.isJumpPressed = () => {return true;};
        player.update();
        expect(player.y).toBe(477);

        player.update();
        expect(player.y).toBe(465.5);

        player.update();
        expect(player.y).toBe(454.5);

        player.update();
        expect(player.y).toBe(444);
    });

    it('draws', function () {
        const playerImageObj = {height: 128, width: 64};
        window.gameImages = {player: playerImageObj};
        window.gameContext = {drawImage: () => {}};
        const contextSpy = spyOn(window.gameContext, 'drawImage');
        player.draw();

        expect(contextSpy).toHaveBeenCalledWith(playerImageObj, 0, 0, 64, 128, 171.5, 477, 32, 64);
    });
});
