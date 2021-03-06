class GameInit {
    constructor(hide) {
        this.createCanvas();
        if (hide) {
            this.hide = true;
        }
    }

    static get width() {
        return 375;
    }

    static get height() {
        return 667;
    }

    static get centerY() {
        return this.height / 2;
    }

    static get centerX() {
        return this.width / 2;
    }

    static get groundY() {
        return this.height - 190;
    }

    createCanvas() {
        let canvas = document.createElement('canvas');
        canvas.id = 'gameCanvas';
        canvas.width = GameInit.width;
        canvas.height = GameInit.height;

        document.body.appendChild(canvas);

        canvas.style.height = '99%';
        canvas.style.margin = 'auto';
        canvas.style.position = 'absolute';
        canvas.style.marginLeft = 'auto';
        canvas.style.marginRight = 'auto';
        canvas.style.left =  '0px';
        canvas.style.right = '0px';

        if (this.hide) {
            canvas.style.visibilty = 'hidden';
        }
    }

    viewportWidth() {
        let w = window,
            e = document.documentElement,
            g = document.getElementsByTagName('body')[0];

        return w.innerWidth || e.clientWidth || g.clientWidth;
    }

    viewportHeight() {
        let w = window,
            e = document.documentElement,
            g = document.getElementsByTagName('body')[0];

        return w.innerHeight|| e.clientHeight|| g.clientHeight;
    }

    destroyCanvas() {
        let canvas = document.getElementById('gameCanvas');
        document.body.removeChild(canvas);
    }
}

export default GameInit;
