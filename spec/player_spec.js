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
        expect(player.y).toBe(467);

        player.update();
        expect(player.y).toBe(455.5);

        player.update();
        expect(player.y).toBe(444.5);

        player.update();
        expect(player.y).toBe(434);
    });

    it('draws', function () {
        window.gameImages = {player: 'player'};
        window.gameContext = {drawImage: () => {}};
        const contextSpy = spyOn(window.gameContext, 'drawImage');
        player.draw();

        expect(contextSpy).toHaveBeenCalledWith('player', 0, 0, 64, 128, 171.5, 467, 32, 64);
    });
});
