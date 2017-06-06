class Sprite {
    draw() {
        let image = window.gameImages[this.getCurrentImage()];
        window.gameContext.drawImage(image, 0, 0, this.width() * 2, this.height() * 2, this.x, this.y, this.width(), this.height());
    }

    height() {
        return window.gameImages[this.getCurrentImage()].height / 2;
    }

    width() {
        return window.gameImages[this.getCurrentImage()].width / 2;
    }

    getCurrentImage() {
        return this.currentImage;
    }

    rightSide() {
        return this.x + this.width();
    }

    bottomSide() {
        return this.y + this.height();
    }

    update() {

    }
}

export default Sprite;
