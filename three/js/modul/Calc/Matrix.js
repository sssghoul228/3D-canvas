class Matrix{
    constructor(values){
        this.values=[];
        values.forEach((arr, i) => {
            this.values[i] = [],
            arr.forEach(elem => {this.values[i].push(elem)});
    });
}

    toString() {
        return `[${this.values.map(
            arr => arr.map(elem => elem.toString()).join('; ')
        ).join('|\n')}]`;
    }

    module() {
        const { elem } = this.values;
        return (elem.length === 1) ? 
                elem[0] :
            (elem.length === 2) ? 
                elem[0][0] * elem[1][1] - elem[1][0] * elem[0][1] :
            (elem.length === 3) ? 
                elem[0][0] * (elem[1][1] * elem[2][2] - elem[2][1] * elem[1][2])
                - elem[0][1] * (elem[1][0] * elem[2][2] - elem[2][0] * elem[1][2]) 
                + elem[0][2] * (elem[1][0] * elem[2][1] - elem[2][0] * elem[1][1]) 
            : null;
    }

}


