class InputControl {
    constructor() {
        this.held = 0;
        this.released = 0;
        this.currentlyHolding = false;
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
        if (!this.currentlyHolding) {
            this.held = 1;
            this.currentlyHolding = true;
        }
    }

    jumpReleased() {
        this.currentlyHolding = false;
        this.released = 1;
    }

    isJumpPressed() {
        if (this.held === 1) {
            this.held = 0;
            return true;
        }
        return false;
    }

    isJumpReleased() {
        if (this.released === 1) {
            this.released = 0;
            return true;
        }
        return false;
    }
}

export default InputControl;
