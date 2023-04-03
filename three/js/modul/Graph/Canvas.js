class Canvas{
    constructor({id,width = 500,height = 500,WIN,callbacks}) {
    
        this.canvas = document.getElementById(id);
        this.context = this.canvas.getContext('2d');

        this.canvas.width = width;
        this.canvas.height = height;

        const { wheel, mouseUp, mouseDown, mouseMove, mouseLeave } = callbacks;
        this.canvas.addEventListener('wheel', wheel);
        this.canvas.addEventListener('mouseup', mouseUp);
        this.canvas.addEventListener('mousedown', mouseDown);
        this.canvas.addEventListener('mousemove', mouseMove);
        this.canvas.addEventListener('mouseleave', mouseLeave);

        this.WIN = WIN;

    }
    
    
    xs (x) { 
        return (x - this.WIN.left) / this.WIN.width * this.canvas.width;
    }
    ys (y) {
        return this.canvas.height - (y - this.WIN.bottom) / this.WIN.height * this.canvas.height;
    }
    sx (x) { 
        return (x * this.WIN.width / this.canvas.width);
    }
    sy (y) {
        return (-y * this.WIN.height / this.canvas.height);
    }
    s1 (xs) {
        return xs * this.WIN.widht / this.canvas.widht + this.WIN.left;
    }
    s2 (ys) {
        return -ys * this.WIN.height / this.canvas.height + this.WIN.bottom + this.WIN.height;
    }

    printReact = ( x, y, widht, height, color) => {
        const heightRect = height * this.canvas.height / this.WIN.height;
        const widhtRect = widht * this.canvas.widht / this.WIN.widht;

        this.context.fillStyle = color;
        this.context.fillRect(this.xs(x), this.ys(y), widhtRect, heightRect);
    }

    printText( text, x, y) {
        this.context.fontsize = 3;
        this.context.fillStyle = 'black';
        this.context.fillText(text, this.xs(x), this.ys(y));
    }

    point( x, y, color = 'red', size = 3.5 ){
        this.context.beginPath();
        this.context.arc(this.xs(x), this.ys(y), size, 0, 2 * Math.PI);
        this.context.fillStyle = color;
        this.context.fill();
        this.context.closePath();

    }

    clear() {
        var lastColor = this.context.fillStyle;
        this.context.fillStyle = 'white';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = lastColor;
    };

    line ( x1, y1, x2, y2, lineWidth = 1, color = 'black' , isDash = false) {
        this.context.beginPath();
        this.context.strokeStyle = color;
        this.context.setLineDash([isDash?isDash : '']);
        this.context.moveTo(this.xs(x1), this.ys(y1));
        if (isDash) {
            this.context.lineWidth = 1;
            this.context.setLineDash([10, 10]);
        } else {
            this.context.lineWidth = lineWidth;
            this.context.setLineDash([]);
        }
        this.context.lineTo(this.xs(x2), this.ys(y2));
        this.context.stroke();
        this.context.closePath();
    };

    polygon (points = [], color = '#F002') {
        if (points.length >= 3){ 
            this.context.beginPath();
            this.context.strokeStyle = color;
            this.context.fillStyle = color;
            for (let i = 1; i < points.length; i++){
                this.context.lineTo(this.xs(points[i].x),this.ys(points[i].y));
            }
            this.context.lineTo(this.xs(points[0].x),this.ys(points[0].y));
                this.context.stroke;
            this.context.closePath();
            this.context.fill();
        }
    }
}
