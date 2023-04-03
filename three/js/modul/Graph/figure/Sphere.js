class Sphere extends Figure{
    constructor(points, edges, polygons){
        super(points, edges, polygons);
        this.radius = 10;
        this.count = 16;
        this.color = '#30d5c8';
        this.printPointSphere();
        this.printEdgesSphere();
        this.printPolygonsSphere();
    }
    printPointSphere(){
        for (let i = 0; i < this.count; i++) {
            for (let j = 0; j < this.count; j++) {
                this.points.push(new Point(
                    this.radius * Math.sin(i * 2 * Math.PI / this.count) * Math.cos(j * Math.PI / this.count),
                    this.radius * Math.cos(i * 2 * Math.PI / this.count),
                    this.radius * Math.sin(i * 2 * Math.PI / this.count) * Math.sin(j * Math.PI / this.count),
                ));
            }
        }
    }

    printEdgesSphere(){
        for (let i = 0; i < this.count; i++) {
            const k = i ? i - 1 : i;
            for (let j = 0; j < this.count - 1; j++) {
                this.edges.push(new Edge(j + i * this.count, j + i * this.count + 1));
                this.edges.push(new Edge(j + i * this.count, j + k * this.count));
            }
            this.edges.push(new Edge(i * this.count, this.points.length - this.count * k - 1));
            this.edges.push(new Edge(this.points.length - i * this.count - 1, this.points.length - k * this.count - 1));
            this.edges.push(new Edge(0, this.points.length - i - 1));
        }
    }

    printPolygonsSphere(){
        for (let i = 0; i < this.count - 1; i++) {
            for (let j = 0; j < this.count - 1; j++) {
                this.polygons.push(new Polygon([
                    j + i * this.count,
                    j + 1 + i * this.count,
                    j + 1 + (i + 1) * this.count,
                    j + (i + 1) * this.count,
                ], this.color));
            }

            this.polygons.push(new Polygon([
                this.points.length - i * this.count - 1,
                this.points.length - (i ? (i - 1) : i) * this.count - 1,
                i * this.count,
                (i + 1) * this.count,
            ], this.color));

            this.polygons.push(new Polygon([
                0,
                this.points.length - i - 1,
                this.points.length - i - 2,
            ], this.color))
        }

        this.polygons.push(new Polygon([
            0,
            this.points.length - this.count,
            this.count * 2 - 1,
        ], this.color))
    }
}


