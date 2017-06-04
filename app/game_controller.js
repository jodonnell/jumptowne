class GameController {
    constructor(control) {
        this.control = control;
    }

    draw() {
        let image = window.gameImages['background'];
        window.gameContext.drawImage(image, 0, 0);
    }

    update() {
    }
}

export default GameController;
