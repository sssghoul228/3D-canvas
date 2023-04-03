class Cylinder extends Figure{
    constructor({
        color = '#30d5c8',
        center,
        height = 20,
        count = 10,
        radius = 10,
    }) {
        super({color, center});
        this.height = height;
        this.count = count;
        this.radius = radius;

        this.printPoints();
        this.printEdges();
        this.printPolygons();
    }

    printPoints(){
        for (let i = -this.count / 2; i < this.count / 2; i++){
            for (let j = 0; j < this.count; j++){
                this.points.push(new Point(
                    this.center.x + this.radius * Math.cos(j * 2 * Math.PI / this.count),
                    this.center.y + i * this.height / this.count,
                    this.center.z + this.radius * Math.sin(j * 2 * Math.PI / this.count),
                ));
            }
        }
    }

    printEdges(){
        for (let i = 0; i < this.count; i++) {
            const k = i ? i - 1 : i;
            for (let j = 0; j < this.count - 1; j++) {
                this.edges.push(new Edge(j + i * this.count, j + i * this.count + 1));
                this.edges.push(new Edge(j + k * this.count, j + i * this.count));
            }
            this.edges.push(new Edge(i ? i * this.count - 1 : i, this.count + (i ? i * this.count - 1 : i)));
            this.edges.push(new Edge(i * this.count, (i + 1) * this.count - 1));
        }
    }   

    printPolygons() {
        for (let i = 0; i < this.count - 1; i++) {
            for (let j = 0; j < this.count - 1; j++) {
                this.polygons.push(new Polygon([
                    j + i * this.count,
                    j + (1 + i) * this.count,
                    j + 1 + (i + 1) * this.count,
                    j + i * this.count + 1,
                ], this.color));
            }

            this.polygons.push(new Polygon([
                i * this.count,
                (i + 1) * this.count - 1,
                (i + 2) * this.count - 1,
                (i + 1) * this.count,
            ], this.color));


            
        //     this.polygons.push(new Polygon([
        //         0,
        //         this.count - i,
        //         this.count - i - 1,
        //         this.count - i - 2,
        //     ], this.color))

        //     this.polygons.push(new Polygon([
        //         this.points.length - this.count,
        //         this.points.length - this.count - i,
        //         this.points.length - this.count - i - 1,
        //         this.points.length - this.count - i - 2,
        //     ], this.color))
        }
    }
}