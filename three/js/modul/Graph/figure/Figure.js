class Figure{
    constructor({
        color = '#30d5c8',
        center = new Point
    }){
        this.points = [];
        this.edges = [];
        this.polygons = [];
        this.color = color;
        this.center = center;
    }
}