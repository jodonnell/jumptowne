class InputControl {
    constructor() {
        this.space = 0;
        this.getKey();
    }

    get SPACE() {
        return 32;
    }

    getKey() {
        document.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.jumpPressed();
        }, false);

        let touchEnd = (e) => {
            e.preventDefault();
            this.jumpReleased();
        };

        document.addEventListener('touchend', touchEnd, false);
        document.addEventListener('touchcancel', touchEnd, false);

        let keydown = (event) => {
            switch (event.which) {
            case this.SPACE:
                this.jumpPressed();
                break;
            }
        };

        let keyup = (event) => {
            switch (event.which) {
            case this.SPACE:
                this.jumpReleased();
                break;
            }
        };

        document.addEventListener('keydown', keydown, false);
        document.addEventListener('keyup', keyup, false);
    }

    jumpPressed() {
        this.space = 1;
    }

    jumpReleased() {
        this.space = 0;
    }

    isJumpHeld() {
        return this.space;
    }
}

export default InputControl;
