class Images {
    constructor(callback) {
        this._props = [];

        this._loadImage('background', 'jumptowne.jpg');
        this.background.onload = callback;
    }

    _loadImage(prop, imageFile) {
        this._props.push(prop);
        this[prop] = {ready: false};

        this[prop] = new Image();
        this[prop].src = 'assets/' + imageFile;
        if (prop === 'background') {
            this[prop].onload = this._callback;
        }
    }
}

export default Images;
