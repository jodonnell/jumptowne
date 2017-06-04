class Sprite {
    draw() {
        let image = window.gameImages[this.getCurrentImage()];
        window.gameContext.drawImage(image, 0, 0, 64, 128, this.x, this.y, 32, 64);
    }

    height() {
        return window.gameImages[this.getCurrentImage()].height;
    }

    width() {
        return window.gameImages[this.getCurrentImage()].width;
    }

    getCurrentImage() {
        return this.currentImage;
    }

    rightSide() {
        return this.x + this.width();
    }

    bottomSide() {
        return this.y - this.height();
    }

    update() {

    }
}

export default Sprite;
