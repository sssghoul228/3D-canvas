class Graph3DCom extends Component {
    constructor(param) {
        super(param);
        this.WIN = {
            width: 20,
            height: 20,
            bottom: -10,
            left: -10,
            focus: new Point(0, 0, 30),
            camera: new Point(0, 0, 50),
        };

        this.canMove = false;
        this.zoomStep = 1.2;

        this.light = new Light(-40, 0, 0, 1000);

        this.canvas = new Canvas({
            id: 'canvas3D',
            WIN: this.WIN,
            callbacks: { wheel: (event) => this.wheel(event),
                mouseUp: () => this.mouseUp(),
                mouseDown: () => this.mouseDown(),
                mouseMove: (event) => this.mouseMove(event),
                mouseLeave: () => this.mouseLeave() },
            width: 700,
            height: 700
        });

        this.math3D = new Math3D({
            WIN: this.WIN
        });

        this.scene = [new Cylinder({})];

        this.renderScene();
    }

    renderScene() {
        this.canvas.clear();
        this.scene.forEach(figure => {
            this.printFigure(figure);
        });
    }

    printFigure(figure){
        this.printPoints(figure);
        this.printEdges(figure);
        this.printScene(figure);
    }

    printPoints(figure) {
        figure.points.forEach(point => {
        this.canvas.point(
            this.math3D.xs(point),
            this.math3D.ys(point)
            )
        })
    }

    printEdges(figure) {
        figure.edges.forEach(edge => {
        this.canvas.line(
            this.math3D.xs(figure.points[edge.p1]),
            this.math3D.ys(figure.points[edge.p1]),
            this.math3D.xs(figure.points[edge.p2]),
            this.math3D.ys(figure.points[edge.p2]),
        )
    })
    }

    printScene(figure){
        this.math3D.calcCenters(figure);

        this.math3D.calcDistance(figure, this.WIN.camera, 'distance');

        this.math3D.calcDistance(figure, this.light, 'lumen');

        this.math3D.SortByArtistAlgoritm(figure.polygons);

        figure.polygons.forEach(polygon => {
            const points = [];
            for (let i = 0; i < polygon.points.length; i++) {
                points.push(figure.points[polygon.points[i]]);
            };

            let { r, g, b } = polygon.color;
            const lumen = this.math3D.calcIllumination(polygon.distance, this.light.lumen);
            r = Math.round(r * lumen);
            g = Math.round(g * lumen);
            b = Math.round(b * lumen);

            this.canvas.polygon(
                points.map(point => {
                    return{
                        x: this.math3D.xs(point),
                        y: this.math3D.ys(point)
                    }
                }),
                polygon.rgbToHex(r, g, b),
            )
        })
    }

    wheel(event) {
        const delta = (event.wheelDelta > 0) ? this.zoomStep : 1 / this.zoomStep;
        this.scene.forEach(figure => {
            figure.points.forEach(point => {
                this.math3D.zoom(delta, point);
                })
            this.renderScene();
        })
    }

    mouseUp() {
        this.canMove = false;
    };

    mouseDown() {
        this.canMove = true;
    };

    mouseMove(event) {
        if (this.canMove) {
            const prop = 180;
            this.scene.forEach(figure => {
            figure.points.forEach((point) => {
                this.math3D.transformPoint(this.math3D.rotateOx(event.movementY / prop), point);
                this.math3D.transformPoint(this.math3D.rotateOy(-event.movementX / prop), point)
            })
        })
        this.renderScene();
    }
}

    mouseLeave() {
        this.canMove = false;
        this.renderScene();
    }
}