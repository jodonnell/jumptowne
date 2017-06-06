import Sprite from './sprite';
import GameInit from './game_init';

class Player extends Sprite {
    constructor(control) {
        super();
        this.x = GameInit.centerX - 16;
        this.y = this.groundY();

        this._control = control;
        this.currentImage = 'player';
        this.velocityY = 0;
    }

    groundY() {
        return GameInit.groundY;
    }

    update() {
        this.checkControls();
        this.updateJump();
    }

    updateJump() {
        const gravity = 0.5;
        this.velocityY += gravity;
        this.y += this.velocityY;

        if (this.y > this.groundY()) {
            this.y = this.groundY();
            this.velocityY = 0.0;
            this.onGround = true;
        }
    }

    checkControls() {
        if (this._control.isJumpPressed()) {
            this.startJump();
        }
        else if (this._control.isJumpReleased()) {
            this.endJump();
        }
    }

    startJump() {
        if (this.onGround) {
            this.velocityY = -12.0;
            this.onGround = false;
        }
    }

    endJump() {
        if (this.velocityY < -6.0) {
            this.velocityY = -6.0;
        }
    }
}

export default Player;
