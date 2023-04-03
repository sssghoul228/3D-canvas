class Cube extends Figure {
    constructor(x = -5, y = -5, z = -5, size = 10, points, edges, polygons) {
        super(points, edges, polygons);
        this.color = '#30d5c8';
        this.points = [new Point(5, 5, 5), //справа сверху
        new Point(-5, 5, 5), //слева сверху
        new Point(-5, -5, 5), //слева снизу
        new Point(5, -5, 5), //справа снизу
        new Point(-5, -5, -5), //2слева снизу
        new Point(5, -5, -5), //2справа снизу 
        new Point(5, 5, -5), //2справа сверху
        new Point(-5, 5, -5)]; //2слева сверху

        this.edges = [new Edge(0, 1),
        new Edge(1, 2),
        new Edge(2, 3),
        new Edge(3, 0),
        new Edge(4, 5),
        new Edge(5, 6),
        new Edge(6, 7),
        new Edge(7, 4),
        new Edge(0, 6),
        new Edge(1, 7),
        new Edge(2, 4),
        new Edge(3, 5),
        ]

        this.polygons = [
            new Polygon([0, 1, 2, 3], this.color),
            new Polygon([2, 3, 5, 4], this.color),
            new Polygon([5, 4, 7, 6], this.color),
            new Polygon([7, 6, 0, 1], this.color),
            new Polygon([0, 6, 5, 3], this.color),
            new Polygon([1, 7, 4, 2], this.color)
        ]

    }
}