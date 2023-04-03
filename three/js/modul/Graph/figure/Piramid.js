class Piramid extends Figure{
    constructor(x = -5, y = -5, z = -5, size = 10, points, edges, polygons){
        super(points, edges, polygons);
        this.color = '#30d5c8';
        this.points = [new Point(0, 20, 0), //сверху
        new Point(-13, -5, 15), //слева снизу
        new Point(13, -5, 15), //справа снизу
        new Point(-13, -5, -15),
        new Point(13, -5, -15)]; //2слева сверху


        this.edges = [new Edge(0, 1),
        new Edge(0, 2),
        new Edge(0, 3),
        new Edge(0, 4),
        new Edge(1, 2),
        new Edge(1, 3),
        new Edge(2, 4),
        new Edge(3, 4)];

        this.polygons = [
            new Polygon([0, 1, 2], this.color),
            new Polygon([0, 1, 3], this.color),
            new Polygon([0, 2, 4], this.color),
            new Polygon([0, 3, 4], this.color),
            new Polygon([1, 3, 4, 2], this.color)
        ]

    }
}
